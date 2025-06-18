#从数据库读取数据到csv

import pandas as pd
from sqlalchemy import create_engine
import pymysql
from 航班信息数据分析与可视化系统.settings import  DATABASE_NAME, DATABASE_USER, DATABASE_PSW, DATABASE_PORT, \
    DATABASE_HOST

db_host = DATABASE_HOST
db_username = DATABASE_USER
db_password = DATABASE_PSW
db_port = DATABASE_PORT
db_name = DATABASE_NAME

conn = pymysql.connect(host=db_host, user=db_username, password= db_password, db=db_name, port=db_port)


engine = create_engine(f'mysql+pymysql://{db_username}:{db_password}@{db_host}:{db_port}/{db_name}')


read_data = pd.read_csv('数据集3.csv',encoding='gbk')


print(read_data)

# 将 DataFrame 写入数据库表中（如果表不存在，Pandas 会自动创建它）
read_data.to_sql('flightinfo', con=engine, index=False, if_exists='replace')

