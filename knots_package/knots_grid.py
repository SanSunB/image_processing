import math
import numpy as np
from Cell import Cell
from knots_grid_functions import *


def knots_grid(height_knots, width_knots, input_knot_size, image_original):
    """ Create a grid that constructed of one color cells. Each cell represents an area in the picture,
        the cell color is the average of the colors in that area. """


    # Calculate how many pixels will be on each cell. The amount of pixels in the image divided by number of knots.
    # Example: image pixels amount = 200, knots amount = 100 : 2 pixels in every cell (knot representation).
    cell_height = int(math.ceil(image_original.height/height_knots))
    cell_width = int(math.ceil(image_original.width/width_knots))

    assert cell_height > 0, "There is a problem with cell size calculation"

    # Create a cell object with the original image, we will chang the content
    # of the cell picture each time so not to hold copies of the big map
    cell = Cell(cell_height, cell_width, image_original.img)
    assert cell.pixel_amount == cell_width*cell_height, "cell object was not successfully created"

    # Create the grid of cell colors, to build the knot image from.
    img_grid = create_knots_grid(cell, image_original, cell_height, cell_width, input_knot_size)

    # Create an Image that will show the collection of the knot images
    height = input_knot_size * len(img_grid)
    width = input_knot_size*len(img_grid[0])
    output_image = np.zeros((height,width,3),np.uint8) # Create an empty image

    # Group the color cells into a single image.
    i = input_knot_size
    for x in range(0, len(img_grid[0])):
        for y in range(0, len(img_grid)):
            output_image[y*i:y*i+input_knot_size, x*i:x*i+input_knot_size] = img_grid[y][x]

    return output_image
