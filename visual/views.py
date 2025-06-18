import datetime

from django.shortcuts import render
# 导包
from sysuser.views import my_login_required
from .visual_tools import *

# 城市到省份的映射字典
CITY_TO_PROVINCE = {
    '北京': '北京市',
    '上海': '上海市',
    '太原': '山西省',
    '广州': '广东省',
    '深圳': '广东省',
    '成都': '四川省',
    '重庆': '重庆市',
    '杭州': '浙江省',
    '西安': '陕西省',
    '武汉': '湖北省',
    '南京': '江苏省',
    '长沙': '湖南省',
    '厦门': '福建省',
    '哈尔滨': '黑龙江省'
}


def bi(request):
    # 1
    SQL1 = """
        SELECT departure_airport,count(1) value FROM `flight` GROUP BY departure_airport
        """
    data1 = get_mysql_data(SQL1)
    x1 = [i['departure_airport'] for i in data1]
    d1 = [i['value'] for i in data1]
    bar_html1 = get_bar1(x1, d1, title='航班分布/机场')

    # 2
    sql2 = """
        SELECT aircraft_type,count(1) value FROM `flight` GROUP BY aircraft_type
        """
    data2 = get_mysql_data(sql2)
    data2 = [(i['aircraft_type'], i['value']) for i in data2]
    word_html2 = get_wordcloud(data2, title='客机类型词云图')

    # 3
    sql3 = """
        SELECT departure_city,count(1) value FROM `flight` GROUP BY departure_city
        """
    data3 = get_mysql_data(sql3)
    x3 = [i['departure_city'] for i in data3]
    d3 = [i['value'] for i in data3]
    pie_html3 = get_pie(d3, x3, title='', tcolor='#fff')
    # 4
    sql4 = """
    SELECT 
        airline, 
        ROUND(AVG(CAST(REPLACE(ticket_price, '¥ ', '') AS DECIMAL(10, 2))), 2) AS avg_price
    FROM 
        flight
    GROUP BY 
        airline
    		ORDER BY avg_price desc limit 8

        """
    data4 = get_mysql_data(sql4)
    x4 = [i['airline'] for i in data4]
    d4 = [i['avg_price'] for i in data4]
    line_html4 = get_line(x4, d4, title='航空公司平均价格', tcolor='#fff')

    # 5
    sql5 = """
        SELECT 
        departure_city, 
        ROUND(AVG(CAST(REPLACE(ticket_price, '¥ ', '') AS DECIMAL(10, 2))), 2) AS avg_price
    FROM 
        flight
    GROUP BY 
        departure_city
    		ORDER BY avg_price desc
        """
    data5 = get_mysql_data(sql5)
    x5 = [i['departure_city'] for i in data5]
    d5 = [i['avg_price'] for i in data5]
    line_html5 = get_line(x5, d5, title='机票平均价格/出发地')

    # 6
    sql6 = """
        SELECT airline,count(airline) value FROM `flight` GROUP BY airline
        """
    data6 = get_mysql_data(sql6)
    data6 = [[i['airline'], i['value']] for i in data6]
    pie_html6 = get_pie2(data6, title='航班分布/航空公司', tcolor='#fff')

    return render(request, 'html/bi.html',
                  locals())


def bi_2(request):
    return render(request, 'bi/bi2.html')
@my_login_required
def bi_3(request):

    # 1
    SQL1 = """
    SELECT departure_airport,count(1) value FROM `flight` GROUP BY departure_airport
    """
    data1 = get_mysql_data(SQL1)
    x1 = [i['departure_airport'] for i in data1]
    d1 = [i['value'] for i in data1]
    bar_html1 = get_bar1(x1,d1,title='航班分布/机场')

    # 2
    sql2 = """
    SELECT aircraft_type,count(1) value FROM `flight` GROUP BY aircraft_type
    """
    data2 = get_mysql_data(sql2)
    data2 = [(i['aircraft_type'],i['value']) for i in data2]
    word_html2 = get_wordcloud(data2,title='客机类型词云图')

    # 3
    sql3 = """
    SELECT departure_city,count(1) value FROM `flight` GROUP BY departure_city
    """
    data3 = get_mysql_data(sql3)
    x3 = [i['departure_city'] for i in data3]
    d3 = [i['value'] for i in data3]
    pie_html3 = get_pie(d3,x3,title='航班分布/城市',tcolor='#fff')
    # 4
    sql4 = """
SELECT 
    airline, 
    ROUND(AVG(CAST(REPLACE(ticket_price, '¥ ', '') AS DECIMAL(10, 2))), 2) AS avg_price
FROM 
    flight
WHERE
		airline ='东方航空' OR airline='海南航空' OR airline='国际航空' OR airline='华夏航空' OR airline='深圳航空'
GROUP BY 
    airline
		ORDER BY avg_price

    """
    data4 = get_mysql_data(sql4)
    x4 = [i['airline'] for i in data4]
    d4 = [i['avg_price'] for i in data4]
    line_html4 = get_line(x4,d4,title='航空公司平均价格',tcolor='#fff')

    # 5
    sql5 = """
    SELECT 
    departure_city, 
    ROUND(AVG(CAST(REPLACE(ticket_price, '¥ ', '') AS DECIMAL(10, 2))), 2) AS avg_price
FROM 
    flight
GROUP BY 
    departure_city
		ORDER BY avg_price desc
    """
    data5 = get_mysql_data(sql5)
    x5 = [i['departure_city'] for i in data5]
    d5 = [i['avg_price'] for i in data5]
    line_html5 = get_line(x5,d5,title='机票平均价格/出发地')

    # 6
    sql6 ="""
    SELECT airline,count(1) value FROM `flight` GROUP BY airline limit 10
    """
    data6 = get_mysql_data(sql6)
    data6 = [[i['airline'],i['value']]for i in data6]
    pie_html6 = get_pie2(data6,title='航班分布/航空公司',tcolor='#fff')

    # 11
    # 11 - 查询所有城市的航班分布
    data11 = get_mysql_data("""
        SELECT departure_city, COUNT(1) AS value 
        FROM flight 
        GROUP BY departure_city
        ORDER BY value DESC
    """)

    # 处理数据，将城市映射为省份
    province_data = {}
    for item in data11:
        city = item['departure_city']
        # 查找匹配的省份，如果找不到则保留原城市名
        province = next((prov for city_name, prov in CITY_TO_PROVINCE.items() 
                        if city_name in city), city)
        province_data[province] = province_data.get(province, 0) + item['value']

    # 转换为前端需要的格式并排序
    data11 = sorted(province_data.items(), key=lambda x: x[1], reverse=True)
    map_html7 = get_map(data11, title='航班分布/省份', tcolor='#fff')

    # 7
    sql7 = """
    SELECT Weather,SUM(length) FROM `flightinfo` GROUP BY Weather
    """
    data7 = get_mysql_data(sql7)
    x7 = [i['Weather'] for i in data7]
    d7 = [i['SUM(length)'] for i in data7]
    pie_html7 = get_pie(d7,x7,title='航班飞行时间分布/天气（单位：分钟）',tcolor='#fff')

    # 8
    sql8 = """
    SELECT Weather,avg(delay) FROM `flightinfo` GROUP BY Weather
    """
    data8 = get_mysql_data(sql8)
    x8 = [i['Weather'] for i in data8]
    d8 = [i['avg(delay)'] for i in data8]
    pie_html8 = get_pie(d8,x8,title='平均延误时间/天气（单位：分钟）',tcolor='#fff')

    # 9
    sql9 = """
    select airline,SUM(length) value from(
SELECT 
  airline,  -- 航空公司
  flight,  -- 航班号
  length  -- 飞行时长
FROM 
  flightinfo  -- 数据表名
WHERE 
  weather = '晴'  -- 只考虑天气是晴的情况
ORDER BY 
  length DESC) as a  -- 按飞行时长从大到小排序
GROUP BY airline order by value desc
    """
    data9 = get_mysql_data(sql9)
    x9 = [i['airline'] for i in data9]
    d9 = [i['value'] for i in data9]
    bar_html9 = get_bar2(x9,d9,title='飞行时长/天气为晴（单位：分钟）')
    today = datetime.datetime.now().strftime('%Y-%m-%d')
    # 10
    sql10 = """
    select airline,avg(delay) value from(
SELECT 
  airline,  -- 航空公司
  flight,  -- 航班号
  delay  -- 飞行时长
FROM 
  flightinfo  -- 数据表名
WHERE 
  weather LIKE '%雨%'  -- 只考虑天气是晴的情况
ORDER BY 
  length DESC) as a  -- 按飞行时长从大到小排序
GROUP BY airline order by value desc
    """
    data10 = get_mysql_data(sql10)
    x10 = [i['airline'] for i in data10]
    d10 = [i['value'] for i in data10]
    bar_html10 = get_bar2(x10,d10,title='延误时间/天气为雨（单位：分钟）')

    return render(request, 'bi/bi3.html',locals())



from sysuser.models import Flight
from django.db.models import Avg, F, Func, Value
from django.db.models.functions import Cast
from django.http import JsonResponse
from django.db import models
def flight_chart_data(request):
    # 航空公司图表数据（直接在数据库层面清理价格）
    airline_data = Flight.objects.annotate(
        clean_price=Cast(
            Func(
                F('ticket_price'), 
                Value('¥ '), 
                Value(''),
                function='replace'
            ),
            output_field=models.FloatField()
        )
    ).values('airline').annotate(
        avg_price=Avg('clean_price')
    ).order_by('-avg_price')[:6]

    # 出发城市图表数据
    city_data = Flight.objects.annotate(
        clean_price=Cast(
            Func(
                F('ticket_price'), 
                Value('¥ '), 
                Value(''),
                function='replace'
            ),
            output_field=models.FloatField()
        )
    ).values('departure_city').annotate(
        avg_price=Avg('clean_price')
    ).order_by('-avg_price')[:8]  # 取前8个城市

    return JsonResponse({
        'airline_option': {
            'xAxis': [item['airline'] for item in airline_data],
            'series': [round(item['avg_price'], 2) for item in airline_data]
        },
        'price_option': {
            'xAxis': [item['departure_city'] for item in city_data],
            'series': [round(item['avg_price'], 2) for item in city_data]
        }
    })



