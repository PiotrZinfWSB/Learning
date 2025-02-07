from cProfile import label
import pandas as pd
import numpy as np
import time
import matplotlib.pyplot as plt
from sklearn.preprocessing import StandardScaler
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split
from keras.layers import Dense, Dropout
from keras.models import Sequential
from keras import activations
from keras.callbacks import History


data = pd.read_csv('rawData.csv', index_col=0, header=0, sep=';')
data = data.replace(',', '.', regex=True).astype(float)
data = data.fillna(0)
data = data.sample(frac=1)

# scaler = StandardScaler()
scaler = MinMaxScaler()
data.iloc[:, -3:] = scaler.fit_transform(data.iloc[:, -3:])
color_train, color_test, weight_train, weight_test = train_test_split(data.iloc[:, -3:], data.iloc[:, :-3], test_size=0.2, random_state=42)

model1 = Sequential()
model1.add(Dense(3, input_dim=3,))
model1.add(Dense(len(weight_train.columns), activation='linear'))
model1.add(Dense(len(weight_train.columns), activation='relu'))
model1.compile(optimizer='adam', loss='mean_squared_error', metrics='mse')
history = History()
model1.fit(color_train, weight_train, epochs=400, batch_size=64, validation_data=(color_test, weight_test), callbacks=[history])

plt.plot(history.history['loss'], label='Trainig loss')
plt.plot(history.history['val_loss'], label='Validation loss')
plt.xlabel('Epoch')
plt.ylabel('loss')
plt.legend()
time.sleep(0.5)
plt.show()

new_sample = scaler.transform([[59.42, -34.11, 37.57]])
output = model1.predict(new_sample)
results = pd.DataFrame(data=output, columns=data.columns[:-3])
print(results.iloc[0, :])


