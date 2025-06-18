from django.urls import path, re_path, include
from .views import *

app_name = 'visual'
urlpatterns = [
    path('bi', bi, name='bi'),
    path('bi2', bi_2, name='bi_2'),
    path('bi3',bi_3, name='bi_3')
]
