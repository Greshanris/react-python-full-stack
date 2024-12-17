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

- ``flask-cors`` to get cors errors

## challenges encoutered and solution found

### first challenge
After, creating entrypoint(app.py), and models.py(for table creation), and routes.py(for adding or removing friends), the routes was not executed: Reason was the file is not executed in app.py(so, it was imported)

### second challenge
while running app.py after importing, we encountered error while accessing localhost:5000/api/friends
Reason: being in virtual environment,
solution: 
```shell
(venv) PS C:\Users\risha\react-python-full-stack\backend> set FLASK_APP=app.py
(venv) PS C:\Users\risha\react-python-full-stack\backend> set FLASK_ENV=development
(venv) PS C:\Users\risha\react-python-full-stack\backend> flask run
```

```flask run``` to run the application as flask application and running development server.

### third challenge
Error encountered as ``no such table: friend``
