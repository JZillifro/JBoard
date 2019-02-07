import json
import time
from flask import jsonify, Response
from jboardapi.models import Post, Comment
from flask import Blueprint, flash, jsonify, redirect, request, session, url_for

comments_blueprint = Blueprint('comments',
                               __name__,
                               url_prefix='/comments')

@comments_blueprint.route('/get')
def get_comment_data():
    type = request.args.get('type')
    id = request.args.get('id')
    comments = []
    if type == "p":
        comments = Comment.objects(pref=id)
    elif type == "c":
        comments = Comment.objects(cref=id)
    result = [json.loads(comment.to_json()) for comment in comments]
    for comment in result:
        comment['_id'] = comment['_id']['$oid']
    return jsonify(result)

@comments_blueprint.route('/new', methods=['POST', 'OPTIONS'])
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
        type = request.form.get('type')
        if type == "p":
            new_comment = Comment(
                text = request.form.get('text'),
                pref = request.form.get('id')
            )
            new_comment.save()
        elif type == "c":
            new_comment = Comment(
                text = request.form.get('text'),
                cref = request.form.get('id')
            )
            new_comment.save()

        return jsonify({'success': '200'})
