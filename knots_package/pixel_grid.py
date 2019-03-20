from image_loaded import ImageLoaded


def pixel_grid(image_name):
    """ Create an Image object to get the image properties. The class will
        read the image and create a 2 dimensions list of the pixel colors in RGB format"""

    # Create an Image object for the image name we recieved
    image = ImageLoaded(image_name)
    #image.set_color_grid()

    assert image.img is not None, f"The number to divide must not be zero!"
    assert image.height > 0 and image.width > 0, f"Problem with getting image size"

    return image # Return the image object that contains the pixel matrix
