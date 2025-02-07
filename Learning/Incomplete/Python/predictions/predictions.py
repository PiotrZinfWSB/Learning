from operator import index
from numpy import size
import pandas as pd
from sklearn.preprocessing import MinMaxScaler

#reading data to dataframe
data = pd.read_csv('data.csv', sep=';', header=0, decimal=',')

data = data[['Data','PKO Technologii i Innowacji Globalny']] #extracting wanted columns
data = data[(data['PKO Technologii i Innowacji Globalny']!=0.0) & (~data['PKO Technologii i Innowacji Globalny'].isna())] #filtering 
data['Data'] = pd.to_datetime(data['Data'], format='%Y-%m-%d')


#scaling values to range [0:1]
scaler = MinMaxScaler(feature_range=(0,1))
data['PKO Technologii i Innowacji Globalny'] = scaler.fit_transform(data[['PKO Technologii i Innowacji Globalny']])

print(data)