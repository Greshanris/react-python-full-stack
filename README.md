# react-python-full-stack

## What are we building?
we are building an website. The characterstics of website is simple:
- It should store the friends which can be added, removed, and updated.
- Should include name, description.
- It should be able to use the profile pic automatically.
- It should have dark mode and white mode.
- After deleting all the friends, it should show that you don't have any friends.
- Should be responsive in frontend part.
- Divided into frontend, and backend folder
- Frontend is handled by react, while backend is handled by python(flask).

## Backend (Flask)
Explanation is not ordered, and is just for rough understanding.

### Creation of virtual environment
``python -m venv venv``
### Installation of necessary python frameworks
`` pip install flask flask-sqlalchemy flask-cors``

- ``flask`` for creation of **RestAPI**
- ``flask-sqlalchemy`` for Object Relational Mapping, *toolkit that allows to access and manage SQL database using Python codes.*

- ``flask-cors`` to allow requests to my Flask application from different origins (domains or ports). For instance, if frontend runs on ``http://localhost:3000`` and backend runs on ``http://localhost:5000``, CORS ensures that the frontend can call the backend without restrictions.

### Challenges encoutered and solution found

#### First challenge
After creating the app.py (entry point), models.py (for table creation), and routes.py (for adding/removing friends), the routes were not executed. 

- **Reason:** The routes.py file was not imported into app.py. 
- **Solution:** Import the routes into app.py.

#### Second challenge
While running app.py and accessing ``localhost:5000/api/friends``, an error occurred: 
- **Reason:** The Flask environment was not set correctly due to the virtual environment. 
- **Solution:** 
```shell
set FLASK_APP=app.py
set FLASK_ENV=development
flask run
```
``export`` is used instead of ``set`` for UNIX/LINUX environment.

``FLASK_APP`` tells Flask which file contains the application instance.

``FLASK_ENV=development`` enables debug mode automatically on code changes and provided detailed error messages.

#### Third challenge
Error encountered as ``no such table: friend``

**Solution:** Used ``app.app_context()`` to ensure Flask knows which app and database to use.
```python
with app.app_context(): 
    db.create_all()
```
**Explanation:**

- ``app.app_context()`` provides the necessary context to access the app and database outside of the typical request-response cycle.

- ``db.create_all()`` creates the tables based on the defined models, but it needs to be run within the app context to properly access the database.

### Using Postman and SQLAlchemy ``db`` instance and ``models.py``

Earlier, we created ``models.py`` which used ``db = SQLAlchemy(app)`` instance which was created in ``app.py``.

``models.py`` was a python file for creating table in database using ``SQLAlchemy`` from ``flask``. It composed of class ``Friend`` which made sure we have necessary columns with additional method of ``to_json()`` to return the inputed row in python dictionary(key: value). It was done so that we can use ``jsonify``from flask to convert the dictionary to ``json`` to be sent to client.

 Before that, we already added database configuration using ``app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///friends.db"``. This made sure that we are using ``sqlite`` as querying language storing data in ``friends.db``


- ``POST`` :  To create a friend
- ``

## Frontend (React):
(working, not completed)
### Installation procedure
