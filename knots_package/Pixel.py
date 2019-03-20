""" pixel class to represent a single pixel in the image"""


class Pixel:

    # Methods
    def __init__(self):
        # color [r,g,b] list
        self.color = [0, 0, 0]

    def __init__(self, color):
        # color [r,g,b] list
        self.color = color

    def get_color(self):
        return self.color
