# -*- coding: utf-8 -*-
import json
from functools import wraps
from flask import Flask, redirect, session
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_mongoengine import MongoEngine
from flask_uploads import (IMAGES, UploadSet, configure_uploads,
                           patch_request_class)
from flask_wtf.csrf import CSRFProtect

secrets = json.load(open('config.json'))

app = Flask(__name__)
app.config['BASE_FE_URL'] = secrets['BASE_FE_URL']
bcrypt = Bcrypt(app)
CORS(app)
csrf = CSRFProtect(app)

app.config['MONGODB_SETTINGS'] = {
    'db': 'jboard',
    'host': secrets['mlab_host'],
    'username': secrets['mlab_username'],
    'password': secrets['mlab_password']
}
db = MongoEngine(app)

from jboardapi.posts.views import posts_blueprint
from jboardapi.comments.views import comments_blueprint

# register blueprints

blueprints = [
    posts_blueprint,
    comments_blueprint
]
for blueprint in blueprints:
    csrf.exempt(blueprint)
    CORS(blueprint)
    app.register_blueprint(blueprint)
