import pandas as pd
from sklearn.preprocessing import StandardScaler, scale
from sklearn.model_selection import train_test_split
import numpy as np

data = pd.read_csv("data.csv", sep=";", index_col=0, header=0)

print(data)