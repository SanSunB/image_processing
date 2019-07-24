from pixel_grid import *
from knots_grid import *
import cv2
import base64
import  re
import os

def grandma_project(image_name="sun.jpeg", height=20, width=50, size=20):
    """ Receive an image and return an approximation of the image in color squares.
        Every square will represent a knot, so the out image will be guide to knitting the picture."""

    # Process the base64 image we got from flask into an object we can decode
    image_p = re.sub('^data:image/.+;base64,', '', image_name)
    base64_data = image_p.replace(' ','+')

    # Decode the image and write to file
    byte_data = base64.b64decode(base64_data)
    with open('out.jpg', 'wb') as f:
        f.write(byte_data)

    # Create a pixle grid image to process
    image_original = pixel_grid('out.jpg')
    assert image_original.height > 0, "problem with the image loading"

    # Get the number of knots in the new image
    # max image.height and image.width, min image.height/2 and image.width/2
    input_height_knots = int(height)
    input_width_knots = int(width)
    input_knot_size = int(size)

    # Create the new image that constructed of knots
    image_knots = knots_grid(input_height_knots, input_width_knots, input_knot_size, image_original)

    # Display the new image to the user until any key is pressed.
    #cv2.imshow("s", image_knots)
    #cv2.waitKey(0)
    image_path = './static/Image2.jpg'

    cv2.imwrite(image_path, image_knots)
    return

#grandma_project()
