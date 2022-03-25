import pandas as pd
import numpy as np
import openpyxl as op
import csv

new_file = pd.read_csv("data/data.csv")
my_csv = open("data/data.csv")
my_reader = csv.reader(my_csv)
my_data = list(my_reader)
my_data[0]

# for index in range(len(my_data)):
#     print(my_data[index][3])
# print(new_file.iloc[10:20])
print(new_file.iloc[:,[1,2,5]])