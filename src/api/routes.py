"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash

api = Blueprint('api', __name__)

def set_password(password, salt):
    return generate_password_hash(f"{password}{salt}")

def check_password(hash_password, password):
    return check_password_hash(hash_password, password)

@api.route('/user', methods=['POST']) #####lm83023'
def add_user():
    if request.method == 'POST':
        body = request.json
        email = body.get("email", None)
        password = body.get("password", None)

        if email is None or password is None:
            return jsonify("You need an email and a password!1"), 400

        else:
            salt = 1
            password = set_password(password)
            user = User(email=email, password=password, salt=salt)
            db.session.add(user)
            try:
                db.session.commit()
                return jsonify({"message":"User created"}), 201
            except Exception as err:
                print(err.args)
                db.session.rollback()
                return jsonify({"message":f"error: {err.args}"}), 500


@api.route('/login', methods=['POST'])
def handle_login():
    if request.method == 'POST':
        body = request.json
        email = body.get("email", None)
        password = body.get("password", None)

        if email is None and password is None:
            return jsonify("You need an email and a password."), 400
        else:
            user = User.query.filter_by(email=email).one_or_none()
            if user is None:
                return jsonify({"message":"Bad credentials"}), 400
            else:
                # if check_password(user.password, password):
                if check_password(user.password, password):
                    return jsonify({"tokendeejemplo": "37489236757928970"}), 200
                else:
                    return jsonify({"message":"Bad credentials"}), 400








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


