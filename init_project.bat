
python -m pip install --upgrade pip -i https://pypi.tuna.tsinghua.edu.cn/simple

pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple

pip install -r requirements.txt

python manage.py makemigrations

python manage.py migrate

python manage.py collectstatic --noinput

python manage.py createsuperuser --username=administrator --email=

@REM start python manage.py runserver
@REM start http://localhost:9100