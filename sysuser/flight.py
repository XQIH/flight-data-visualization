import json
from time import sleep
from selenium import webdriver
from selenium.webdriver import ActionChains, Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait
import re
from 航班信息数据分析与可视化系统.机场IATA代码 import airports_data
import pandas as pd
import csv
import datetime
from django.utils import timezone

# 城市列表
CITIES = ['北京', '太原', '呼和浩特',
          '哈尔滨', '上海', '南京', '杭州',
          '武汉', '长沙', '广州', '深圳',
          '成都', '重庆','西安']


def get_flight_data(dep, arr, dep_date):
    """获取指定城市和日期的航班数据"""

    # 查找机场信息
    def find_airport(city):
        if city == '北京':
            return {
                'CH_name': '北京首都国际机场',
                'EN_name': 'Beijing Capital International Airport',
                'AITA': 'PEK'
            }
        elif city == '上海':
            return {
                'CH_name': '上海浦东国际机场',
                'EN_name': 'Shanghai Pudong International Airport',
                'AITA': 'PVG'
            }
        else:
            for airport in airports_data:
                if airport['城市'] == city:
                    return {
                        'CH_name': airport['中文名称'],
                        'EN_name': airport['英文名称'],
                        'AITA': airport['IATA代码']
                    }
            return None

    dep_airport = find_airport(dep)
    arr_airport = find_airport(arr)

    if not dep_airport or not arr_airport:
        return []

    service = Service(executable_path=r"D:\soft\ANACONDA\chromedriver.exe")
    driver = webdriver.Chrome(service=service)
    wait = WebDriverWait(driver, 10)
    actionchains = ActionChains(driver)
    driver.maximize_window()
    driver.get(
        f"https://cn.bing.com/travel/flight-search?&src={dep_airport['AITA'].lower()}&des={arr_airport['AITA'].lower()}&ddate={dep_date}&isr=0&rdate={dep_date}&cls=0&adult=1&child=0&infant=0&form=FLAFLI&entrypoint=UNKHUB")
    sleep(5)

    flight_data = driver.find_elements(By.XPATH, '//div[@class="itrCardLayout bt_cardCollapse itrCardLayoutV2"]')
    raw_data = []
    temp_height = 100
    x = 200


    for flight in flight_data:
        js = "window.scrollTo(0, {});".format(temp_height)
        driver.execute_script(js)
        if '直达' in flight.text:
            try:
                button = WebDriverWait(flight, 10).until(
                    EC.element_to_be_clickable((By.XPATH, './/button[@aria-label="单击以获取详细信息"]'))
                )
                button.click()
                sleep(1)
                print('==>', flight.text)
                raw_data.append(flight.text.replace('\n', ' '))
            except Exception as e:
                print(f"点击失败: {e}")
        else:
            continue
        temp_height += x
        sleep(2)

    driver.quit()
    return process_flight_data(raw_data, dep_airport, arr_airport, dep_date)


def process_flight_data(data, dep_airport, arr_airport, dep_date):
    """处理爬取的航班数据"""
    processed = []
    for item in data:
        # 提取价格
        price_match = re.search(r'¥([\d,]+)', item)
        price = int(price_match.group(1).replace(',', '')) if price_match else 0

        # 提取航空公司
        airline_match = re.search(r'选择航班\s*\S*\s*(.*?) •', item)
        airline = airline_match.group(1).strip() if airline_match else "未知航空公司"

        # 提取航班号
        flight_match = re.search(r'• (.*?) \(由', item)
        flight = flight_match.group(1) if flight_match else "未知航班号"

        # 提取飞行时间
        duration_match = re.search(r'运营\) (.*?) 分', item)
        duration = duration_match.group(1) if duration_match else "未知飞行时间"

        # 提取出发和到达时间
        time_match = re.findall(r'([上下]午\d+:\d+)', item)
        departure_time = time_match[0] if len(time_match) > 0 else "未知出发时间"
        arrival_time = time_match[1] if len(time_match) > 1 else "未知到达时间"

        processed.append({
            "date": dep_date,
            "airline": airline.replace(' ', ''),
            "flight": flight.replace(' ', ''),
            "departure_airport": f"{dep_airport['CH_name']}({dep_airport['AITA']})",
            "arrival_airport": f"{arr_airport['CH_name']}({arr_airport['AITA']})",
            "departure_time": departure_time,
            "arrival_time": arrival_time,
            "duration": f"{duration.replace(' ', '')}分钟",
            'type': '直达',
            'Cabin': '经济舱',
            "price": price,
        })

    return sorted(processed, key=lambda x: x["price"])


def batch_crawl_flights():
    """批量爬取所有城市组合的航班数据"""
    today = datetime.datetime.now().strftime("%Y-%m-%d")
    # today = '2025-05-19'
    all_flights = []

    for dep in CITIES:
        for arr in CITIES:
            if dep == arr:
                continue
            try:
                flights = get_flight_data(dep, arr, today)
                all_flights.extend(flights)
                print(f"成功获取 {dep} -> {arr} 的航班数据，共 {len(flights)} 条")
            except Exception as e:
                print(f"获取 {dep} -> {arr} 航班数据失败: {str(e)}")

    # 保存数据
    save_to_csv(all_flights, f"flights_{today}.csv")
    save_to_json(all_flights, f"flights_{today}.json")
    return all_flights


def save_to_json(data, filename):
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


def save_to_csv(data, filename):
    if not data:
        return
    fieldnames = data[0].keys()
    with open(filename, 'w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(data)


if __name__ == '__main__':
    batch_crawl_flights()