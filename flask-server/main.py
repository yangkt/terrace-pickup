from flask import (Flask, render_template, request)
from flask.json import jsonify

app = Flask("__main__")
cache = {}

@app.route("/")
def my_index():
    return render_template("index.html")

# @app.route("/increment")
# def increment():
#     cache['foo'] = cache['foo'] + 1
#     return jsonify(cache['foo'])

# @app.route("/test")
# def read():
#     return jsonify(cache['foo'])

app.run(debug="true")