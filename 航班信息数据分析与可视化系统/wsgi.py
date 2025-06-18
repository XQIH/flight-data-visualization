"""
WSGI config for 航班信息数据分析与可视化系统 project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "航班信息数据分析与可视化系统.settings")

application = get_wsgi_application()
