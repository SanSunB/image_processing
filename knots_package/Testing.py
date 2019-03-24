import unittest
from main import grandma_project


class general_test(unittest.TestCase):
    def test_general_1(self):
        grandma_project("A.jpg", 30, 30, 10)

    def test_general_2(self):
        grandma_project("B.jpeg", 30, 30, 10)

    def test_general_3(self):
        grandma_project("A.jpg", 300, 500, 50)

    def test_general_4(self):
        grandma_project("B.jpeg", 10, 100, 7)

    def test_image_not_exist(self):
        grandma_project("dddd.jpeg", 10, 100, 7)
