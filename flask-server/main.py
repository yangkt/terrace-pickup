from flask import (Flask, render_template, request)
from flask.json import jsonify

app = Flask("__main__")
cache = {}

@app.route("/")
def my_index():
    return render_template("index.html", test_token = "oof")


@app.route("/test")
def test():
    return render_template("index.html", test_token = "help")


@app.route('/result',methods = ['POST', 'GET'])
def result():
   if request.method == 'POST':
      result = request.form
      return render_template("index.html",result = result)

# @app.route("/increment")
# def increment():
#     cache['foo'] = cache['foo'] + 1
#     return jsonify(cache['foo'])

# @app.route("/test")
# def read():
#     return jsonify(cache['foo'])

app.run(debug="true")