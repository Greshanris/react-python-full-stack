# react-python-full-stack

## What are we building?
we are building an website. The characterstics of website is simple:
- It should store the friends which can be added and removed.
- Should include name, description.
- It should be able to use the profile pic automatically.
- It should have dark mode and white mode.
- After deleting all the friends, it should show that you don't have any friends.
- Should be responsive in frontend part.
- Divided into frontend, and backend folder
- Frontend is handled by react, while backend is handled by python(flask).


## Creation of virtual environment
``python -m venv venv``
## Installation of necessary python frameworks
`` pip install flask flask-sqlalchemy flask-cors``

- ``flask`` for creation of **RestAPI**
- ``flask-sqlalchemy`` for Object Relational Mapping, *toolkit that allows to access and manage SQL database using Python codes.*

- ``flask-cors`` to allow requests to my Flask application from different origins (domains or ports). For instance, if frontend runs on ``http://localhost:3000`` and backend runs on ``http://localhost:5000``, CORS ensures that the frontend can call the backend without restrictions.

## challenges encoutered and solution found

### first challenge
After, creating entrypoint(app.py), and models.py(for table creation), and routes.py(for adding or removing friends), the routes was not executed: Reason was the file is not executed in app.py(so, it was imported)

### second challenge
while running app.py after importing, we encountered error while accessing localhost:5000/api/friends
Reason: being in virtual environment,
solution: 
```shell
set FLASK_APP=app.py
set FLASK_ENV=development
flask run
```
``export`` is used instead of ``set`` for UNIX/LINUX environment.

``FLASK_APP`` tells Flask which file contains the application instance.

``FLASK_ENV=development`` enables debug mode automatically on code changes and provided detailed error messages.

### third challenge
Error encountered as ``no such table: friend``
