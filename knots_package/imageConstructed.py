from Image import Image
import numpy as np


class ImageConstructed(Image):
    """ Class for images we create from a single color."""
    def __init__(self, height, width, color):
        """ Initialize the image values."""
        super()
        self.width = width
        self.height = height
        self.color = color
        self.img = self.set_img()

    def set_img(self):
        """ Create an empty array to represent an image, and fill it with a color. """
        img = np.zeros((self.height, self.width, 3), np.uint8)
        img[:] = self.color

        return img
