from django.contrib import admin
from django.http import HttpResponse
from .models import *
import csv
from django.contrib.admin import AdminSite
from django.urls import path
from django.contrib import admin
from django_q.models import Schedule, Success, Failure, Task
from django_q.admin import ScheduleAdmin, TaskAdmin
from django.urls import reverse
from django.utils.html import format_html

admin.site.unregister(Schedule)
admin.site.unregister(Success)
admin.site.unregister(Failure)
def export_to_csv(modeladmin, request, queryset):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="henan_export.csv"'
    writer = csv.writer(response)
    fields = [field.name for field in queryset.model._meta.fields]
    writer.writerow(fields)
    for obj in queryset:
        row = [getattr(obj, field) for field in fields]
        writer.writerow(row)
    return response

export_to_csv.short_description = "导出到CSV"


# search
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    search_fields = ['name', 'email', 'phone', 'address', 'gender', 'touxiang']




@admin.register(Flight)
class HenanAdmin(admin.ModelAdmin):
    list_display = ('flight_number','departure_city', 'arrival_city', 'departure_date', 'airline','departure_airport','arrival_airport','departure_time','arrival_time','ticket_price','status') # 展示的字段
    # list_editable = ('fenxiang',)  # 允许直接编辑的字段,必须是元组
    list_display_links = ['departure_city']  # 设置链接到编辑页面的字段

    list_filter = ['flight_number','departure_city', 'arrival_city', 'departure_date', 'airline','departure_airport','arrival_airport','departure_time','arrival_time','ticket_price','status']

    # search_fields = ['max_wendu', 'min_wendu', 'tianqi', 'date','fenxiang']
    list_per_page = 25
    actions = [export_to_csv]
    # 排序
    # ordering = ['date', 'max_wendu']
@admin.register(Flight2)
class HenanAdmin(admin.ModelAdmin):
    list_display = ('departure_city', 'arrival_city', 'airline', 'departure_airport','arrival_airport','ticket_price','departure_month','departure_day','departure_hour','departure_minute','arrival_hour','arrival_minute','duration_minutes') # 展示的字段
    # list_editable = ('fenxiang',)  # 允许直接编辑的字段,必须是元组
    list_display_links = ['departure_city']  # 设置链接到编辑页面的字段

    list_filter = ['departure_city', 'arrival_city', 'airline', 'departure_airport','arrival_airport','ticket_price','departure_month','departure_day','departure_hour','departure_minute','arrival_hour','arrival_minute','duration_minutes']

    # search_fields = ['max_wendu', 'min_wendu', 'tianqi', 'date','fenxiang']
    list_per_page = 25
    actions = [export_to_csv]
    # 排序
    # ordering = ['date', 'max_wendu']
@admin.register(FlightInfo)
class HenanAdmin(admin.ModelAdmin):
    list_display = ('flight_id', 'airline', 'flight', 'airport_from', 'airport_to','day_of_week','time','length','weather','delay') # 展示的字段
    # list_editable = ('fenxiang',)  # 允许直接编辑的字段,必须是元组
    list_display_links = ['flight_id']  # 设置链接到编辑页面的字段

    list_filter = ['airline', 'flight', 'airport_from', 'airport_to','day_of_week','time','length','weather','delay']

    # search_fields = ['max_wendu', 'min_wendu', 'tianqi', 'date','fenxiang']
    list_per_page = 25
    actions = [export_to_csv]
    # 排序
    # ordering = ['date', 'max_wendu']

#后台管理样式设置
from 航班信息数据分析与可视化系统 import AdminConfig
admin.site.site_header = AdminConfig.site_header  # 设置header
admin.site.site_title = AdminConfig.site_title  # 设置title
admin.site.index_title = AdminConfig.index_title


# search
# @admin.register(User)
# class UserAdmin(admin.ModelAdmin):
#     search_fields = ['name', 'email', 'phone', 'address', 'gender', 'touxiang']

# search+exportcsv+filter+list
# @admin.register(Henan)
# class HenanAdmin(admin.ModelAdmin):
#     list_display = ('max_wendu', 'min_wendu', 'tianqi', 'date', 'fenxiang') # 展示的字段
#     list_editable = ('fenxiang',)  # 允许直接编辑的字段,必须是元组
#     list_display_links = ['max_wendu']  # 设置链接到编辑页面的字段
#
#     list_filter = ['max_wendu', 'min_wendu', 'tianqi', 'date']
#
#     # search_fields = ['max_wendu', 'min_wendu', 'tianqi', 'date','fenxiang']
#
#     actions = [export_to_csv]
#     # 排序
#     # ordering = ['date', 'max_wendu']
# 最原始方法
# admin.site.register(User)
# admin.site.register(Henan)


class MyAdminSite(AdminSite):
    site_header = 'My Custom Admin'
    site_title = 'My Custom Admin'

    def get_urls(self):
        urls = super().get_urls()
        my_urls = [
            path('my-custom-page/', self.admin_view(self.my_custom_view), name='my_custom_page'),
            # Add more custom URLs as needed
        ]
        return my_urls + urls

    def my_custom_view(self, request):
        return HttpResponse('This is my custom page in the admin.')

# Register the custom AdminSite
my_admin_site = MyAdminSite(name='myadmin')


# Django-Q 自定义Admin类
@admin.register(Schedule)
class CustomScheduleAdmin(ScheduleAdmin):
    list_display = ('id', 'name', 'func', 'schedule_type', 'next_run', 'repeats')
    list_display_links = ('id', 'name')
    list_filter = ('schedule_type', 'next_run')
    search_fields = ('name', 'func')
    list_per_page = 25

@admin.register(Task)
class CustomTaskAdmin(TaskAdmin):
    list_display = ('id', 'name', 'func', 'started', 'stopped', 'success')
    list_display_links = ('id', 'name')
    list_filter = ('success', 'started')
    search_fields = ('name', 'func')
    list_per_page = 25

@admin.register(Success)
class SuccessAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'func', 'started', 'stopped', 'time_taken')
    list_display_links = ('id', 'name')
    list_filter = ('started', 'stopped')
    search_fields = ('name', 'func')
    readonly_fields = ('id', 'started', 'stopped', 'time_taken')
    date_hierarchy = 'started'
    list_per_page = 25

@admin.register(Failure)
class FailureAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'func', 'started', 'stopped')
    list_display_links = ('id', 'name')
    list_filter = ('started', 'stopped')
    search_fields = ('name', 'func')
    readonly_fields = ('id', 'started', 'stopped', 'result')
    date_hierarchy = 'started'
    list_per_page = 25





