# Here, we are putting all of our routes which are going to be:
# Create a Friend
# Get all friends
# Delete them
# and, just update one friend

from app import app, db
from flask import request, jsonify
from models import Friend


# Get all friends
# So, to be able to create a route, we would create a decorator function(which is a function that adds methods to pre-defined ones without changing it's core)
# Here, @app.route("name of the route", if we hit it with get method, it will return the value function returned)
@app.route("/api/friends", methods=["GET"])
def get_friends():
    # returns all friends that we have in database
    friends = Friend.query.all() # it is now in the format of python objects. 
    # we need to convert it to json and then send it to client. why loop? to_json() method works in one friend, what if there is three one? we
    result = [friend.to_json() for friend in friends]
    # result value will be in this format: [{...}, {...}, {...}]
    return jsonify(result), 200  # 200 is status code, and also the default value.