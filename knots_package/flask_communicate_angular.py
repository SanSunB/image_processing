from flask import Flask, request,url_for
from flask_cors import CORS
from main import grandma_project
import cv2
import os


app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/', methods=['GET'])
def get_pixel_image():
    # Get the arguments sent from the client to the picture
    params = request.args.to_dict()


    grandma_project(params['image'], params['height'], params['width'], params['size'])

    image_path = './Image2.jpg'

    return {'img': url_for('static', filename=image_path)}


if __name__ == '__main__':
    app.run(debug=True)
