# Import of libraries
import pandas as pd
import numpy as np
from scipy import rand
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import keras
from keras.models import Sequential
from keras.layers import Dense

# Loading and preparation of data
data = pd.read_csv("rawData.csv", header=0, index_col=0, sep=";")
data = data.fillna(0)
data = data.replace(',', '.', regex=True)
data = data.astype(float)
data = data.sample(frac=1)

scaler = StandardScaler()
data.iloc[:, :-3] = scaler.fit_transform(data.iloc[:, :-3])

X_train, X_test, y_train, y_test = train_test_split(data.iloc[:, :-3], data.iloc[:, -3:], test_size=0.2, random_state=24)

model = Sequential()
model.add(Dense(len(X_train.columns), activation='relu', input_dim=len(X_train.columns)))
model.add(Dense(3, activation='linear'))
model.compile(optimizer='adam', loss='mse', metrics=['mean_squared_error'])
model.fit(X_train, y_train, batch_size=16, epochs=2000, validation_data=(X_test, y_test))

new_sample = data.iloc[5, :-3].values.reshape(1,-1)
pred = model.predict(new_sample)

print(pred)
print(data.iloc[5, -3:])