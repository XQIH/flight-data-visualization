# 可视化
from pyecharts import options as opts
from pyecharts.globals import CurrentConfig
from pyecharts.globals import ThemeType
from pyecharts.faker import Faker
# 连接数据库
import pymysql
from pyhive.hive import Connection
# 导入数据库配置
from 航班信息数据分析与可视化系统.settings import DATABASE_NAME, DATABASE_USER, DATABASE_PSW, DATABASE_PORT, \
    DATABASE_HOST

CurrentConfig.ONLINE_HOST = "static/official/"


def get_mysql_data(sql=None, data=None):
    # sql可以传入%的形式加上data防止sql注入
    print("数据库链接成功！")
    conn = pymysql.connect(host=DATABASE_HOST, port=DATABASE_PORT, user=DATABASE_USER, password=DATABASE_PSW,
                           db=DATABASE_NAME,
                           charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)

    # 注意使用下面链接hive，这个数据库是hive的数据库，端口改为虚拟机的ip，需要将这个使用的mysql的所有表和数据导入到hive的库中
    # conn = Connection(host="10.18.1.205",
    #                   port=10000,
    #                   database="hotel",
    #                   username="dsj_admin",
    #                   password="admin",
    #                   auth='CUSTOM',  # 使用自定义身份验证
    #                   configuration={'hive.server2.transport.mode': 'http',
    #                                  'hive.server2.thrift.http.path': '/cliservice'}
    #                   )
    cursor = conn.cursor()
    visual_data = None
    try:
        cursor.execute(sql, data)
        print("sql:" + sql)
        conn.commit()
        visual_data = cursor.fetchall()
    except Exception as e:
        print('错误！原因是{}'.format(e))
        conn.rollback()
    finally:
        print("数据库链接关闭！")
        cursor.close()
        conn.close()

    return visual_data

# 柱状图直线
def get_bar(X=None, y=None, title=None, tcolor=None, xcolor=None, ycolor=None, legendtextcolor=None):
    from pyecharts.charts import Bar
    if not X and not y:
        X = ["衬衫", "毛衣", "领带", "裤子", "风衣", "高跟鞋", "袜子"]
        y = {"原价": [114, 55, 27, 101, 125, 27, 105], "现价": [57, 134, 137, 129, 145, 60, 49]}
    else:
        X = X
        y = y
    if not title:
        # title是标题，左上角那个
        title = "柱状图"
    else:
        title = title

    if not tcolor:
        # 左上角标题的颜色
        tcolor = "#fff"
    else:
        tcolor = tcolor
    # 注意可以多加到三列显示和一列显示
    if not xcolor:
        # x轴的颜色
        xcolor = "#fff"
    else:
        xcolor = xcolor
    if not ycolor:
        # y轴的颜色
        ycolor = "#fff"
    else:
        ycolor = ycolor
    if not legendtextcolor:
        # 上面那个开关的文本颜色
        legendtextcolor = "#fff"
    else:
        legendtextcolor = legendtextcolor

    bar = (
        Bar()
        .add_xaxis(X)
        .add_yaxis(list(y.keys())[0], list(y.values())[0])
        .add_yaxis(list(y.keys())[1], list(y.values())[1])
        .set_global_opts(
            title_opts=opts.TitleOpts(title=title, title_textstyle_opts=opts.TextStyleOpts(color=tcolor)),
            xaxis_opts=opts.AxisOpts(axislabel_opts=opts.LabelOpts(color=xcolor)),  # 设置 x 轴标签颜色
            yaxis_opts=opts.AxisOpts(axislabel_opts=opts.LabelOpts(color=ycolor)),
            legend_opts=opts.LegendOpts(
                textstyle_opts=opts.TextStyleOpts(color=legendtextcolor)  # 设置图例字体颜色为白色
            )
        )
    )
    bar.width = '100%'
    bar.height = '100%'
    # 生成 HTML 代码
    bar_html = bar.render_embed()

    return bar_html

# 柱状图圆柱
def get_bar1(x=None, y=None, title=None, tcolor=None, xcolor=None, legendtext=None, ycolor=None, legendtextcolor=None):
    from pyecharts.charts import Bar
    from pyecharts.commons.utils import JsCode

    if not x and not y:
        x = ["衬衫", "毛衣", "领带", "裤子", "风衣", "高跟鞋", "袜子"]
        y = [114, 55, 27, 101, 125, 27, 105]
    else:
        x = x
        y = y
    if not title:
        # title是标题，左上角那个
        title = "柱状图"
    else:
        title = title

    if not tcolor:
        # 左上角标题的颜色
        tcolor = "#fff"
    else:
        tcolor = tcolor
    # 注意可以多加到三列显示和一列显示
    if not xcolor:
        # x轴的颜色
        xcolor = "#fff"
    else:
        xcolor = xcolor
    if not ycolor:
        # y轴的颜色
        ycolor = "#fff"
    else:
        ycolor = ycolor
    if not legendtext:
        legendtext = ''
    else:
        legendtext = legendtext

    if not legendtextcolor:
        # 上面那个开关的文本颜色
        legendtextcolor = "#fff"
    else:
        legendtextcolor = legendtextcolor
    c = (
        Bar()
        .add_xaxis(x)
        .add_yaxis(legendtext, y, category_gap="60%")
        .set_series_opts(
            itemstyle_opts={
                "normal": {
                    "color": JsCode(
                        """new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 244, 255, 1)'
                }, {
                    offset: 1,
                    color: 'rgba(0, 77, 167, 1)'
                }], false)"""
                    ),
                    "barBorderRadius": [30, 30, 30, 30],
                    "shadowColor": "rgb(0, 160, 221)",
                }
            }
        )
        .set_global_opts(
            title_opts=opts.TitleOpts(title=title, title_textstyle_opts=opts.TextStyleOpts(color=tcolor))
            , xaxis_opts=opts.AxisOpts(axislabel_opts=opts.LabelOpts(color=xcolor)),  # 设置 x 轴标签颜色
            yaxis_opts=opts.AxisOpts(axislabel_opts=opts.LabelOpts(color=ycolor)),
            legend_opts=opts.LegendOpts(
                textstyle_opts=opts.TextStyleOpts(color=legendtextcolor))
        )
    )
    c.width = '100%'
    c.height = '100%'
    html = c.render_embed()
    return html

def get_bar2(x=None, y=None,y2=None, title=None, tcolor=None, xcolor=None, legendtext=None,legendtext2=None, ycolor=None, legendtextcolor=None):
    from pyecharts.charts import Bar
    from pyecharts.commons.utils import JsCode

    if not x and not y:
        x = ["衬衫", "毛衣", "领带", "裤子", "风衣", "高跟鞋", "袜子"]
        y = [114, 55, 27, 101, 125, 27, 105]
        y2 = [114, 55, 27, 101, 125, 27, 105]
    else:
        x = x
        y = y
        y2 = y2
    if not title:
        # title是标题，左上角那个
        title = "柱状图"
    else:
        title = title

    if not tcolor:
        # 左上角标题的颜色
        tcolor = "#fff"
    else:
        tcolor = tcolor
    # 注意可以多加到三列显示和一列显示
    if not xcolor:
        # x轴的颜色
        xcolor = "#fff"
    else:
        xcolor = xcolor
    if not ycolor:
        # y轴的颜色
        ycolor = "#fff"
    else:
        ycolor = ycolor
    if not legendtext:
        legendtext = ''
    else:
        legendtext = legendtext
    if not legendtext2:
        legendtext2 = ''
    else:
        legendtext2 = legendtext2
    if not legendtextcolor:
        # 上面那个开关的文本颜色
        legendtextcolor = "#fff"
    else:
        legendtextcolor = legendtextcolor
    c = (
        Bar()
        .add_xaxis(x)
        .add_yaxis(legendtext, y, category_gap="60%")
        .add_yaxis(legendtext2, y2, category_gap="60%")
        .set_series_opts(
            itemstyle_opts={
                "normal": {
                    "color": JsCode(
                        """new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 244, 255, 1)'
                }, {
                    offset: 1,
                    color: 'rgba(0, 77, 167, 1)'
                }], false)"""
                    ),
                    "barBorderRadius": [30, 30, 30, 30],
                    "shadowColor": "rgb(0, 160, 221)",
                }
            }
        )
        .set_global_opts(
            title_opts=opts.TitleOpts(title=title, title_textstyle_opts=opts.TextStyleOpts(color=tcolor))
            , xaxis_opts=opts.AxisOpts(axislabel_opts=opts.LabelOpts(color=xcolor)),  # 设置 x 轴标签颜色
            yaxis_opts=opts.AxisOpts(axislabel_opts=opts.LabelOpts(color=ycolor)),
            legend_opts=opts.LegendOpts(
                textstyle_opts=opts.TextStyleOpts(color=legendtextcolor)),
            datazoom_opts=opts.DataZoomOpts(),
            toolbox_opts=opts.ToolboxOpts(is_show=True)
        )
    )
    c.width = '100%'
    c.height = '100%'
    html = c.render_embed()
    return html

from pyecharts.charts import Pie
from pyecharts import options as opts
# 饼图
def get_pie(data=None, legend=None, title=None, tcolor=None, legendtextcolor=None):
    # 参数安全处理
    data = list(data) if data is not None else []
    legend = list(legend) if legend is not None else []
    title = str(title) if title else "饼图"
    tcolor = str(tcolor) if tcolor else "#fff"
    legendtextcolor = str(legendtextcolor) if legendtextcolor else "#fff"

    # 默认数据（仅当无数据时使用）
    if not data or not legend:
        data = [100]
        legend = ["示例数据"]
        title = "数据加载中..." if title == "饼图" else title

    # 数据清洗
    valid_data = []
    for name, value in zip(legend, data):
        if name is not None and value is not None:
            try:
                valid_data.append([str(name), float(value)])
            except (ValueError, TypeError):
                continue  # 跳过无效数据

    # 确保至少有一个有效数据点
    if not valid_data:
        valid_data = [["无数据", 100]]

    # 构建饼图
    pie = (
        Pie()
        .add("", valid_data)
        .set_global_opts(
            title_opts=opts.TitleOpts(
                title=title,
                title_textstyle_opts=opts.TextStyleOpts(color=tcolor)
            ),
            legend_opts=opts.LegendOpts(
                orient='vertical',
                pos_right=0,
                textstyle_opts=opts.TextStyleOpts(color=legendtextcolor)
            )
        )
        .set_series_opts(
            label_opts=opts.LabelOpts(formatter="{b}: {c} ({d}%)")
        )
    )

    pie.width = '100%'
    pie.height = '100%'
    return pie.render_embed()
# 圆环图
def get_pie2(data=None, title=None, tcolor=None, legendtextcolor=None):
    from pyecharts.charts import Pie
    if not data:
        data = [['可乐', 144], ['雪碧', 121], ['橙汁', 95], ['绿茶', 69], ['奶茶', 71], ['百威', 81], ['青岛', 52]]
    else:
        data = data
    if not title:
        title = '柱状图'
    else:
        title = title
    if not tcolor:
        tcolor = "fff"
    else:
        tcolor = tcolor
    if not legendtextcolor:
        legendtextcolor = "fff"
    else:
        legendtextcolor = legendtextcolor

    pie = (
        Pie()
        .add(
            "",
            data,
            radius=["40%", "75%"],
        )
        .set_global_opts(
            title_opts=opts.TitleOpts(title=title, is_show=True,
                                      title_textstyle_opts=opts.TextStyleOpts(color=tcolor)),
            legend_opts=opts.LegendOpts(orient="vertical", pos_top="0%", pos_right="0%",
                                        textstyle_opts=opts.TextStyleOpts(color=legendtextcolor)),

        )
        .set_series_opts(label_opts=opts.LabelOpts(formatter="{b}: {c}"))
    )
    pie.width = '100%'
    pie.height = '100%'
    # 将图表渲染为 HTML 字符串
    pie2_html = pie.render_embed()
    return pie2_html

# 折线图弯曲
def get_line(X=None, Y=None, title=None, tcolor=None, xcolor=None, ycolor=None, legendtext=None, legendtextcolor=None):
    # 折现是弯曲的
    from pyecharts.charts import Line
    from pyecharts.globals import ThemeType
    if not X and not Y:
        # X和Y的数据示例
        x_data = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        y_data = [120, 200, 150, 80, 70, 110, 130]
    # 创建折线图
    else:
        x_data = list(X)
        y_data = list(Y)

    if not title:
        # title是标题，左上角那个
        title = "折线图（弯曲）"
    else:
        title = title

    if not tcolor:
        # 左上角标题的颜色
        tcolor = "#fff"
    else:
        tcolor = tcolor
    # 注意可以多加到三列显示和一列显示
    if not xcolor:
        # x轴的颜色
        xcolor = "#fff"
    else:
        xcolor = xcolor
    if not ycolor:
        # y轴的颜色
        ycolor = "#fff"
    else:
        ycolor = ycolor
    if not legendtext:
        legendtext = ""
    else:
        legendtext = legendtext
    if not legendtextcolor:
        # 上面那个开关的文本颜色
        legendtextcolor = "#fff"
    else:
        legendtextcolor = legendtextcolor
    line = Line(init_opts=opts.InitOpts(theme=ThemeType.LIGHT))
    line.add_xaxis(xaxis_data=x_data)
    line.add_yaxis(series_name=legendtext, y_axis=y_data, is_smooth=True)
    # 设置图表标题、坐标轴标签等
    line.set_global_opts(
        title_opts=opts.TitleOpts(title=title, title_textstyle_opts=opts.TextStyleOpts(color=tcolor)),
        xaxis_opts=opts.AxisOpts(type_="category", boundary_gap=False, axislabel_opts=opts.LabelOpts(color=xcolor)),
        yaxis_opts=opts.AxisOpts(type_="value", axislabel_opts=opts.LabelOpts(color=ycolor)),
        legend_opts=opts.LegendOpts(
            textstyle_opts=opts.TextStyleOpts(color=legendtextcolor)  # 设置图例字体颜色为白色
        )
    )

    line.width = '100%'
    line.height = '100%'
    line_html = line.render_embed()
    return line_html

# 折线图直线
def get_line1(X=None, Y=None, title=None, tcolor=None, xcolor=None, ycolor=None, legendtext=None, legendtextcolor=None):
    # 直的折现
    from pyecharts.charts import Line
    if not X and not Y:
        x_data = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        y_data = [120, 200, 150, 80, 70, 110, 130]
    else:
        x_data = X
        y_data = Y
    if not title:
        # title是标题，左上角那个
        title = "折线图（笔直）"
    else:
        title = title

    if not tcolor:
        # 左上角标题的颜色
        tcolor = "#fff"
    else:
        tcolor = tcolor
    # 注意可以多加到三列显示和一列显示
    if not xcolor:
        # x轴的颜色
        xcolor = "#fff"
    else:
        xcolor = xcolor
    if not ycolor:
        # y轴的颜色
        ycolor = "#fff"
    else:
        ycolor = ycolor

    if not legendtext:
        legendtext = ""
    else:
        legendtext = legendtext
    if not legendtextcolor:
        # 上面那个开关的文本颜色
        legendtextcolor = "#fff"
    else:
        legendtextcolor = legendtextcolor

    # 创建折线图
    line = (
        Line(init_opts=opts.InitOpts(theme=ThemeType.WHITE))
        .add_xaxis(xaxis_data=x_data)
        .add_yaxis(
            # 可以增加y轴的数量
            series_name=legendtext,
            y_axis=y_data,
            markpoint_opts=opts.MarkPointOpts(data=[opts.MarkPointItem(type_="max")]),
        )
        .set_global_opts(
            title_opts=opts.TitleOpts(
                title=title, title_textstyle_opts=opts.TextStyleOpts(color=tcolor)
            ),
            xaxis_opts=opts.AxisOpts(
                axislabel_opts=opts.LabelOpts(color=xcolor),  # 设置 x 轴标签文字颜色为白色
                axisline_opts=opts.AxisLineOpts(linestyle_opts=opts.LineStyleOpts(color="#fff")),  # 设置 x 轴线颜色为白色
            ),
            yaxis_opts=opts.AxisOpts(
                axislabel_opts=opts.LabelOpts(color=ycolor),  # 设置 y 轴标签文字颜色为白色
                axisline_opts=opts.AxisLineOpts(linestyle_opts=opts.LineStyleOpts(color="#fff")),  # 设置 y 轴线颜色为白色
            ),
            legend_opts=opts.LegendOpts(
                textstyle_opts=opts.TextStyleOpts(color=legendtextcolor)  # 设置图例字体颜色为白色
            ),
        )
    )
    line.width = '100%'
    line.height = '100%'
    # 将图表渲染到 Django 模板
    line_html = line.render_embed()
    return line_html

# 图片
def get_image(title=None, title2=None, path=None):
    from pyecharts.components import Image
    from pyecharts.options import ComponentTitleOpts
    # 指向static，path传static里面的路径
    if not title:
        title = '标题1'
    else:
        title = title
    if not title2:
        title2 = ''
    else:
        title2 = title2
    if not path:
        path = 'static/images/backgroud.jpg'
    else:
        path = path

    image = Image()
    img_src = (
        # "https://user-images.githubusercontent.com/19553554/"
            'static\\' + path
    )
    image.add(
        src=img_src,
        style_opts={"width": "100%", "height": "300px", "style": "margin-top: 0"},
    )
    image.set_global_opts(
        title_opts=ComponentTitleOpts(title=title, subtitle=title2)
    )

    ihtml = image.render_embed()
    return ihtml

# 水球图
def get_liquid(data=None, title=None, tcolor=None, legendtext=None, legendtextcolor=None):
    from pyecharts.charts import Liquid
    from pyecharts.globals import SymbolType
    if not data:
        data = [0.3, 0.7]
    else:
        data = data
    if not title:
        title = "水球图"
    else:
        title = title
    if not tcolor:
        tcolor = "#fff"
    else:
        tcolor = tcolor
    if not legendtext:
        legendtext = "lq"
    else:
        legendtext = legendtext
    if not legendtextcolor:
        legendtextcolor = "#fff"
    else:
        legendtextcolor = legendtextcolor

    c = (
        Liquid()
        .add(legendtext, data, is_outline_show=False, shape=SymbolType.RECT)
        .set_global_opts(title_opts=opts.TitleOpts(title=title, title_textstyle_opts=opts.TextStyleOpts(color=tcolor)),
                         legend_opts=opts.LegendOpts(
                             textstyle_opts=opts.TextStyleOpts(color=legendtextcolor)  # 设置图例字体颜色为白色
                         ),
                         )
    )
    c.width = '100%'
    c.height = '100%'
    html = c.render_embed()
    return html

# 雷达图
def get_radar(X=None, Y=None, title=None, tcolor=None, xcolor=None, ycolor=None, legendtext=None, legendtextcolor=None):
    from pyecharts.charts import Radar
    v1 = [[4300, 10000, 28000, 35000, 50000, 19000]]
    v2 = [[5000, 14000, 28000, 31000, 42000, 21000]]
    c = (
        Radar()
        .add_schema(
            schema=[
                opts.RadarIndicatorItem(name="销售", max_=6500),
                opts.RadarIndicatorItem(name="管理", max_=16000),
                opts.RadarIndicatorItem(name="信息技术", max_=30000),
                opts.RadarIndicatorItem(name="客服", max_=38000),
                opts.RadarIndicatorItem(name="研发", max_=52000),
                opts.RadarIndicatorItem(name="市场", max_=25000),
            ]
        )
        .add("预算分配", v1)
        .add("实际开销", v2)
        .set_series_opts(label_opts=opts.LabelOpts(is_show=False))
        .set_global_opts(
            legend_opts=opts.LegendOpts(selected_mode="single"),
            title_opts=opts.TitleOpts(title="Radar-单例模式"),
        )
    )
    c.width = '100%'
    c.height = '100%'
    html = c.render_embed()
    return html

# 散点图
def get_scatter(X=None, Y=None, title=None, tcolor=None, xcolor=None, ycolor=None, legendtext=None,
                legendtextcolor=None):
    from pyecharts.charts import Scatter
    from pyecharts.faker import Faker
    if not X and not Y:
        X = Faker.values()
        Y = Faker.values()
    else:
        X = X
        Y = Y
    print(X, Y)
    if not title:
        title = "散点图"
    else:
        title = title
    if not tcolor:
        tcolor = "#fff"
    else:
        tcolor = tcolor
    if not xcolor:
        xcolor = "#fff"
    else:
        xcolor = xcolor
    if not ycolor:
        ycolor = "#fff"
    else:
        ycolor = ycolor
    if not legendtext:
        legendtext = ""
    else:
        legendtext = legendtext
    if not legendtextcolor:
        legendtext = "#fff"
    else:
        legendtextcolor = legendtextcolor


    c = (
        Scatter()
        .add_xaxis(Faker.choose())
        .add_yaxis("商家A", X)
        .add_yaxis("商家B", Y)
        .set_global_opts(
            title_opts=opts.TitleOpts(title=title, title_textstyle_opts=opts.TextStyleOpts(color=tcolor)),
            visualmap_opts=opts.VisualMapOpts(type_="size", max_=150, min_=20),  # 左下角颜色区域
            xaxis_opts=opts.AxisOpts(axislabel_opts=opts.LabelOpts(color=xcolor)),  # 设置 x 轴标签颜色
            yaxis_opts=opts.AxisOpts(axislabel_opts=opts.LabelOpts(color=ycolor)),
            legend_opts=opts.LegendOpts(
                textstyle_opts=opts.TextStyleOpts(color=legendtextcolor))
        )
    )
    c.width = '100%'
    c.height = '100%'
    html = c.render_embed()

    return html

# 表格
def get_table(headers=None, rows=None,title=None, tcolor=None, xcolor=None, ycolor=None, legendtext=None,
                legendtextcolor=None):
    from pyecharts.components import Table
    from pyecharts.options import ComponentTitleOpts

    if not headers and not rows:
        headers = ["City name", "Area", "Population", "Annual Rainfall"]
        rows = [
            ["Brisbane", 5905, 1857594, 1146.4],
            ["Adelaide", 1295, 1158259, 600.5],
            ["Darwin", 112, 120900, 1714.7],
            ["Hobart", 1357, 205556, 619.5],
            ["Sydney", 2058, 4336374, 1214.8],
            ["Melbourne", 1566, 3806092, 646.9],
            ["Perth", 5386, 1554769, 869.4],
        ]
    else:
        headers = headers
        rows = rows
    if not title:
        title = '表格'
    else:
        title = title


    table = Table()
    headers = headers
    rows = rows
    table.add(headers, rows)
    table.set_global_opts(
        title_opts=ComponentTitleOpts(title=title, subtitle="我是副标题支持换行哦")
    )
    table.width = '100%'
    table.height = '100%'
    html = table.render_embed()
    return html

# 词云图
def get_wordcloud(data=None, title=None, tcolor=None):
    from pyecharts.charts import WordCloud
    if not data:
        # 数据示例
        data = [
            ("其他行政事业收费", "11"),
            ("经营性收费", "11"),
            ("食品安全与卫生", "11"),
            ("体育活动", "11"),
            ("有线电视安装及调试维护", "11"),
            ("低保管理", "11"),
            ("劳动争议", "11"),
            ("社会福利及事务", "11"),
            ("一次供水问题", "11"),
        ]
    else:
        data = data

    if not title:
        # 标题
        title = "词云"
    else:
        title = title

    if not tcolor:
        # 标题颜色
        tcolor = "#fff"
    else:
        tcolor = tcolor

    WordCloud = (
        WordCloud().add(series_name="热点分析", data_pair=data, word_size_range=[6, 66])
        # 自定义字体
        # WordCloud().add(series_name="热点分析", data_pair=data, word_size_range=[6, 66],
        #                 textstyle_opts=opts.TextStyleOpts(font_family="cursive"))

        .set_global_opts(
            title_opts=opts.TitleOpts(
                title=title, title_textstyle_opts=opts.TextStyleOpts(font_size=23, color=tcolor)
            ),
            tooltip_opts=opts.TooltipOpts(is_show=True), )
    )
    WordCloud.width = '100%'
    WordCloud.height = '100%'
    WordCloud__html = WordCloud.render_embed()
    return WordCloud__html

# 仪表盘
def get_gauge(X=None, Y=None, title=None, tcolor=None, legendtext=None):
    from pyecharts.charts import Gauge

    if not X and not Y:
        X = "100km"
        Y = 35
    else:
        X = X
        Y = Y

    if not legendtext:
        # 图例的字
        legendtext = "平均里程数"
    else:
        legendtext = legendtext

    if not tcolor:
        # 标题颜色
        tcolor = "#fff"
    else:
        tcolor = tcolor

    if not title:
        title = '仪表图'
    else:
        title = title
    gauge = (
        Gauge()
        .add(series_name=legendtext, data_pair=[[X, Y]])
        .set_global_opts(
            legend_opts=opts.LegendOpts(is_show=False),
            tooltip_opts=opts.TooltipOpts(is_show=True, formatter="{a} <br/>{b} : {c}%"),
            title_opts=opts.TitleOpts(title=title, title_textstyle_opts=opts.TextStyleOpts(color=tcolor)),

        )
    )
    gauge.width = '100%'
    gauge.height = '100%'
    gauge_html = gauge.render_embed()
    return gauge_html

# 省份或者城市地图
def get_citymap(data=None):
    CurrentConfig.ONLINE_HOST = "static/official/"
    from pyecharts.charts import Map
    from pyecharts.faker import Faker
    # https://assets.pyecharts.org/assets/v5/maps/guangdong.js 从这个网址获取各个省份的js
    if not data:
        data = [list(z) for z in zip(Faker.guangdong_city, Faker.values())]
    else:
        data = data
    city = (
        Map()
        .add("地图", data, "江苏")
        .set_global_opts(
            title_opts=opts.TitleOpts(title="Map-广东地图", is_show=False), visualmap_opts=opts.VisualMapOpts()
        )
    )
    city.width = '100%'
    city.height = '100%'

    city_html = city.render_embed()
    return city_html

# 中国地图
def get_map(data=None, title=None, tcolor=None, legendtext=None, legendtextcolor=None):
    CurrentConfig.ONLINE_HOST = "static/official/"
    from pyecharts.charts import Map
    if not data:
        data = [('山西省', 123)]
    else:
        data = data
    if not title:
        title = '地图'
    else:
        title = title
    if not tcolor:
        tcolor = "#000000"
    else:
        tcolor = tcolor

    if not legendtext:
        legendtext = ""
    else:
        legendtext = legendtext

    if not legendtextcolor:
        legendtextcolor = "#000000"
    else:
        legendtextcolor = legendtextcolor

    c = (
        Map()
        .add(legendtext, data, "china")
        .set_series_opts(label_opts=opts.LabelOpts(is_show=False))
        .set_global_opts(title_opts=opts.TitleOpts(title=title, title_textstyle_opts=opts.TextStyleOpts(color=tcolor)),
                         legend_opts=opts.LegendOpts(
                             textstyle_opts=opts.TextStyleOpts(color=legendtextcolor)  # 设置图例字体颜色为白色
                         ),
                         visualmap_opts=opts.VisualMapOpts(max_=10000),
                         )
    )
    c.width = '100%'
    c.height = '100%'
    map_html = c.render_embed()
    return map_html
