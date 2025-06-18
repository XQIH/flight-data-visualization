import random
import datetime
import requests
import json
import time
from sysuser.flight import save_to_csv
COMMON_AIRCRAFT_TYPES = ['A320', 'A321', 'A330', 'B737', 'B777', 'B787', 'ARJ21', 'C919']
AIRLINE_AIRCRAFT = {
    '国际航空': ['A330', 'B777', 'B747'],
    '东方航空': ['A320', 'A330', 'B737'],
    '南方航空': ['A380', 'A320', 'B777'],
    '海南航空': ['B787', 'A330'],
    '厦门航空': ['B737'],
    '四川航空': ['A320', 'A330']
}
COMMON_CABIN_TYPES = [
    '经济舱',
    '商务舱',
]
# 定义航空公司客舱偏好
AIRLINE_CABIN_PREFERENCE = {
    '春秋航空': ['经济舱'],
    '吉祥航空': ['经济舱', '商务舱'],
    '国际航空': ['经济舱', '商务舱'],
    '东方航空': ['经济舱', '商务舱'],
    '南方航空': ['经济舱', '商务舱']
}
# 天气类型及出现概率（晴天占60%）
WEATHER_TYPES = [
    ('晴', 0.6),      # 60%概率
    ('多云', 0.2),    # 20%概率
    ('小雨', 0.1),    # 10%概率
    ('雾', 0.05),     # 5%概率
    ('雷阵雨', 0.03), # 3%概率
    ('雪', 0.02)      # 2%概率
]


import random

def get_random_weather():
    """根据权重随机返回天气类型"""
    r = random.random()  # 生成0-1之间的随机数
    cumulative_prob = 0
    for weather, prob in WEATHER_TYPES:
        cumulative_prob += prob
        if r < cumulative_prob:
            return weather
    return '晴'  # 保底返回晴天


def get_seasonal_weather(date_str):
    """根据日期返回季节性天气"""
    month = int(date_str.split('-')[1])
    # 定义季节天气倾向
    if month in [12, 1, 2]:  # 冬季
        weathers = [('晴', 0.5), ('多云', 0.2), ('雪', 0.2), ('雾', 0.1)]
    elif month in [3, 4, 5]:  # 春季
        weathers = [('晴', 0.6), ('多云', 0.2), ('小雨', 0.15), ('雷阵雨', 0.05)]
    elif month in [6, 7, 8]:  # 夏季
        weathers = [('晴', 0.5), ('雷阵雨', 0.3), ('多云', 0.15), ('雾', 0.05)]
    else:  # 秋季
        weathers = [('晴', 0.7), ('多云', 0.2), ('小雨', 0.1)]

    r = random.random()
    cumulative_prob = 0
    for weather, prob in weathers:
        cumulative_prob += prob
        if r < cumulative_prob:
            return weather
    return '晴'


def get_weather_and_delay(weather):
    """返回天气和对应的基础延误时间"""
    base_delay = 0  # 分钟

    if weather == '晴':
        base_delay = random.randint(0, 15)
    elif weather == '小雨':
        base_delay = random.randint(10, 30)
    elif weather == '雷阵雨':
        base_delay = random.randint(30, 120)
    elif weather == '雪':
        base_delay = random.randint(60, 180)
    elif weather == '雾':
        base_delay = random.randint(30, 90)

    return base_delay

def get_cabin_type(airline_name):
    """智能分配客舱类型"""
    # 先尝试匹配航空公司偏好
    for name, cabins in AIRLINE_CABIN_PREFERENCE.items():
        if name in airline_name:
            return random.choice(cabins)

    # 默认随机选择（低成本航空只分配经济舱）
    if any(x in airline_name for x in ['春秋航空', '联合航空', '西部航空', '祥鹏航空']):
        return '经济舱'
    return random.choice(COMMON_CABIN_TYPES)

def get_aircraft_type(airline):
    """智能分配机型"""
    for name, types in AIRLINE_AIRCRAFT.items():
        if name in airline:
            return random.choice(types)
    return random.choice(COMMON_AIRCRAFT_TYPES)
# salaryMin=5000, workExperience=1

def get_time_diff(t1, t2):
    diff_seconds = abs(t2 - t1)
    hours = diff_seconds // 3600
    minutes = (diff_seconds % 3600) // 60
    return f"{hours}小时{minutes}分钟"


# 新增数据库操作函数
from pymysql import *
import mysql.connector


def save_to_mysql(flights):
    try:
        conn = connect(
            host='127.0.0.1',
            port=3306,
            user='root',
            passwd='123456',
            db='airdb',
            charset='utf8')
        cursor = conn.cursor()

        for flight in flights:
            sql = """
            INSERT INTO flight (
                flight_number,departure_city,arrival_city,departure_date,airline,
                aircraft_type,departure_airport, arrival_airport,
                departure_time, arrival_time, cabin_type,ticket_price,status
            ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            """
            sql1 = """
            SELECT * FROM flight where  flight_number= %s and departure_date= %s
            """
            sql2 = """
            UPDATE flight SET status= %s WHERE flight_number=%s
            """
            val1 = (flight['flightNumber'], flight['DepartureTime'])
            val2 = (flight['flightNumber'], flight['status'])
            val = (
                flight['flightNumber'],
                flight['departureCity'],
                flight['arrivalCity'],
                flight['DepartureTime'],
                flight['airline'],
                flight['airlineType'],
                flight['departure'],
                flight['arrival'],
                flight['departure_time'],
                flight['arrival_time'],
                flight['cabin_type'],
                flight['price'],
                flight['status']
            )

            if cursor.execute(sql1, val1):
                cursor.execute(sql2, val2)

            else:
                cursor.execute(sql, val)

        conn.commit()
        print('数据已更新')
        print(f"成功更新 {len(flights)} 条数据")
    except mysql.connector.Error as err:
        print("数据库错误:", err)
    finally:
        if conn:
            conn.close()


def save_to_flight2_and_flightinfo(flight_data):
    try:
        conn = connect(
            host='127.0.0.1',
            port=3306,
            user='root',
            passwd='123456',
            db='airdb',
            charset='utf8')
        cursor = conn.cursor()
        today = datetime.date.today()
        flightinfo = []
        for flight in flight_data:
            # 解析日期和时间
            dep_time = flight['departurePlanTime'].split('T')[1]
            arr_time = flight['arrivalPlanTime'].split('T')[1]
            dep_date = flight['departurePlanTime'].split('T')[0]
            # 解析日期
            dep_date_str = flight['departurePlanTime'].split('T')[0]
            dep_date2 = datetime.datetime.strptime(dep_date_str, "%Y-%m-%d").date()
            current_date = datetime.date.today()
            # 只处理昨天及更早的数据
            if dep_date2 >= today:
                print(f"跳过未来日期航班: {dep_date_str}")
                continue
            # 提取月份、日、小时、分钟
            dep_month = int(dep_date.split('-')[1])
            dep_day = int(dep_date.split('-')[2])
            dep_hour = int(dep_time.split(':')[0])
            dep_minute = int(dep_time.split(':')[1])
            arr_hour = int(arr_time.split(':')[0])
            arr_minute = int(arr_time.split(':')[1])
            # 计算持续时间(分钟)
            duration = (flight['arrivalPlanTimestamp'] - flight['departurePlanTimestamp']) // 60

            # 处理航空公司名称
            airline = flight['airlinesName'].replace("中国", "").replace("股份有限公司", "").replace("有限公司","").replace("有限责任公司", "").strip()
            cabin_type = flight.get('cabinType') or get_cabin_type(airline)
            # 插入Flight2数据
            sql_flight2 = """
            INSERT INTO flight2 (
                departure_city, arrival_city, airline, aircraft_type,
                departure_airport, arrival_airport, cabin_type, ticket_price,
                departure_month, departure_day, departure_hour, departure_minute,
                arrival_hour, arrival_minute, duration_minutes
            ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            """
            val_flight2 = (
                flight['departureCity'],
                flight['arrivalCity'],
                airline,
                flight['airModels'],
                flight['departureCn'],
                flight['arrivalCn'],
                cabin_type,
                random.randint(200, 500),  # 随机价格
                dep_month,
                dep_day,
                dep_hour,
                dep_minute,
                arr_hour,
                arr_minute,
                duration
            )
            cursor.execute(sql_flight2, val_flight2)

            # 1. 解析出发时间（处理成TimeField需要的格式）
            dep_time_str = flight['departurePlanTime'].split('T')[1]  # "09:05:00+08:00"
            dep_time = dep_time_str.split('+')[0]  # 去掉时区部分 -> "09:05:00"

            # 2. 计算航班时长（分钟）
            duration_minutes = (flight['arrivalPlanTimestamp'] - flight['departurePlanTimestamp']) // 60

            # 3. 计算延误时间（分钟）
            delay_minutes = (flight['departureActualTimestamp'] - flight['departurePlanTimestamp']) // 60

            # 4. 处理航空公司名称
            airline = flight['airlinesName']
            airline = airline.replace("中国", "").replace("股份有限公司", "").replace("有限公司", "").strip()

            # 5. 获取星期几
            dep_date = flight['departurePlanTime'].split('T')[0]
            day_of_week = datetime.datetime.strptime(dep_date, "%Y-%m-%d").isoweekday()


            # weather = get_seasonal_weather(dep_date)
            # extra_delay = get_weather_and_delay(weather)
            delay = delay_minutes
            # 插入FlightInfo数据
            # 获取星期几 (1=星期一, 7=星期日)
            # dep_date_obj = datetime.datetime.strptime(dep_date, "%Y-%m-%d")
            # day_of_week = dep_date_obj.isoweekday()

            # 修改为使用正确的列名 - 根据您的模型，应该是 airportfrom 和 airportto
            sql_flightinfo = """
            INSERT INTO flightinfo (
                airline, flight, airport_from, airport_to,
                day_of_week, time, length, weather, delay
            ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
            """



            values = (
                airline,
                flight['flightNumber'],
                flight['departureCn'],
                flight['arrivalCn'],
                day_of_week,
                dep_time,  # 格式必须为 "HH:MM:SS"
                duration_minutes,
                get_seasonal_weather(dep_date),  # 使用季节性天气,  # 天气字段
                max(0, delay)  # 确保延误不为负
            )

            flightinfo.append({
                "airline": airline,
                "flight": flight['flightNumber'],
                'airport_from': flight['departureCn'],
                'airport_to': flight['arrivalCn'],
                'day_of_week': day_of_week,
                'time': dep_time,
                'length': duration_minutes,
                'delay': max(0, delay)
            })
            # 执行插入
            
            cursor.execute(sql_flightinfo, values)
        save_to_csv(flightinfo, f'flightinfo_{yesterday}.csv')
        print(f"成功保存到数据到flightinfo_{yesterday}.csv")
        conn.commit()
        print(f"成功插入 {len(flight_data)} 条历史数据到flight2和flightinfo表")
    except mysql.connector.Error as err:
        print("数据库错误:", err)
    finally:
        if conn:
            conn.close()


# 设置各舱位的价格范围(单位:元)
price_ranges = {
    '经济舱': (500, 1000),
    '商务舱': (1000, 2500),
}

def search_job(dep, reach, Dep_Time):
    # 个人访问令牌
    personal_access_token = "pat_Yb5fepyyj6C4xrFB0qgAtaLvzh1kaAvYQ1NRDO4yyLBNobN1lgiMGtaQgUKYWxxD"

    # 应用ID（workflow_id）
    workflow_id = "7486418270440210471"

    # 构造请求头
    headers = {
        "Authorization": f"Bearer {personal_access_token}",
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Connection": "keep-alive"
    }

    # 构造请求体
    payload = {
        "workflow_id": workflow_id,
        "parameters": {"reach": reach, 'dep': dep, 'Dep_Time': Dep_Time},  # 将input_text传递给input参数
        "app_id": "7486403034952859698"
    }

    print(payload)

    # 发送POST请求
    response = requests.post(
        "https://api.coze.cn/v1/workflow/run",
        headers=headers,
        json=payload
    )

    if response.ok:
        print("请求成功")
        res = response.text
        # print(res)
        data1 = json.loads(res)['data']
        output = json.loads(data1)['output']
        flight_list = []
        # print(output)
        for i in output:
            flight_list.append({
                '航班号': i['flightNumber'],
                '航空公司': i['airlinesName'],
                '计划出发时间': i['departurePlanTime'],
                '计划到达时间': i['arrivalPlanTime'],
                '计划到达时间戳': i['arrivalPlanTimestamp'],
                '计划出发时间戳': i['departurePlanTimestamp'],
                '出发城市': i['departureCity'],
                '到达城市': i['arrivalCity'],
                '出发机场': i['departureCn'],
                '到达机场': i['arrivalCn'],
                '航班状态': i['flightStatus'],
                '出发航站楼': i['departureTerminal'],
                '到达出口': i['reachExit'],
            })

        formatted_flights = []
        for flight in flight_list:
            # 处理时间格式：2025-03-27T07:30:00+08:00 → 07:30
            dep_time = flight['计划出发时间'].split('T')[1][:5]
            arr_time = flight['计划到达时间'].split('T')[1][:5]

            # 处理航空公司名称：中国东方航空股份有限公司 → 东方航空
            airline = flight['航空公司'].replace("中国", "").replace("股份有限公司", "").replace("有限公司", "").replace("有限责任公司", "").strip()
            # airline_short = airline.replace("航空", "").replace("公司", "")
            cabin_type = flight.get('cabinType') or get_cabin_type(flight['航空公司'])
            if cabin_type in price_ranges:
                min_price, max_price = price_ranges[cabin_type]
                # 随机生成新价格(在合理范围内)
                import random
                new_price = random.randint(min_price, max_price)


            formatted_flights.append({
                "flightNumber": flight['航班号'],
                "DepartureTime": Dep_Time,
                "departureCity": flight['出发城市'],
                "arrivalCity": flight['到达城市'],
                "airline": airline,
                "airlineType": flight.get('airModels') or get_aircraft_type(airline),
                # "departure": f"{flight['出发机场']} {flight['出发城市']}",
                "departure": f"{flight['出发机场']}",
                # "arrival": f"{flight['到达机场']} {flight['到达城市']}",
                "arrival": f"{flight['到达机场']}",
                'departureTerminal': f"{flight['出发航站楼']}",
                "timeRange": f"{dep_time} - {arr_time}",
                "departure_time": f"{dep_time}",
                "arrival_time": f"{arr_time}",
                "cabin_type": cabin_type,
                "duration": f"{get_time_diff(flight['计划出发时间戳'], flight['计划到达时间戳'])}",
                "price": f"¥ {new_price}",
                "status": flight['航班状态'],
                "reachExit": flight['到达出口'],
            })

        # with open('flight_data.json', 'w', encoding='utf-8') as f:
        #     json.dump(output, f, ensure_ascii=False)

        # save_to_flight2_and_flightinfo(output)
        # save_to_mysql(formatted_flights)
        # return flight_list
        return {
            'raw_data': flight_list,
            'formatted': formatted_flights,
            'output': output
        }
    else:
        print("请求失败，状态码：", response.status_code)
        print("错误信息：", response.text)


# 在apidata.py中添加以下代码
import datetime

# 中国主要机场城市列表
# CITIES = [
#     '北京', '上海', '深圳', '成都',
#     '重庆', '杭州', '西安', '武汉',
#     '哈尔滨', '太原'
# ]
CITIES = [
    '北京', '上海', '太原', '广州', '深圳',
    '重庆', '杭州',
]


def get_date_range(start_date: str, end_date: str) -> list[str]:
    """生成指定日期范围内的所有日期列表
    Args:
        start_date: 开始日期 (格式: 'YYYY-MM-DD')
        end_date: 结束日期 (格式: 'YYYY-MM-DD')
    Returns:
        日期字符串列表，如 ['2025-04-01', '2025-04-02', ...]
    """
    start = datetime.datetime.strptime(start_date, "%Y-%m-%d")
    end = datetime.datetime.strptime(end_date, "%Y-%m-%d")
    date_range = []

    current = start
    while current <= end:
        date_range.append(current.strftime("%Y-%m-%d"))
        current += datetime.timedelta(days=1)

    return date_range

# import datetime
from typing import Tuple



def get_yesterday_date():
    """获取昨天的日期字符串"""
    yesterday = datetime.datetime.now() - datetime.timedelta(days=1)
    return yesterday.strftime("%Y-%m-%d")




def batch_search_flights(start_date: str, end_date: str,
                         cities: list[str] = None,
                         save_callback=None):
    """批量查询指定日期范围的航班数据

    Args:
        start_date: 开始日期 (YYYY-MM-DD)
        end_date: 结束日期 (YYYY-MM-DD)
        cities: 城市列表，默认为预设的CITIES
        save_callback: 数据保存回调函数
    """
    if cities is None:
        cities = CITIES

    all_flights = []
    dates = get_date_range(start_date, end_date)

    total = len(cities) * (len(cities) - 1) * len(dates)
    processed = 0

    for dep in cities:
        for arr in cities:
            if dep == arr:
                continue

            for date in dates:
                processed += 1
                print(f"\r进度: {processed}/{total} ({processed / total:.1%})", end="")

                max_retries = 3
                for attempt in range(max_retries):
                    try:
                        result = search_job(dep, arr, date)
                        # print(result)
                        all_flights.extend(result['output'])

                        # 如果有回调函数，立即保存数据
                        if save_callback:
                            save_callback(result['formatted'])


                        time.sleep(2)  # 请求间隔
                        break
                    except Exception as e:
                        if attempt == max_retries - 1:
                            print(f"\n查询 {dep}→{arr} {date} 失败:", str(e))
                        else:
                            time.sleep(5)

    return all_flights





if __name__ == "__main__":
    # 获取昨天日期
    yesterday = get_yesterday_date()

    start_time = time.time()
    print(f"开始批量查询昨天({yesterday})的航班数据...")

    # 查询并保存昨天数据到所有三个表
    flights = batch_search_flights(
        start_date=yesterday,
        end_date=yesterday,
        save_callback=save_to_mysql  # 保存到flight表
    )

    save_to_flight2_and_flightinfo(flight_data=flights)

    # 保存数据到JSON
    filename = f"flights_Initial_{yesterday}.json"
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(flights, f, ensure_ascii=False)



    print(f"\n完成! 共获取 {len(flights)} 条航班数据")
    print(f"数据已保存到 {filename}")
    print(f"总耗时: {time.time() - start_time:.2f}秒")