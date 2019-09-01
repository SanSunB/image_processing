from flask import Flask, request
from flask_cors import CORS, cross_origin
#pip install -U flask-cors

app = Flask(__name__)
# allow
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/', methods=['GET', 'POST'])
def hello_world():
    if request.method == 'POST':
        print("Put")
        return "sun"
    else:
        return ({'text':'Hello World!'})


if __name__ == '__main__':
    app.run(debug=True)
