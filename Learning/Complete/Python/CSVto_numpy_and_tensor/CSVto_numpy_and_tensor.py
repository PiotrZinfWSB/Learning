import numpy as np
import pandas as pd

csv_data = """Name, age, salary
Joh, 30, 5000
Alice, 25, 3000
Patrick, 27, 3200
Joana, 31, 3700
"""

with open('sample_data.csv', 'w') as file:
    file.write(csv_data)
    
data_frame = pd.read_csv('sample_data.csv')
print(data_frame)
print(type(data_frame))

tensor=data_frame.to_numpy()
print(tensor)
print(type(tensor))

print("Value in df: ", data_frame.iloc[2, 1])
print("Value in tensor: ", tensor[2, 1])
print(type(data_frame.iloc[2, 2]))
print(type(tensor[2,2]))