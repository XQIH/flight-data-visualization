from sysuser.models import Flight

def update_flight_prices():
    """
    临时修改航班舱位价格的函数
    使用示例(在Django shell中):
    from sysuser.views import update_flight_prices
    update_flight_prices()
    """
    # 设置各舱位的价格范围(单位:元)
    price_ranges = {
        '经济舱': (500, 1000),
        '商务舱': (1000, 2500),
    }
    
    # 遍历所有航班记录
    for flight in Flight.objects.all():
        # 将超级经济舱和豪华头等舱改为经济舱
        if flight.cabin_type in ['超级经济舱', '豪华头等舱', '头等舱']:
            flight.cabin_type = '经济舱'
        
        if flight.cabin_type in price_ranges:
            min_price, max_price = price_ranges[flight.cabin_type]
            # 随机生成新价格(在合理范围内)
            import random
            new_price = random.randint(min_price, max_price)
            flight.ticket_price = new_price
            flight.save()
            print(f"已更新航班 {flight.flight_number} 的 {flight.cabin_type} 价格为 {new_price} 元")
    
    return "价格更新完成"


