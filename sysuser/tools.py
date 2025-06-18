from django.apps import apps

# 获取所有已注册的应用程序
registered_apps = apps.get_app_configs()

# 创建一个空列表来存储模型名称
model_names = []

# 遍历每个应用程序并获取其模型
for app in registered_apps:
    # 获取该应用程序的所有模型
    models = app.get_models()
    # 将每个模型的名称添加到列表中
    for model in models:
        model_names.append(model.__name__)

# 现在 model_names 列表包含了所有已定义的模型的名称
print(model_names)