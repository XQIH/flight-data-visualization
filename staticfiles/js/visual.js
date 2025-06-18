var myPieChart = echarts.init(document.getElementById('echarts-container-pie'));
// 饼图配置
var pieOption = {
    title: {
        text: '',
        subtext: '城市销量表',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left'
    },
    series: [
        {
            name: '每个城市所有品牌',
            type: 'pie',
            radius: '80%',
            data: [
                {value: city[0].salescarnum, name: city[0].city},
                {value: city[1].salescarnum, name: city[1].city},
                {value: city[2].salescarnum, name: city[2].city},
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

// 设置图表的配置项并渲染
myPieChart.setOption(pieOption);

var myBarChart = echarts.init(document.getElementById('echarts-container-bar'));
// 饼图配置

var barOption = {
    xAxis: {
        type: 'category',
        data: [city[0].city, city[1].city, city[2].city]
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: [city[0].salescarnum, city[1].salescarnum, city[2].salescarnum],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
            }
        }
    ]
};
// 设置图表的配置项并渲染
myBarChart.setOption(barOption);

function initializeChart() {
    // 初始化图表
    var myChart = echarts.init(document.getElementById('myChart1'));

    // 插入你的 JavaScript 代码
    $.getJSON(ROOT_PATH + '/data-gl/asset/data/population.json', function (data) {
      data = data
        .filter(function (dataItem) {
          return dataItem[2] > 0;
        })
        .map(function (dataItem) {
          return [dataItem[0], dataItem[1], Math.sqrt(dataItem[2])];
        });

      myChart.setOption({
        // ... 省略了一部分配置
        globe: {
          // ... 省略了一部分配置
          light: {
            // ... 省略了一部分配置
          },
          viewControl: {
            // ... 省略了一部分配置
          }
        },
        series: {
          type: 'scatter3D',
          coordinateSystem: 'globe',
          blendMode: 'lighter',
          symbolSize: 2,
          itemStyle: {
            color: 'rgb(50, 50, 150)',
            opacity: 1
          },
          data: data
        }
      });
    });
  }
