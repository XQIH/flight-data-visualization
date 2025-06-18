import random

import pandas as pd
import pytz
from django.core.paginator import Paginator
from django.core.serializers.json import DjangoJSONEncoder
from django.shortcuts import render, HttpResponse, redirect
from .models import *
from django.shortcuts import redirect
from django.contrib.auth.hashers import make_password, check_password
from datetime import datetime
from django.db.models import Avg, Count, Q, F
import json
import os
from django.conf import settings
from django.http import JsonResponse
from django.utils import timezone
from datetime import timedelta
# Create your views here.


from functools import wraps
# 实现检测登录状态

def my_login_required(view_func):
    @wraps(view_func)
    def _wrapped_view(request, *args, **kwargs):
        if not request.session.get('user_id') and not request.session.get('username'):
            return redirect('sysuser:login')
        return view_func(request, *args, **kwargs)
    return _wrapped_view

import pymysql
from 航班信息数据分析与可视化系统.settings import DATABASE_NAME, DATABASE_USER, DATABASE_PSW, DATABASE_PORT, \
    DATABASE_HOST
from visual.visual_tools import *
from 航班信息数据分析与可视化系统.AdminConfig import LOGO




def parse_time(time_str):
    if '上午' in time_str:
        clean_time = time_str.replace('上午', '').strip()
        return clean_time if int(clean_time.split(':')[0]) != 12 else '00:' + clean_time.split(':')[1]
    elif '下午' in time_str:
        hour = int(time_str.split('下午')[1].split(':')[0])
        return f"{hour + 12 if hour < 12 else hour}:{time_str.split(':')[1].split(' ')[0]}"
    return time_str

def index(request):
    username = request.session.get('username', '')
    user = User.objects.filter(name=username).first() if username else None
    # 获取上海时区当前时间
    shanghai_tz = pytz.timezone('Asia/Shanghai')
    now_shanghai = timezone.now().astimezone(shanghai_tz)
    # 实时航班概览数据
    today = now_shanghai.date()
    yesterday = today - timedelta(days=1)


    # 准点率 (从FlightInfo获取)
    total_flights = FlightInfo.objects.count()
    on_time_flights = FlightInfo.objects.filter(delay__lte=15).count()
    on_time_rate = round((on_time_flights / total_flights) * 100, 1) if total_flights > 0 else 0

    # 平均延误时间
    avg_delay = FlightInfo.objects.aggregate(avg_delay=Avg('delay'))['avg_delay'] or 0
    avg_delay = round(avg_delay, 1)


    csv_file = f"flights_2025-05-21.csv"
    df = pd.read_csv(csv_file)
    
    # 获取当前时间
    current_time = now_shanghai.strftime("%H:%M")
    


        
    # 筛选今日航班总数
    # today_flights = df[df['date'] == today.strftime("%Y-%m-%d")]
    today_flights = df[df['date'] == "2025-05-21"]
    today_count = len(today_flights)

    # ========== 今日航班总数变化计算 ==========
    # 获取当日航班数
    today_count = len(df[df['date'] == "2025-05-21"])

    # 获取昨日航班数
    try:
        yesterday_csv = pd.read_csv(f"flights_2025-05-20.csv")
        yesterday_count = len(yesterday_csv)
        flights_count_diff = today_count - yesterday_count
        flights_count_trend = '▲' if flights_count_diff > 0 else '▼'
    except FileNotFoundError:
        flights_count_diff = 'N/A'
        flights_count_trend = ''


    # 筛选当前在飞航班
    flying_flights = []
    # 转换current_time为datetime对象进行比较
    current_dt = datetime.strptime(current_time, "%H:%M").time()

    for _, row in today_flights.iterrows():
        dep_time = datetime.strptime(parse_time(row['departure_time']), "%H:%M").time()
        arr_time = datetime.strptime(parse_time(row['arrival_time']), "%H:%M").time()

        if dep_time <= current_dt <= arr_time:
            flying_flights.append(row.to_dict())
    
    # 筛选1小时内起飞航班
    upcoming_flights = []
    for _, row in today_flights.iterrows():
        dep_time = parse_time(row['departure_time'])
        
        if dep_time > current_time:
            # 计算时间差
            dep_h, dep_m = map(int, dep_time.split(':'))
            now_h, now_m = map(int, current_time.split(':'))
            delta = (dep_h - now_h) * 60 + (dep_m - now_m)
            if 0 <= delta <= 60:  # 1小时内
                upcoming_flights.append(row.to_dict())

    # 热门航线TOP5
    popular_routes = Flight.objects.values(
        'departure_city', 'arrival_city'
    ).annotate(
        flight_count=Count('id')
    ).order_by('-flight_count')[:5]

    domestic_airlines = ['东方航空','金鹏航空','海南航空','山东航空','国际航空','上海吉祥航空','昆明航空','华夏航空','西藏航空','四川航空','南方航空','香港航空','春秋航空','上海航空','成都航空','河北航空']
    # 航空公司准点率排名
    airline_punctuality = FlightInfo.objects.filter(airline__in=domestic_airlines).values('airline').annotate(
        total_flights=Count('flight_id'),
        on_time_flights=Count('flight_id', filter=models.Q(delay__lte=15)),
        avg_delay=Avg('delay')
    ).annotate(
        punctuality=100.0 * F('on_time_flights') / F('total_flights')
    ).order_by('-punctuality')[:5]

    # 航空公司航线覆盖数量
    airline_coverage = Flight.objects.values('airline').annotate(
        count=Count('id', distinct=True)
    ).order_by('-count')[:5]

    # 获取1小时内的航班状态
    try:
        recent_flights = []
        # print(upcoming_flights)

        for row in upcoming_flights:
            # print(row)
            recent_flights.append({
                "flight": row['flight'],
                "airport_from": row['departure_airport'][:4],
                "airport_to": row['arrival_airport'][:4],
                "dep_time": row['departure_time'],
                "arr_time": row['arrival_time'],
                'type': row['type'],
                'Cabin': row['Cabin'],
                "price": row['price'],
            })

    except Exception as e:
        print(e)


    # 热门出发城市
    departure_cities = Flight.objects.values('departure_city').annotate(
        count=Count('id')
    ).order_by('-count')[:5]

    # 舱位价格对比
    cabin_prices = Flight.objects.values('cabin_type').annotate(
        avg_price=Avg('ticket_price')
    ).order_by('avg_price')

    #每日推荐
    today_str = "2025-05-21"
    csv_path = os.path.join(settings.BASE_DIR, f'flights_{today_str}.csv')

    try:
        df = pd.read_csv(csv_path)
        # 按价格排序并取最低的2条
        cheapest_flights = df[df['price'] > 0].sort_values('price').head(2).to_dict('records')
        # 处理机场名称显示
        for flight in cheapest_flights:
            # 提取出发机场IATA代码
            dep_airport = flight['departure_airport']
            flight['dep_iata'] = dep_airport.split('(')[-1].replace(')', '') if '(' in dep_airport else ''

            # 提取到达机场IATA代码
            arr_airport = flight['arrival_airport']
            flight['arr_iata'] = arr_airport.split('(')[-1].replace(')', '') if '(' in arr_airport else ''
            flight['dep_airport'] = flight['departure_airport'].split('(')[0].replace('国际机场', '')
            flight['arr_airport'] = flight['arrival_airport'].split('(')[0].replace('国际机场', '')
    except Exception as e:
        print(f"读取CSV文件失败: {str(e)}")
        cheapest_flights = []

    context = {
        'username': username,
        'user': user,
        # 'today_flights_count': today_flights_count,
        'on_time_rate': on_time_rate,
        'avg_delay': avg_delay,
        'flights_count_diff': f'{flights_count_trend} {abs(flights_count_diff)}',
        'popular_routes': popular_routes,
        'airline_punctuality': airline_punctuality,
        'airline_coverage': airline_coverage,
        'recent_flights': recent_flights[0:5],
        'departure_cities': departure_cities,
        'cabin_prices': cabin_prices,
        'current_time': (timezone.now() + timedelta(hours=8)).strftime("%Y-%m-%d %H:%M"),
        'today_flights_count': today_count,
        'flying_flights': len(flying_flights),
        'upcoming_flights': len(upcoming_flights),
        'cheapest_flights': cheapest_flights
    }

    return render(request, 'html/index.html', context)


def login(request):
    if request.method == 'GET':
        username = request.session.get('username', '')
        return render(request, 'html/login.html', context={'username': username})
    else:
        username = request.POST.get('username', '')
        password = request.POST.get('password', '')
        print(username, password)
        # 1. 先根据用户名查询用户
        user = User.objects.filter(name=username).first()

        # 2. 验证用户存在且密码匹配
        if user and check_password(password, user.password):
            # 无论是否勾选"记住我"都设置session
            request.session['username'] = user.name
            request.session['user_id'] = user.user_id
            # 登录成功逻辑
            # 如果勾选了"记住我"，设置更长的session过期时间
            if request.POST.get('check'):
                request.session.set_expiry(60 * 60 * 24 * 30)  # 30天
            else:
                request.session.set_expiry(0)  # 浏览器关闭时过期

            # return render(request, 'html/index.html',context={'username': username})
            return HttpResponse(user.name)
        else:
            # 登录失败逻辑
            return HttpResponse(0)




from django.views.decorators.csrf import csrf_exempt
# 临时禁用 CSRF
@csrf_exempt
def register(request):
    if request.method == 'GET':
        return render(request, 'html/register.html',locals())
    elif request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        email = request.POST.get('email')
        gender = request.POST.get('gender')
        user = User.objects.filter(name=username).first()
        if user is not None:
            print('用户已存在')
            return HttpResponse(1)
        elif User.objects.filter(email=email).first() is not None:
            print('邮箱已存在')
            return HttpResponse(2)
        else:
            user = User.objects.create(
                name=username,
                password=make_password(password),
                email=email,
                gender=gender
            )
            print(user)
            return HttpResponse(0)

def logout(request):
    request.session.flush()
    return redirect('/index')






# def logout_view(request):
#     from django.contrib.auth import logout
#     logout(request)
#     request.session.flush()
#     response = redirect("/")
#
#     return response

@my_login_required
def table(request, page_number=1):
    # # 获取模型的所有字段
    # fields = MyModel._meta.get_fields()
    #
    # # 遍历所有字段并打印它们的名称
    # for field in fields:
    #     print(field.name)
    EXCLUDED_FIELDS = ["id", "aircraft_type", "cabin_type"]
    if request.method == "GET":

        # 获取模型的所有字段及其中文名字
        fields_with_verbose_name = {
            field.name: field.verbose_name
            for field in Flight._meta.get_fields()
            if field.name not in EXCLUDED_FIELDS
        }

        # 打印字段名及其中文名字
        chinese_name_list = []
        for field_name, verbose_name in fields_with_verbose_name.items():
            chinese_name_list.append(verbose_name)
            print(f"字段名: {field_name}, 中文名字: {verbose_name}")
        print(chinese_name_list)
        page_number = int(page_number)
        if page_number > 0:
            allowed_fields = [f.name for f in Flight._meta.get_fields() if f.name not in EXCLUDED_FIELDS]
            hotels = Flight.objects.all().values(*allowed_fields)
            print(hotels)
            num = len(hotels)
            print(num)
            total_pages = num // 30 + 1
            current_page = page_number
            prev_page = current_page - 1
            next_page = current_page + 1
            hotels = Flight.objects.all().values(*allowed_fields)[(page_number - 1) * 30:page_number * 30]

            return render(request, 'html/table_1.html', locals())
    elif request.method == "POST":
        from django.db.models import Q

        # 获取模型的所有字段及其中文名字
        departure_city = request.POST.get("departure_city")
        arrival_city = request.POST.get("arrival_city")
        ticket_price = str(request.POST.get("ticket_price"))
        departure_date = request.POST.get("departure_date")
        print(departure_city, arrival_city, ticket_price)
        fields_with_verbose_name = {
            field.name: field.verbose_name
            for field in Flight._meta.get_fields()
            if field.name not in EXCLUDED_FIELDS
        }

        # 打印字段名及其中文名字
        chinese_name_list = []
        for field_name, verbose_name in fields_with_verbose_name.items():
            chinese_name_list.append(verbose_name)
            print(f"字段名: {field_name}, 中文名字: {verbose_name}")
        print(chinese_name_list)
        page_number = int(page_number)
        if page_number > 0:
            # 创建一个空的 Q 对象
            query = Q()

            # 如果提供了城市参数，则添加到查询中

            # 初始化查询条件为一个空Q对象
            query = Q()

            # 如果city有值，则添加正则匹配条件
            if departure_city:
                query &= Q(departure_city__iregex=departure_city)

            # 如果area有值，则添加正则匹配条件
            if arrival_city:
                query &= Q(arrival_city__iregex=arrival_city)

            # 如果price有值，则添加精确匹配条件
            if ticket_price:
                query &= Q(ticket_price__iregex=ticket_price)

            # 如果fangxing有值，则添加精确匹配条件
            if departure_date:
                query &= Q(departure_date__iregex=departure_date)

            # 根据四个参数的情况进行筛选
            allowed_fields = [f.name for f in Flight._meta.get_fields() if f.name not in EXCLUDED_FIELDS]
            hotels = Flight.objects.filter(query).values(*allowed_fields)


            print(hotels)
            num = len(hotels)
            print(num)
            total_pages = num // 30 + 1
            current_page = page_number
            prev_page = current_page - 1
            next_page = current_page + 1
            hotels = hotels[(page_number - 1) * 30:page_number * 30]

            return render(request, 'html/table_1.html', locals())
    else:
        return render(request, 'html/table_1.html', locals())


# def table(request):
#     source = request.GET.get('source', 'db')
#     page_number = int(request.GET.get('page', 1))
#     per_page = 20
#
#     # 处理筛选条件
#     filters = {
#         'departure_city': request.GET.get('departure_city', ''),
#         'arrival_city': request.GET.get('arrival_city', ''),
#         'date': request.GET.get('date', '')
#     }
#
#     try:
#         if source == 'db':
#             queryset = Flight.objects.all().order_by('-departure_time').values(
#                 'flight_number',
#                 'departure_city',
#                 'arrival_city',
#                 'departure_time',
#                 'status',
#                 'departure_airport',
#                 'arrival_airport'
#             )
#
#             if filters['departure_city']:
#                 queryset = queryset.filter(departure_city__icontains=filters['departure_city'])
#             if filters['arrival_city']:
#                 queryset = queryset.filter(arrival_city__icontains=filters['arrival_city'])
#             if filters['date']:
#                 queryset = queryset.filter(departure_time__date=filters['date'])
#
#             paginator = Paginator(queryset, per_page)
#             page_obj = paginator.get_page(page_number)
#             items = list(page_obj.object_list)
#
#             # 转换时间字段
#             for item in items:
#                 if 'departure_time' in item:
#                     item['departure_time'] = item['departure_time'].isoformat()
#         else:
#             # today = timezone.now().strftime("%Y-%m-%d")
#             csv_path = os.path.join(settings.BASE_DIR, f'flights_2025-05-20.csv')
#             df = pd.read_csv(csv_path)
#
#             if filters['departure_city']:
#                 df = df[df['departure_city'].str.contains(filters['departure_city'], case=False, na=False)]
#             if filters['arrival_city']:
#                 df = df[df['arrival_city'].str.contains(filters['arrival_city'], case=False, na=False)]
#             if filters['date']:
#                 df = df[df['departure_time'].str.startswith(filters['date'])]
#
#             records = df.to_dict('records')
#             paginator = Paginator(records, per_page)
#             page_obj = paginator.get_page(page_number)
#             items = list(page_obj.object_list)
#
#         context = {
#             'items': json.dumps(items, cls=DjangoJSONEncoder),
#             'total': paginator.count,
#             'current_page': page_number,
#             'total_pages': paginator.num_pages,
#             'source': source,
#             'filters': json.dumps(filters)
#         }
#
#         return render(request, 'html/table_1.html', context)
#
#     except Exception as e:
#         return render(request, 'html/table_1.html', {'error': str(e)})


def human(request):
    if request.method == 'POST':
        name = request.session.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        gender = request.POST.get('gender')
        address = request.POST.get('address')
        phone = request.POST.get('phone')
        print(name, email, password, gender, address, phone)
        user = User.objects.filter(name=name).update(email=email, password=password, gender=gender, address=address, phone=phone)
        return HttpResponse(1)
    if request.method == 'GET':
        username = request.session.get('username')
        user = User.objects.get(name=username)
        email = user.email
        phone = user.phone
        address = user.address
        gender = user.gender
        print(email, phone, address, gender)
        return render(request, 'html/human.html', locals())


from captcha.fields import CaptchaField
def test(request):

    from django import forms
    from captcha.fields import CaptchaField
    class LoginForm(forms.Form):
        username = forms.CharField()
        password = forms.CharField(widget=forms.PasswordInput)
        captcha = CaptchaField()

    if request.method == 'POST':
        form = LoginForm(request.POST)

    else:
        form = LoginForm()
    return render(request, 'test.html', {'form': form})


def spider(request):
    return render(request, 'html/spider.html', locals())


def test(request):
    return render(request, 'html/login_register.html', locals())
def predict(request):
    return render(request, 'html/predict.html', locals())

def search_1(request, params=None):
    import pandas as pd
    if params:
        data = get_mysql_data(params)
        # 将'product_name'列设置为索引
        data = pd.DataFrame(data)
        header = list(data.columns)
        row = list(data.values)
        # row = list(data.iloc[,:])
        print(header)
        print(row)
        print(type(header), type(row))
        table = get_table(headers=header, rows=row)


    return render(request, 'html/search.html', locals())


@my_login_required
def settings_view(request):
    """用户设置页面"""
    user_id = request.session.get('user_id')
    user = User.objects.get(user_id=user_id)
    return render(request, 'html/human.html', {'user': user})

@my_login_required
def update_profile(request):
    """更新用户个人信息"""
    if request.method == 'POST':
        user_id = request.session.get('user_id')
        user = User.objects.get(user_id=user_id)
        
        try:
            # 更新基本信息
            user.name = request.POST.get('name', user.name)
            user.email = request.POST.get('email', user.email)
            user.phone = request.POST.get('phone', user.phone)
            user.gender = request.POST.get('gender', user.gender)
            user.address = request.POST.get('address', user.address)
            
            # 处理头像上传
            if 'touxiang' in request.FILES:
                avatar = request.FILES['touxiang']
                # 生成唯一的文件名
                ext = os.path.splitext(avatar.name)[1]
                filename = f'avatar_{user_id}_{datetime.now().strftime("%Y%m%d%H%M%S")}{ext}'
                # 保存路径 (相对于 MEDIA_ROOT)
                relative_path = os.path.join('avatars', filename)
                absolute_path = os.path.join(settings.MEDIA_ROOT, relative_path)
                user.touxiang_url = os.path.join(settings.MEDIA_URL, relative_path) 
                # 确保目录存在
                os.makedirs(os.path.dirname(absolute_path), exist_ok=True)
                
                # 保存文件
                with open(absolute_path, 'wb+') as destination:
                    for chunk in avatar.chunks():
                        destination.write(chunk)
                
                # 更新数据库中的路径 (只存储相对路径)
                user.touxiang = relative_path
            
            user.save()
            return JsonResponse({'success': True, 'message': '个人信息更新成功'})
        
        except Exception as e:
            return JsonResponse({'success': False, 'message': str(e)})
    
    return JsonResponse({'success': False, 'message': '无效的请求方法'})

@my_login_required
def change_password(request):
    """修改用户密码"""
    if request.method == 'POST':
        user_id = request.session.get('user_id')
        user = User.objects.get(user_id=user_id)
        
        current_password = request.POST.get('current_password')
        new_password = request.POST.get('new_password')
        
        # 验证当前密码
        if not check_password(current_password, user.password):
            return JsonResponse({'success': False, 'message': '当前密码不正确'})
        
        # 更新密码
        try:
            user.password = make_password(new_password)
            user.save()
            return JsonResponse({'success': True, 'message': '密码修改成功'})
        except Exception as e:
            return JsonResponse({'success': False, 'message': str(e)})
    
    return JsonResponse({'success': False, 'message': '无效的请求方法'})




