import datetime

from jboardapi import db, secrets

class Forum(db.Document):
    meta = {'collection': 'Forum'}

    title = db.StringField(
        required=True,
        max_length=140
    )
    publish_date = db.DateTimeField(
        default=datetime.datetime.utcnow
    )
    description = db.StringField(
        max_length=8000,
        default=''
    )
    image = db.StringField(

    )
    post_count = db.IntField(
        required = True,
        default=0
    )

class Post(db.Document):
    meta = {'collection': 'Post'}

    title = db.StringField(
        required=True,
        max_length=140
    )
    publish_date = db.DateTimeField(
        required=True,
        default=datetime.datetime.utcnow
    )
    last_edit_date = db.DateTimeField(
        required=True,
        default=datetime.datetime.utcnow
    )
    text = db.StringField(
        max_length=8000,
        default=''
    )
    image = db.StringField(

    )
    f_ref = db.ReferenceField(
        'Forum'
    )
    down_votes = db.IntField(
        required=True,
        default=0
    )
    up_votes = db.IntField(
        required=True,
        default=0
    )
    comment_count = db.IntField(
        required = True,
        default=0
    )

class Comment(db.Document):
    meta = {'collection': 'Comment'}

    publish_date = db.DateTimeField(
        required=True,
        default=datetime.datetime.utcnow
    )
    last_edit_date = db.DateTimeField(
        required=True,
        default=datetime.datetime.utcnow
    )
    text = db.StringField(
        max_length=8000,
        default=''
    )
    p_ref = db.ReferenceField(
        'Post'
    )
    c_ref = db.ReferenceField(
        'Comment'
    )
    down_votes = db.IntField(
        required=True,
        default=0
    )
    up_votes = db.IntField(
        required=True,
        default=0
    )
