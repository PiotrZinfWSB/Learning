from math import pow
from multiprocessing.connection import answer_challenge
from operator import concat
from telnetlib import BM
from xml.etree.ElementTree import tostring

mass = input("Enter your weight: ")
mass = mass.replace(",", ".")

try:
    mass = float(mass)
except:
    print("Mass must be a positive number!")
    mass = input("Enter your weight in [kg]: ")
    
height = input("Enter your height in [m]: ")
height = height.replace(",", ".")

try:
    height = float(height)
except:
    print("Height must be a positive number!")
    
    
bmi = mass/(pow(height, 2))
bmi = str(round(bmi, 2))


answear = "Your body mass index is "

print(concat(answear, bmi))