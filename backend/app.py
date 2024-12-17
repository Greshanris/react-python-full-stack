# Entry point for our application
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

# initializes Flask application instance
# __name__ as an argument tells flask to find the application (module name), so it can locate resources like templates, static files, and configuration
app = Flask(__name__)

CORS(app)

# adding configurations
app.config["SQLALCHEMY_DATABASE_URI"] == "sqlite:///friends.db" # for database we will use sqllite, "this will create it locally under this backend folder", "syntax: sqlite:///database_name.db", here friends because that is what we are going to store
# This configuration is for performance reason
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False 

# creating db instance where we just call SQLAlchemy and then just pass our app into it
db = SQLAlchemy(app)

# let's just run our application, only if this particular file is run, don't run when we import it for other python file.
if __name__ == "__main__":
    app.run(debug=True)