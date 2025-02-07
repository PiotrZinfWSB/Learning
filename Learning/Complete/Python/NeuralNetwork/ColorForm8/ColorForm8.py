import time
import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split
from keras.models import Sequential
from keras.layers import Dense
from keras.layers import Dropout
from keras.optimizers import Adam
from keras.losses import MeanSquaredError
from keras.metrics import MSE
from keras.callbacks import History
from matplotlib import pyplot as plt

data = pd.read_csv("rawData.csv", index_col=0, header=0, sep=';')
data = data.fillna(0)
data = data.replace(',', '.', regex=True)
data = data.astype(float)

scaler = MinMaxScaler()
data.iloc[:, :-3] = scaler.fit_transform(data.iloc[:, :-3])

sample_train, sample_test, color_train, color_test = train_test_split(data.iloc[:, :-3], data.iloc[:, -3:], test_size=0.2)

model = Sequential()
history = History()
loss = MeanSquaredError()
optimizer = Adam()
metrics = MSE
model.add(Dense(len(sample_train.columns), input_dim=len(sample_train.columns)))
model.add(Dense(len(color_train.columns)))
model.compile(optimizer=optimizer, loss=loss, metrics=metrics)
model.fit(sample_train, color_train, epochs=500, batch_size=32, validation_data=(sample_test, color_test), callbacks=[history])

plt.plot(history.history['loss'], label='Training loss')
plt.plot(history.history['val_loss'], label='Validation loss')
plt.xlabel('Epochs')
plt.ylabel('Loss')
plt.legend()
time.sleep(0.5)
plt.show()