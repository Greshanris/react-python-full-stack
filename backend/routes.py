# Here, we are putting all of our routes which are going to be:
# Create a Friend
# Get all friends
# Delete them
# and, just update one friend

from app import app, db
from flask import request, jsonify
from models import Friend


# Get all friends
# So, to be able to create a route, we would create a decorator function
@app.route("/api/friends", methods=["GET"])
def get_friends():
    friends = Friend.query.all()