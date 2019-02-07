import datetime

from jboardapi import db, secrets


class Post(db.Document):
    meta = {'collection': 'Post'}

    title = db.StringField(
        required=True,
        max_length=140
    )
    publish_date = db.DateTimeField(
        default=datetime.datetime.utcnow
    )
    last_edit_date = db.DateTimeField(
        default=datetime.datetime.utcnow
    )
    text = db.StringField(
        max_length=8000,
        default=''
    )
    image = db.StringField(

    )
    forum = db.StringField(
        required=True
    )
    voteScore = db.IntField(
        required=True,
        default=0
    )
    commentCount = db.IntField(
        required = True,
        default=0
    )

class Comment(db.Document):
    meta = {'collection': 'Comment'}

    publish_date = db.DateTimeField(
        default=datetime.datetime.utcnow
    )
    last_edit_date = db.DateTimeField(
        default=datetime.datetime.utcnow
    )
    text = db.StringField(
        max_length=8000,
        default=''
    )
    pref = db.ReferenceField(
        'Post'
    )
    cref = db.ReferenceField(
        'Comment'
    )
