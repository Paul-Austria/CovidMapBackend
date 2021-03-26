import os, sys, sqlite3
from datetime import date
import csv

connection = sqlite3.connect("db.sqlite")
cursor = connection.cursor()



with open('test.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0;
    for row in csv_reader:
        if line_count != 0:
            country = row[2];
            date = row[0];
            link = row[1];
            sql ="INSERT INTO Post (country, date, link) VALUES (?,?,?)"
            data = (country, date, link)
            cursor.execute(sql, data);
            line_count +=1;

connection.commit();