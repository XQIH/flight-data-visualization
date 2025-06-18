@REM 2. 激活虚拟环境
call activate py311
REM 3. 检查 Django 是否可导入（调试用）

python manage.py makemigrations

python manage.py migrate

python manage.py collectstatic --noinput

@REM python manage.py createsuperuser

start python manage.py runserver
start http://localhost:9100


