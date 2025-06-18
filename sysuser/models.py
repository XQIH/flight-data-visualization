from django.db import models


class User(models.Model):
    user_id = models.AutoField(primary_key=True,verbose_name='用户id')
    name = models.CharField(max_length=255, unique=True,verbose_name='用户名')
    email = models.CharField(max_length=255, unique=True,verbose_name='邮箱')
    phone = models.CharField(max_length=20, unique=True, null=True,verbose_name='电话')
    address = models.TextField(null=True,verbose_name='住址')
    password = models.CharField(max_length=255,verbose_name='密码')
    gender = models.CharField(max_length=20, null=True,verbose_name='性别')
    touxiang = models.CharField(max_length=255, null=True,verbose_name='头像')

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'user'
        verbose_name = '用户信息'



class Flight(models.Model):
    flight_number = models.CharField(max_length=50, verbose_name="航班号")
    departure_city = models.CharField(max_length=100, verbose_name="出发城市")
    arrival_city = models.CharField(max_length=100, verbose_name="到达城市")
    departure_date = models.DateField(verbose_name="出发日期")
    airline = models.CharField(max_length=100, verbose_name="航空公司")
    aircraft_type = models.CharField(max_length=100, verbose_name="客机机型")
    departure_airport = models.CharField(max_length=100, verbose_name="出发机场")
    arrival_airport = models.CharField(max_length=100, verbose_name="到达机场")
    departure_time = models.TimeField(verbose_name="出发时间")
    arrival_time = models.TimeField(verbose_name="抵达时间")
    cabin_type = models.CharField(max_length=100, verbose_name="客舱类型")
    ticket_price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="机票价格")
    status = models.CharField(max_length=100, verbose_name="状态")

    def __str__(self):
        return f"{self.departure_city} to {self.arrival_city} on {self.departure_date}"

    class Meta:
        db_table = 'flight'
        verbose_name = "航班信息"
        verbose_name_plural = "航班信息"


class Flight2(models.Model):
    departure_city = models.CharField(max_length=100, verbose_name="出发城市")
    arrival_city = models.CharField(max_length=100, verbose_name="到达城市")
    airline = models.CharField(max_length=100, verbose_name="航空公司")
    aircraft_type = models.CharField(max_length=100, verbose_name="客机机型")
    departure_airport = models.CharField(max_length=100, verbose_name="出发机场")
    arrival_airport = models.CharField(max_length=100, verbose_name="到达机场")
    cabin_type = models.CharField(max_length=100, verbose_name="客舱类型")
    ticket_price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="机票价格￥")
    departure_month = models.IntegerField(verbose_name="出发日期(月份)")
    departure_day = models.IntegerField(verbose_name="出发日期(天)")
    departure_hour = models.IntegerField(verbose_name="出发时间(小时)")
    departure_minute = models.IntegerField(verbose_name="出发时间(分钟)")
    arrival_hour = models.IntegerField(verbose_name="抵达时间(小时)")
    arrival_minute = models.IntegerField(verbose_name="抵达时间(分钟)")
    duration_minutes = models.IntegerField(verbose_name="持续时间(分钟)")

    def __str__(self):
        return f"{self.departure_city} to {self.arrival_city} on {self.departure_month}/{self.departure_day}"

    class Meta:
        db_table = "flight2"
        verbose_name = "航班信息2"
        verbose_name_plural = "航班信息2"

class FlightInfo(models.Model):
    # 定义字段，并设置 verbose_name 为中文描述
    flight_id = models.AutoField(primary_key=True, verbose_name="航班 ID")  # 自动生成主键
    airline = models.CharField(max_length=100, verbose_name="航空公司")
    flight = models.CharField(max_length=50, verbose_name="航班号")
    airport_from = models.CharField(max_length=100, verbose_name="出发机场")
    airport_to = models.CharField(max_length=100, verbose_name="到达机场")
    day_of_week = models.IntegerField(verbose_name="星期")  # 1 = 星期一, 2 = 星期二, ..., 7 = 星期日
    time = models.TimeField(verbose_name="时间")  # 24 小时制
    length = models.IntegerField(verbose_name="航班时长")  # 以分钟为单位
    weather = models.CharField(max_length=100, verbose_name="天气")  # 天气描述
    delay = models.IntegerField(verbose_name="延误时间")  # 以分钟为单位

    # 设置模型的元数据
    class Meta:
        db_table = "flightinfo"
        verbose_name = "航班信息"
        verbose_name_plural = "航班信息"

    # 定义对象的字符串表示
    def __str__(self):
        return f"{self.airline} - {self.flight} from {self.airport_from} to {self.airport_to}"