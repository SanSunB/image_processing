""""""
from Pixel import Pixel
import math


class Cell(Pixel):
    """ Represent a knot in the knitting grid. each cell has a single color."""

    def __init__(self, cell_height, cell_width, color_grid):
        """ Initiate the cell size and the original image from arguments."""
        super()
        self.width = cell_width
        self.height = cell_height
        self.color_grid = color_grid
        self.pixel_amount = self.set_pixel_amount()
        self.height_index = 0
        self.width_index = 0

    def set_pixel_amount(self):
        """ Calculate the amount of pixels in every cell, rectangle calculation."""
        self.pixel_amount = self.height * self.width
        return self.pixel_amount

    def set_width_index(self, x):
        """ Set the height index from which the cell begins"""
        self.width_index = x

    def set_height_index(self, y):
        """ Set the width index from which the cell begins"""
        self.height_index = y

    def set_cell_color(self):
        """ Go over the cell in the indexes we received and sum the RGB values of all the pixels.
        Then divide by the pixels amount to get the average RGB value."""

        self.color = [0, 0, 0]  # initialize the the color value

        # get all the pixels values in the cell according in the indexes we got in the image
        for y in range(self.width_index,self.width_index+self.width):
            if y >= len(self.color_grid): break  # Stop loop if index exceeded the grid

            for x in range(self.height_index,self.height_index+self.height):
                if x >= len(self.color_grid[0]): break  # Stop loop if index exceeded the grid

                # Add the current pixel RGB value to the sum of the entire cell.
                self.color = [sum(x) for x in zip(self.color, self.color_grid[y][x])]

        # Divide in the number of pixels to get tha average value
        self.color = [int(math.ceil(x/self.pixel_amount)) for x in self.color]
