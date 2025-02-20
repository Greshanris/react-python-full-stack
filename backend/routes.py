# Here, we are putting all of our routes which are going to be:
# Create a Friend
# Get all friends
# Delete them
# and, just update one friend

from app import app, db
from flask import request, jsonify
from models import Friend
from flask_cors import cross_origin

# Get all friends
# So, to be able to create a route, we would create a decorator function(which is a function that adds methods to pre-defined ones without changing it's core)
# Here, @app.route("name of the route", if we hit it with get method, it will return the value function returned)
@app.route("/api/friends", methods=["GET"])
@cross_origin(origins="https://react-python-full-stack.onrender.com") # This is to allow cross-origin requests, so that our frontend can make requests to our backend
def get_friends():
    # returns all friends that we have in database
    friends = Friend.query.all() # it is now in the format of python objects. 
    # we need to convert it to json and then send it to client. why loop? to_json() method works in one friend, what if there is three one? we
    result = [friend.to_json() for friend in friends]
    # result value will be in this format: [{...}, {...}, {...}]
    return jsonify(result), 200  # 200 is status code, and also the default value: Status code in REST APIs, 200 for successful GET, PUT, DELETE requests

# Create a friend
@app.route("/api/friends", methods=["POST"])
@cross_origin(origins="https://react-python-full-stack.onrender.com")
def create_friend():
    try:
        data = request.json

        # checking for required fields
        required_fields = ["name","role","description","gender"]
        for field in required_fields:
            if field not in data or not data.get(field):
                return jsonify({"error":f"Missing required field: {field}"}), 400 # Status code 400 Bad Request: it is due to client-side issues(like missing or invalid data)

        name = data.get("name")
        role = data.get("role")
        description = data.get("description")
        gender = data.get("gender")

        # For image url, we are creating it dynamically in backend using api
        # fetch avatar image based on gender
        if gender == "male":
            img_url = f"https://avatar.iran.liara.run/public/boy?username={name}"
        elif gender == "female":
            img_url = f"https://avatar.iran.liara.run/public/girl?username={name}"
        else:
            img_url = None

        # creating new_friend object using Friend class defined in models.py
        new_friend = Friend(name=name, role=role, description=description, gender=gender, img_url=img_url)

        # Now, we need to add new_friend to database session, this does not immediately add it to database, is kind of "git add " in git.
        db.session.add(new_friend)

        db.session.commit()

        return jsonify(new_friend.to_json()),201 # 201 Created means some resource has been created: For successful "POST" requests.
    except Exception as e:
        # rollback to previous state if any error occured
        db.session.rollback()
        # this to sent to client frontend as a json on what went wrong.
        return jsonify({"error":str(e)}), 500 # 500 Internal Server Error: means that the server encountered unexpected condition, often due to bug in the backend
    
# Delete a friend
# here, after the name of the route, we need to pass an id, to know which friend we are going to delete
@app.route("/api/friends/<int:id>", methods=["DELETE"])
@cross_origin(origins="https://react-python-full-stack.onrender.com")
def delete_friend(id):
    try:
        friend = Friend.query.get(id)
        if friend is None:
            return jsonify({"error":"Friend not found in database"}), 404 # 404 Not Found: means that the requested resource could not be found on the server.
        
        db.session.delete(friend)
        db.session.commit()
        return jsonify({"msg":"Friend is deleted successfully from database."}), 200 
    except Exception as e:
        db.session.rollback()
        return jsonify({"error":str(e)}), 500

# Update a friend profile
@app.route("/api/friends/<int:id>", methods=["PATCH"])
@cross_origin(origins="https://react-python-full-stack.onrender.com")
def update_friend(id):
    try:
        friend = Friend.query.get(id)
        if friend is None:
            return jsonify({"error":"Friend not found in database"}), 404
        
        # First of all, we will like to get the data that user sends us from the request and we are going to convert it from json to dictionary
        data = request.json

        # if we would like to update name in friend, we use dictionary method .get(), because data is in python dictionary format
        # we use .name in friend, because friend is intance of Friend class we got through Friend.query.get(id). That's why we can use .attribute_name for columns.
        friend.name = data.get("name",friend.name)
        friend.role = data.get("role",friend.role)
        friend.description = data.get("description",friend.description)
        friend.gender = data.get("gender",friend.gender)

        # Dynamically update img_url based on gender and updated name
        if "name" in data or "gender" in data:
            if friend.gender == "male":
                friend.img_url = f"https://avatar.iran.liara.run/public/boy?username={friend.name}"
            elif friend.gender == "female":
                friend.img_url = f"https://avatar.iran.liara.run/public/girl?username={friend.name}"
            else:
                friend.img_url = None

        db.session.commit()
        return jsonify(friend.to_json()), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error":str(e)}), 500
