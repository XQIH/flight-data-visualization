# 修改后台logo
LOGO = 'https://img1.baidu.com/it/u=438023531,3725836211&fm=253&fmt=auto&app=120&f=JPEG?w=775&h=500'

projectname = '航班数据可视化系统'

site_header = projectname  # 设置header
site_title = projectname  # 设置title
index_title = projectname

# 设置默认主题，指向主题css文件名。Admin Lte风格
THEME1 = 'admin.lte.css'

# 设置默认主题，指向主题css文件名。Element-ui风格
THEME2 = 'element.css'

# 设置默认主题，指向主题css文件名。layui风格
THEME3 = 'layui.css'

# 设置默认主题，指向主题css文件名。紫色风格
THEME4 = 'purple.css'

CONFIG = {
    # 是否使用系统默认菜单，自定义菜单时建议关闭。
    'system_keep': False,

    # 用于菜单排序和过滤, 不填此字段为默认排序和全部显示。空列表[] 为全部不显示.
    'menu_display': ['任务管理', '数据管理', '权限认证'],

    # 设置是否开启动态菜单, 默认为False. 如果开启, 则会在每次用户登陆时刷新展示菜单内容。
    # 一般建议关闭。
    'dynamic': False,
    'menus': [
        {
            'app': 'auth',
            'name': '权限认证',
            'icon': 'fas fa-user-shield',
            'models': [
                {
                    'name': '管理员',
                    'icon': 'fa fa-user',
                    'url': 'auth/user/'
                },
                {
                    'name': '用户组',
                    'icon': 'fa fa-th-list',
                    'url': 'auth/group/'
                }
            ]
        },

        {
            'name': '数据管理',
            'icon': 'fa fa-th-list',
            'models': [
                {
                    'name': '用户列表',
                    # 注意url按'/admin/应用名小写/模型名小写/'命名。
                    'url': '/admin/sysuser/user/',
                    'icon': 'fa fa-tasks'
                },
                {
                    'name': '航班信息1',
                    # 注意url按'/admin/应用名小写/模型名小写/'命名。
                    'url': '/admin/sysuser/flight/',
                    'icon': 'fa fa-tasks'
                },
                {
                    'name': '航班信息2',
                    # 注意url按'/admin/应用名小写/模型名小写/'命名。
                    'url': '/admin/sysuser/flight2/',
                    'icon': 'fa fa-tasks'
                },
                {
                    'name': '航班信息3',
                    # 注意url按'/admin/应用名小写/模型名小写/'命名。
                    'url': '/admin/sysuser/flightinfo/',
                    'icon': 'fa fa-tasks'
                },
            ],
        },
{
            'name': '任务管理',
            'icon': 'fas fa-tasks',
            'models': [
                {
                    'name': '计划任务',
                    'icon': 'fa fa-clock',
                    'url': 'django_q/schedule/'
                },
                {
                    'name': '任务队列',
                    'icon': 'fa fa-list',
                    'url': 'django_q/task/'
                }
            ]
        },
    ]
}

# 隐藏首页的快捷操作和最近动作
SIMPLEUI_HOME_QUICK = False
SIMPLEUI_HOME_ACTION = False

# 后台首页设置
URL = '/bi'
TITLE = '数据大屏'
ICON = 'fa fa-eye'
