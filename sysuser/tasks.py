import json

import pytz
from django_q.tasks import schedule
from django_q.models import Schedule
from datetime import datetime, timedelta
import time
from 航班信息数据分析与可视化系统.apidata import batch_search_flights, save_to_mysql, save_to_flight2_and_flightinfo, \
    get_yesterday_date
from django.utils import timezone


def update_flight_data():
    """更新航班数据的主任务（只处理昨天数据并插入所有三个表）"""
    print(f"开始执行航班数据更新 {datetime.now()}")
    start_time = time.time()

    try:
        # 获取昨天日期
        yesterday = get_yesterday_date()

        print(f"\n开始批量查询昨天({yesterday})的航班数据...")

        # 查询航班数据
        result = batch_search_flights(
            start_date=yesterday,
            end_date=yesterday,
            save_callback=save_to_mysql  # 先保存到flight表
        )


        save_to_flight2_and_flightinfo(result)


        # 统计信息
        total_flights = len(result)
        print(f"\n完成! 共获取 {total_flights} 条航班数据")
        print(f"数据已保存到所有三个表(flight, flight2, flightinfo)")
        print(f"总耗时: {time.time() - start_time:.2f}秒")

        print("航班数据更新完成")
        return True
    except Exception as e:
        print(f"航班数据更新失败: {str(e)}")
        return False




def setup_schedules():
    """设置定时任务"""
    # 删除旧的任务
    Schedule.objects.all().delete()
    # 获取当前上海时间
    shanghai_tz = pytz.timezone('Asia/Shanghai')
    now_shanghai = timezone.now().astimezone(shanghai_tz)

    # 计算明天上海时间午夜
    tomorrow_midnight_shanghai = (now_shanghai + timedelta(days=1)).replace(
        hour=0, minute=0, second=0, microsecond=0
    )
    # 转换为UTC
    tomorrow_midnight_utc = tomorrow_midnight_shanghai.astimezone(pytz.UTC)

    # 每天0点执行完整更新
    schedule(
        'sysuser.tasks.update_flight_data',
        name='Daily Flight Data Update (01:00)',
        schedule_type=Schedule.DAILY,
        repeats=-1,  # 无限重复
        next_run=tomorrow_midnight_utc
    )

    # 每天0点执行爬虫任务
    schedule(
        'sysuser.flight.batch_crawl_flights',
        name='Daily Flight Data Crawling',
        schedule_type=Schedule.DAILY,
        repeats=-1,  # 无限重复
        next_run=tomorrow_midnight_utc
    )

    print(f"定时任务设置完成 - 将在 {tomorrow_midnight_shanghai} (北京时间) 执行")