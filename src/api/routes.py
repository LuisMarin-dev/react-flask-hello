"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


# @api.route('/register', methods=['POST'])
# def handle_register():
#     data = request.json
#     print(data)
#     new_user = User(
#         email = data.get('email'),
#         username = data.get('username'),
#         password = data.get('password')
#     )
#     db.session.add(new_user)
#     db.session.commit()
#     return jsonify(data), 200


@api.route('/user', methods=['POST']) #####lm83023'
def add_user():
    if request.method == 'POST':
        body = request.json
