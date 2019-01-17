from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route('/')
def apprentice_ng():
    return 'Hello World, from Apprentice Ng!'


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
