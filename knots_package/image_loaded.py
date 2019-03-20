from Image import Image
import cv2  # Opencv


class ImageLoaded(Image):
    """ Image class for images that are loaded from a preexisting file.
        Read the image, get its size and create a 2 dimention list with the pixels color values. """

    def __init__(self, image_name):
        """ While Creating the class read the image and set the image's size values """

        self.image_name = image_name
        # Read the picture we received in the image_name argument
        self.img = self.set_image()

        # Set the image size parameters
        self.width = self.set_width()
        self.height = self.set_height()

        self.color_grid = []  # The grid will be set outside of the init for readability

    def set_image(self):
        """ Read the image with opencv and check it was loaded successfuly"""

        # Read the image from the name the class received
        img = cv2.imread(self.image_name)

        # Check if the picture was not loaded successfully, stop the program
        if img is None:
            print("Problem reading the image")
            quit() # Stop all processing

        return img

    def set_height(self):
        """ Get the height of the image - y axis"""
        height = self.img.shape[0]
        return height

    def set_width(self):
        """ Get the width of the picture - x axis"""
        width = self.img.shape[1]
        return width

    def set_color_grid(self):
        """ The image is represented as a 2 dimensional list fo colors.
            Build a 2 dimensional list with the color values of all the pixels in the image.
            The color in the matrix will be in the same x-y location as the pixel in the image."""
        # The image is represented as a 2 dimantional list fo colors, we iterate
        for y in range(0, self.width):
            self.color_grid.append([])  # create a new list in the array to represent a new line
            for x in range(0, self.height):
                # Store the pixel color value in RGB
                self.color_grid[y].append(self.img[x, y])
