# Generated by Django 5.0.1 on 2024-03-02 17:42

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="CarInfo",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("skuid", models.TextField()),
                ("carid", models.TextField()),
                ("carname", models.TextField()),
                ("seriesname", models.TextField()),
                ("brandname", models.TextField()),
                ("caryear", models.TextField()),
                ("city", models.TextField()),
                ("image", models.TextField()),
                ("shprice", models.TextField()),
                ("officialprice", models.TextField()),
                ("subtitle", models.TextField()),
            ],
            options={
                "verbose_name": "车辆信息",
                "db_table": "carinfo",
            },
        ),
        migrations.CreateModel(
            name="User",
            fields=[
                ("user_id", models.AutoField(primary_key=True, serialize=False)),
                ("name", models.CharField(max_length=255, unique=True)),
                ("email", models.CharField(max_length=255, unique=True)),
                ("phone", models.CharField(max_length=20, null=True, unique=True)),
                ("address", models.TextField(null=True)),
                ("password", models.CharField(max_length=255)),
                ("gender", models.CharField(max_length=20, null=True)),
                ("touxiang", models.CharField(max_length=255, null=True)),
            ],
            options={
                "verbose_name": "用户信息",
                "db_table": "user",
            },
        ),
    ]
