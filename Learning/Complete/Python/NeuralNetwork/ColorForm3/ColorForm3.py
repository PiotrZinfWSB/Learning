# 3 wersja programu

# import bibliotek
from unittest import result
import keras
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler, scale
from sklearn.model_selection import train_test_split
from keras.models import Sequential
from keras.layers import Dense
import matplotlib.pyplot as plt

data = pd.read_csv("data.csv", header=0, index_col=0, sep=";")

#standaryzacja danych opisuj¹cych 
scaler = StandardScaler()
columns_to_transform = data.columns[-3:]
data[columns_to_transform] = scaler.fit_transform(data[columns_to_transform].values)

# podzia³ na zbiór treningowy i testowy
X_train, X_test, y_train, y_test = train_test_split(data.iloc[:, -3:], data.iloc[:, :-3], test_size=0.2, random_state=21)

# tworzenie modelu
model = Sequential()
model.add(Dense(3, activation='relu', input_shape=(3,)))
model.add(Dense(9, activation='sigmoid'))
model.add(Dense(28, activation='linear'))

model.compile(optimizer='adam', loss='mse', )

#tenowanie modelu
model.fit(X_train, y_train, epochs=100, batch_size=2, validation_data=(X_test, y_test))

new_sample = np.array([[22.9, 0.01, -20.2]])
predicted = model.predict(new_sample)
np.set_printoptions(precision=5, suppress=True)
results = np.round(predicted, 3)
print(results)
