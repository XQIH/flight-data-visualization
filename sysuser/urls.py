from django.urls import path, re_path, include
from django.conf.urls.static import static

from .models import *
from .views import *

app_name = 'sysuser'

urlpatterns = [
    path('login', login, name='login'),
    path('register', register, name='register'),
    path('logout', logout, name='logout'),
    path('', index, name='index'),
    path('index', index, name='index'),
    re_path(r'^table/(?:(?P<page_number>\d+)/)?', table, name='table'),
    # path('table', table, name='table'),
    path('predict', predict, name='predict'),
    path('human', human, name='human'),
    path('test', test, name='test'),
    path('settings/', settings_view, name='settings'),
    path('settings/update_profile/', update_profile, name='update_profile'),
    path('settings/change_password/', change_password, name='change_password'),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)