import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from keras.layers import Dense
from keras.models import Sequential
from keras.callbacks import History
from tabulate import tabulate

data = pd.read_csv("rawData.csv", header=0, index_col=0, sep=";")
data = data.fillna(0)
data = data.replace(',', '.', regex=True)
data = data.astype(float)
data = data.sample(frac=1)

scaler = StandardScaler()
data.iloc[:, -3:] = scaler.fit_transform(data.iloc[:, -3:])

X_train, X_test, y_train, y_test = train_test_split(data.iloc[:, -3:], data.iloc[:, :-3], test_size=0.2, random_state=24)


model = Sequential()
model.add(Dense(3, input_dim=3))
model.add(Dense(9, activation='relu'))
model.add(Dense(len(y_train.columns), activation='linear'))
model.compile(optimizer='adam', loss='mse', metrics=['mean_squared_error'])
history = History()
model.fit(X_train, y_train, epochs=2000, batch_size=64, validation_data=(X_test, y_test), callbacks=[history])

plt.plot(history.history['loss'], label='Training loss')
plt.plot(history.history['val_loss'], label='Validation loss')
plt.title('Training and validation loss')
plt.xlabel('Epoch')
plt.ylabel('Loss')
plt.legend()
plt.show()
plt.pause(0.01)


newSample = [[61.33, -0.55, 5.29]]
newSample = scaler.transform(newSample)

output = model.predict(newSample)
output = np.array(output)
output = np.round(output, 3)
np.set_printoptions(suppress=True)

results = list(zip(data.columns[:-3], output[0]))
print(tabulate(results, headers=['Pigement', 'Weight'], tablefmt='grid'))