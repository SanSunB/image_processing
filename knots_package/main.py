from pixel_grid import *
from knots_grid import *
import cv2

""" Receive an image and return an approximation of the image in color squares.
    Every square will represent a knot, so the out image will be guide to knitting the picture."""


# Get the input of the picture name to process
input_image_name = "B.jpeg"

# Create teh image object. with pixel grid of the image
image_original = pixel_grid(input_image_name)
assert image_original.height > 0, "problem with the image loading"

# Get the number of knots in the new image
# max image.height and image.width, min image.height/2 and image.width/2
input_height_knots = 40
input_width_knots = 30
input_knot_size = 10

# Create the new image that constructed of knots
image_knots = knots_grid(input_height_knots, input_width_knots, input_knot_size, image_original)

# Display the new image to the user until any key is pressed.
cv2.imshow("s", image_knots)
cv2.waitKey(0)
