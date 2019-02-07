import json
import time
from flask import jsonify, Response
from jboardapi.models import Post
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
    return jsonify(result)

@posts_blueprint.route('/')
def get_forum_data():
    forum = request.args.get('forum')
    posts = Post.objects(forum=forum)
    result = [json.loads(post.to_json()) for post in posts]
    for post in result:
        post['_id'] = post['_id']['$oid']
    return jsonify(result)

@posts_blueprint.route('/<id>')
def get_post_data(id):
    post = json.loads(Post.objects.get(id=id).to_json())
    post['_id'] = post['_id']['$oid']
    return jsonify(post)

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
            forum = request.form.get('forum')

        )

        # setattr(new_post, 'title', title)
        # setattr(new_post, 'text', text)
        # setattr(new_post, 'image', image)
        # setattr(new_post, 'forum', forum)
        # pdb.set_trace()

        new_post.save()

        return jsonify({'success': '200'})
