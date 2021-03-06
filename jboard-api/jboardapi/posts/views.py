import json
import time
from flask import jsonify, Response
from jboardapi.models import Post, Forum
from flask import Blueprint, flash, jsonify, redirect, request, session, url_for

posts_blueprint = Blueprint('posts',
                               __name__,
                               url_prefix='/posts')

@posts_blueprint.route('/_landing')
def get_landing_data():
    posts = Post.objects()
    result = [json.loads(post.to_json()) for post in posts]
    for post in result:
        post['_id'] = post['_id']['$oid']
    sort = request.args.get('sort')
    if sort == "buzz":
        result = sorted(result, key=lambda post: post['up_votes'] + post['down_votes'] + post['comment_count'], reverse=True)
    elif sort == "new":
        result = sorted(result, key=lambda post: post['publish_date']['$date'], reverse=True)
    else:
        result = sorted(result, key=lambda post: post['up_votes'] - post['down_votes'], reverse=True)
    return jsonify(result)

@posts_blueprint.route('/forum/<id>')
def get_forum_data(id):
    posts = Post.objects(f_ref=id)
    result = [json.loads(post.to_json()) for post in posts]
    for post in result:
        post['_id'] = post['_id']['$oid']
    sort = request.args.get('sort')
    if sort == "buzz":
        result = sorted(result, key=lambda post: post['up_votes'] + post['down_votes'] + post['comment_count'], reverse=True)
    elif sort == "new":
        result = sorted(result, key=lambda post: post['publish_date']['$date'], reverse=True)
    else:
        result = sorted(result, key=lambda post: post['up_votes'] - post['down_votes'], reverse=True)
    return jsonify(result)

@posts_blueprint.route('/<id>')
def get_post_data(id):
    post = json.loads(Post.objects.get(id=id).to_json())
    post['_id'] = post['_id']['$oid']
    return jsonify(post)

@posts_blueprint.route('/downvote/<id>', methods=['POST', 'OPTIONS'])
def downvote_post(id):
    post = Post.objects.get(id=id)
    votes = post['down_votes']
    votes += 1
    post['down_votes'] = votes
    post.save()
    return jsonify(votes)

@posts_blueprint.route('/upvote/<id>', methods=['POST', 'OPTIONS'])
def upvote_post(id):
    post = Post.objects.get(id=id)
    votes = post['up_votes']
    votes += 1
    post['up_votes'] = votes
    post.save()
    return jsonify(votes)

@posts_blueprint.route('/new', methods=['POST', 'OPTIONS'])
def new_one():
    import pdb
    if request.method == 'OPTIONS':
        # pdb.set_trace()
        resp = Response()
        resp.headers['Access-Control-Allow-Origin'] = '*'
        resp.headers['Access-Control-Allow-Methods'] = "POST, GET, OPTIONS"
        resp.headers['Access-Control-Allow-Headers'] = "X-PINGOTHER, Content-Type"
        resp.headers['Access-Control-Max-Age'] = "80000"
        return resp
    else:
        # pdb.set_trace()
        # title = request.form.get('title')
        # text = request.form.get('text')
        # image = request.form.get('image')
        # forum = request.form.get('forum')


        new_post = Post(
            title = request.form.get('title'),
            text = request.form.get('text'),
            image = request.form.get('image'),
            f_ref = request.form.get('f_ref')

        )

        forum = Forum.objects.get(id=request.form.get('f_ref'))
        forum.post_count = forum.post_count + 1
        forum.save()

        # setattr(new_post, 'title', title)
        # setattr(new_post, 'text', text)
        # setattr(new_post, 'image', image)
        # setattr(new_post, 'forum', forum)
        # pdb.set_trace()

        new_post.save()

        return jsonify({'success': '200'})
