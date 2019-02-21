import json
import time
from flask import jsonify, Response
from jboardapi.models import Post, Forum
from flask import Blueprint, flash, jsonify, redirect, request, session, url_for

forums_blueprint = Blueprint('forums',
                               __name__,
                               url_prefix='/forums')

@forums_blueprint.route('/_landing')
def get_landing_data():
    forums = Forum.objects()
    result = [json.loads(forum.to_json()) for forum in forums]
    for forum in result:
        forum['_id'] = forum['_id']['$oid']
    sort = request.args.get('sort')
    if sort == "new":
        result = sorted(result, key=lambda forum: forum['publish_date']['$date'], reverse=True)
    else:
        result = sorted(result, key=lambda forum: forum['post_count'], reverse=True)
    return jsonify(result)

@forums_blueprint.route('/<id>')
def get_forum_data(id):
    forum = json.loads(Forum.objects.get(id=id).to_json())
    forum['_id'] = forum['_id']['$oid']
    return jsonify(forum)

@forums_blueprint.route('/new', methods=['POST', 'OPTIONS'])
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


        new_forum = Forum(
            title = request.form.get('title'),
            description = request.form.get('description'),
            image = request.form.get('image')

        )

        # setattr(new_post, 'title', title)
        # setattr(new_post, 'text', text)
        # setattr(new_post, 'image', image)
        # setattr(new_post, 'forum', forum)
        # pdb.set_trace()

        new_forum.save()

        return jsonify({'success': '200'})
