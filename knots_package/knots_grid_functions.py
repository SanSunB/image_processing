from image_constructed import Image_constructed


def create_knots_grid(cell, image_original, cell_height, cell_width, input_knot_size):
    """ Go over the image and create the borders of the areas to calculate the average color from. """

    row_index = 0  # ro create the 2 dimensional list
    img_grid = []

    # Iterate through the image pixel list, in cell jumps each iteration
    for x in range(0, image_original.height, cell_height):
        if x + cell_height >= image_original.height:break
        img_grid.append([])
        for y in range(0, image_original.width, cell_width):
            if y + cell_width >= image_original.width:break
            # set the index variables and get the small cell pixels and the new averege color
            cell.set_height_index(y)
            cell.set_width_index(x)

            # Calculate the color of the cell
            cell.set_cell_color()

            # From the cell color we calculated contruct a new iamge
            image_constructed = Image_constructed(input_knot_size, input_knot_size, cell.color)

            # Add the images to the image array so we can show them as a collection af one picture
            img_grid[row_index].append(image_constructed.img)

        row_index += 1

    return img_grid
