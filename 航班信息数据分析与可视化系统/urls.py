"""
URL configuration for 航班信息数据分析与可视化系统 project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
# 验证码组件
from captcha import urls as captcha_urls
from visual.views import flight_chart_data
# from sysuser.views import logout_view


urlpatterns = [
    # path('admin/logout/', logout_view, name='logout_view'),
    path("admin/", admin.site.urls),
    path('captcha/', include(captcha_urls)),#还需要加这个验证码
    path('', include('sysuser.urls', namespace='sysuser')),
    path('', include('visual.urls', namespace='visual')),
    path('api/flight-charts/', flight_chart_data, name='flight-charts'),
]
