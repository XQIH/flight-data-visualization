// function showSuccessAlertAndRedirect() {
//     Swal.fire({
//         title: '登录成功！',
//         text: '点击确定进入首页！',
//         icon: 'success',
//         confirmButtonText: '确定'
//     }).then((result) => {
//         if (result.isConfirmed) {
//             console.log(ROOTPATH);
//             window.location.href = ROOTPATH; // 进入首页
//         }
//     });
// }
//

function show_bi1(data) {
    let names = data.map(item => item.name);
    // 指定图表的配置项和数据
    var One = echarts.init(document.getElementById('showOne'));
    var option1 = {
        title: {
            text: '城市二手车数量分布图',
            top: "4%",
            left: "20%",
            textStyle: {
                color: "rgba(43, 158, 158, 1)"
            },
        },
        tooltip: {},
        legend: {
            orient: "vertical",
            left: "left",
            top: "20%",
            data: names,
            textStyle: {
                color: "rgba(34, 207, 219, 1)"
            }
        },
        series: [{
            type: "pie",
            data: data,
        }]
    };
    One.setOption(option1);
};
// show_bi1(data1)
// (function () {
//     // 指定图表的配置项和数据
//     var One = echarts.init(document.getElementById('showOne'));
//     var option1 = {
//         title: {
//             text: '城市二手车数量分布图',
//             top: "4%",
//             left: "20%",
//             textStyle: {
//                 color: "rgba(43, 158, 158, 1)"
//             },
//         },
//         tooltip: {},
//         legend: {
//             orient: "vertical",
//             left: "left",
//             top: "20%",
//             data: names,
//             textStyle: {
//                 color: "rgba(34, 207, 219, 1)"
//             }
//         },
//         series: [{
//             type: "pie",
//             data: data1,
//         }]
//     };
//     One.setOption(option1);
//     return {
//         showOne: showOne,
//         option1: option1
//     };
// })();

function show_bi2(data) {
    // 指定图表的配置项和数据
    var Tow = echarts.init(document.getElementById('showTow'));
    var option2 = {
        title: {
            text: '数量按年分布图',
            textStyle: {
                fontSize: 18,
                fontWeight: 'bold',
                color: '#87CEFA'
            },
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            // data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
            data: [data2[0]['caryear'], data2[1]['caryear'], data2[2]['caryear'], data2[3]['caryear'], data2[4]['caryear'], data2[5]['caryear']],
            textStyle: {
                color: '#fff'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            data: [data2[0]['caryear'], data2[1]['caryear'], data2[2]['caryear'], data2[3]['caryear'], data2[4]['caryear'], data2[5]['caryear']],
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: [data2[0]['caryear'], data2[1]['caryear'], data2[2]['caryear'], data2[3]['caryear'], data2[4]['caryear'], data2[5]['caryear']],
                type: 'line',
                stack: 'Total',
                data: [data2[0]['x'], data2[1]['x'], data2[2]['x'], data2[3]['x'], data2[4]['x'], data2[5]['x']]
            },
            // {
            //     name: cityArray[1],
            //     type: 'line',
            //     stack: 'Total',
            //     data: [data2[6]['x'], data2[7]['x'], data2[8]['x'], data2[9]['x'], data2[10]['x'], data2[11]['x']]
            // },
            // {
            //     name: cityArray[2],
            //     type: 'line',
            //     stack: 'Total',
            //     data: [data2[12]['x'], data2[13]['x'], data2[14]['x'], data2[15]['x'], data2[16]['x'], data2[17]['x']]
            // }
        ]
    };
    Tow.setOption(option2);
};
// show_bi2(data2)

function show_bi3(data) {
    // 基于准备好的dom，初始化echarts实例
    var Three = echarts.init(document.getElementById('showThree'));
// 指定图表的配置项和数据
    var option3 = {
        xAxis: {
            type: 'category',
            data: [data3[0]['brandname'], data3[1]['brandname'], data3[2]['brandname'], data3[3]['brandname'], data3[4]['brandname'], data3[5]['brandname'], data3[6]['brandname'], data3[7]['brandname'], data3[8]['brandname'], data3[9]['brandname']]
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [
                    {
                        value: data3[0]['numeric_shprice'],
                        itemStyle: {
                            color: '#545929'
                        }
                    },
                    {
                        value: data3[1]['numeric_shprice'],
                        itemStyle: {
                            color: '#d2a1a1'
                        }
                    },
                    {
                        value: data3[2]['numeric_shprice'],
                        itemStyle: {
                            color: '#418a73'
                        }
                    },
                    {
                        value: data3[3]['numeric_shprice'],
                        itemStyle: {
                            color: '#51d23b'
                        }
                    },
                    {
                        value: data3[4]['numeric_shprice'],
                        itemStyle: {
                            color: '#1fbbff'
                        }
                    },
                    {
                        value: data3[5]['numeric_shprice'],
                        itemStyle: {
                            color: '#17ff25'
                        }
                    },
                    {
                        value: data3[6]['numeric_shprice'],
                        itemStyle: {
                            color: '#dcdbdb'
                        }
                    },
                    {
                        value: data3[7]['numeric_shprice'],
                        itemStyle: {
                            color: '#2cfaf5'
                        }
                    },
                    {
                        value: data3[8]['numeric_shprice'],
                        itemStyle: {
                            color: '#9b29c9'
                        }
                    },
                    {
                        value: data3[9]['numeric_shprice'],
                        itemStyle: {
                            color: '#02f6a3'
                        }
                    },

                ],
                type: 'bar'
            }
        ]
    };

    Three.setOption(option3);
};
// show_bi3(data3)
function show_bi4(data) {

// 基于准备好的dom，初始化echarts实例
    var Four = echarts.init(document.getElementById('showFour'));
// 指定图表的配置项和数据
    var option4 = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 40,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: data4
            }
        ]
    };
// 使用刚指定的配置项和数据显示图表。
    Four.setOption(option4);

};
// show_bi4(data4)

function show_bi5(data) {
    var showFive = echarts.init(document.getElementById('showFive'));
    let citys = data.map(item => item.city)
    var option5 = {
        title: {
            text: '价格趋势图',
            textStyle: {
                fontSize: 18,
                fontWeight: 'bold',
                color: '#87CEFA'
            },
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            // data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
            data: citys
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            data: citys
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '',
                type: 'line',
                stack: 'Total',
                data: [data5[0]['price'], data5[1]['price'], data5[2]['price'], data5[3]['price'], data5[4]['price'], data5[5]['price'], data5[6]['price'], data5[7]['price'], data5[8]['price'], data5[9]['price']]
            }
        ]
    };

    showFive.setOption(option5);

    return {
        showFive: showFive,
        option5: option5
    };
};
// show_bi5(data5)



function show_bi6(data6) {
    var Six = echarts.init(document.getElementById('showSix'));
    let list = data6

    var option6 = {
        backgroundColor: '#dbf1fd',
        title: {
            text: '平均价格分布',
            textStyle: {
                color: '#000',
                fontSize: 25
            },
            top: "10%",
            left: 'center',
// 		right: '5%'
        },
        grid: {
            left: '12%',
            top: '25%',
            bottom: '30%',
            right: '10%',
        },
        xAxis: {
            // name: 'X',
            nameTextStyle: {
                color: '#333333',
                padding: [0, 0, 0, 20],
            },
            show: true,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#7bb4dc',
                    shadowColor: 'rgba(91,100,134,1)',
                    shadowOffsetX: '20',
                },
                symbol: ['none', 'arrow'],
                symbolOffset: [0, 25],
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(255,255,255,0.2)',
                },
            },
            axisLabel: {
                show: true,
                // rotate: -1,
                textStyle: {
                    fontSize: 14,
                    // fontFamily: PangMenZhengDao,
                    fontWeight: 600,
                    color: '#000',
                },
            },
            axisTick: {
                show: false,
            },
// 		data: ['物业纠纷', '其他合同', '道路交通']
            data: list.map(val => {
                return val.name
            })
        },
        yAxis: [{
            nameTextStyle: {
                color: '#333333',
                padding: [0, 0, 0, 20],
            },
            max: 20,
            min: 0,
            splitNumber: (123 % 5).toFixed(0),
            show: true,
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                symbol: ['none', 'arrow'],
                symbolOffset: [0, 15],
                lineStyle: {
                    // color: 'rgba(255, 129, 109, 0.1)',
                    width: 1, //这里是为了突出显示加上的
                    color: '#7bb4dc',
                    shadowColor: 'rgba(91,100,134,1)',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    fontSize: 12,
                    // fontFamily: PangMenZhengDao,
                    fontWeight: 600,
                    color: '#000'
                },
            },
            splitArea: {
                areaStyle: {
                    color: 'rgba(255,255,255,.5)',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#cfe9f9',
                    width: 1,
                    type: 'solid',
                },
            }
        }],
        series: [{
            type: 'pictorialBar',
            barCategoryGap: '-20%',
            /*多个并排柱子设置柱子之间的间距*/
            // symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            symbol: 'path://M0,10 L10,10 C5.5,10 6.5,5 5,5 C3.5,5 4.5,10 0,10 z',
            label: {
                show: true,
                position: 'top',
                distance: 10,
                color: '#000',
                fontWeight: 'bolder',
                fontSize: 12,
            },
            itemStyle: {
                // normal: {
                //   color: {
                //     type: 'linear',
                //     x: 0,
                //     y: 0,
                //     x2: 0,
                //     y2: 1,
                //     colorStops: [
                //       {
                //         offset: 0,
                //         color: '#3b89f4',
                //       },
                //       {
                //         offset: 1,
                //         color: '#cce7fc',
                //       },
                //     ],
                //     global: false, //  缺省为  false
                //   },
                // },
                // emphasis: {
                //   opacity: 1,
                // },
                normal: {
                    color: params => {
                        const colorList = [{
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#297ff2',
                            },
                                {
                                    offset: 1,
                                    color: '#cce7fc',
                                },
                            ]
                        },
                            {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0,
                                    color: '#3bfafe',
                                },
                                    {
                                        offset: 1,
                                        color: '#aaf4fe',
                                    },
                                ]
                            },
                            {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0,
                                    color: '#e08440',
                                },
                                    {
                                        offset: 1,
                                        color: '#decabd',
                                    },
                                ]
                            }
                        ];
                        return colorList[params.dataIndex];
                    },
                    opacity: 0.7
                },
                // 鼠标移入柱子上 透明度变为 1
                emphasis: {
                    opacity: 1,
                },
            },
            data: list.map(v => {
                return v.value
            })
            // data: [123, 60, 25]
        },],
    };


    // 使用刚指定的配置项和数据显示图表。
    Six.setOption(option6);
};
// show_bi1(data1)
// show_bi2(data2)
// show_bi3(data3)
// show_bi4(data4)
// show_bi5(data5)
// show_bi6(data6)


function firstbi(div_id) {
    // 初始化 ECharts 实例
    var Seven = echarts.init(document.getElementById(div_id));
    // 数据
    let category = ['2024-02-03', '2024-02-04', '2024-02-05', '2024-02-06', '2024-02-07', '2024-02-08', '2024-02-09', '2024-02-10', '2024-02-11', '2024-02-12', '2024-02-13', '2024-02-14', '2024-02-15', '2024-02-16', '2024-02-17', '2024-02-18', '2024-02-19', '2024-02-20', '2024-02-21', '2024-02-22'];
    // let category = ['2024-01-15', '2024-01-16', '2024-01-17', '2024-01-18', '2024-01-19', '2024-01-20', '2024-01-21', '2024-01-22', '2024-01-23', '2024-01-24', '2024-01-25', '2024-01-26', '2024-01-27', '2024-01-28', '2024-01-29', '2024-01-30', '2024-01-31', '2024-02-01', '2024-02-02', '2024-02-03'];
    let dottedBase = +new Date();
    let lineData = [];
    let barData = [];
    for (let i = 0; i < 20; i++) {
        // let date = new Date((dottedBase += 3600 * 24 * 1000));
        // category.push(
        //     [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-')
        // );
        let b = Math.random() * 200;
        let d = Math.random() * 200;
        barData.push(b);
        lineData.push(d + b);
    }
    // 配置项
    var option = {
        backgroundColor: '#0f375f',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['line', 'bar'],
            textStyle: {
                color: '#ccc'
            }
        },
        xAxis: {
            data: category,
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            }
        },
        yAxis: {
            splitLine: {show: false},
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            }
        },
        series: [
            {
                name: '成交量',
                type: 'line',
                smooth: true,
                showAllSymbol: true,
                symbol: 'emptyCircle',
                symbolSize: 15,
                data: lineData
            },
            {
                name: '订单量',
                type: 'bar',
                barWidth: 10,
                itemStyle: {
                    borderRadius: 5,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {offset: 0, color: '#14c8d4'},
                        {offset: 1, color: '#43eec6'}
                    ])
                },
                data: barData
            },
            // {
            //     name: 'line',
            //     type: 'bar',
            //     barGap: '-100%',
            //     barWidth: 10,
            //     itemStyle: {
            //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //             {offset: 0, color: 'rgba(20,200,212,0.5)'},
            //             {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
            //             {offset: 1, color: 'rgba(20,200,212,0)'}
            //         ])
            //     },
            //     z: -12,
            //     data: lineData
            // },
            // {
            //     name: 'dotted',
            //     type: 'pictorialBar',
            //     symbol: 'rect',
            //     itemStyle: {
            //         color: '#0f375f'
            //     },
            //     symbolRepeat: true,
            //     symbolSize: [12, 4],
            //     symbolMargin: 1,
            //     z: -10,
            //     data: lineData
            // }
        ]
    };
    console.log('barData', barData, 'lineData', lineData, 'category', category, 'dottedBase', dottedBase)
    // 使用配置项和数据显示图表
    Seven.setOption(option);
    return {
        Seven: Seven,
        option7: option
    };
};

function firstbi2(div_id) {
    // 初始化 ECharts 实例
    var Seven = echarts.init(document.getElementById(div_id));
    // 数据
    // let category = ['2024-02-03', '2024-02-04', '2024-02-05', '2024-02-06', '2024-02-07', '2024-02-08', '2024-02-09', '2024-02-10', '2024-02-11', '2024-02-12', '2024-02-13', '2024-02-14', '2024-02-15', '2024-02-16', '2024-02-17', '2024-02-18', '2024-02-19', '2024-02-20', '2024-02-21', '2024-02-22'];
    let category = ['2024-01-15', '2024-01-16', '2024-01-17', '2024-01-18', '2024-01-19', '2024-01-20', '2024-01-21', '2024-01-22', '2024-01-23', '2024-01-24', '2024-01-25', '2024-01-26', '2024-01-27', '2024-01-28', '2024-01-29', '2024-01-30', '2024-01-31', '2024-02-01', '2024-02-02', '2024-02-03'];
    let dottedBase = +new Date();
    let lineData = [];
    let barData = [];
    for (let i = 0; i < 20; i++) {
        // let date = new Date((dottedBase += 3600 * 24 * 1000));
        // category.push(
        //     [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-')
        // );
        let b = Math.random() * 200;
        let d = Math.random() * 200;
        barData.push(b);
        lineData.push(d + b);
    }
    // 配置项
    var option = {
        backgroundColor: '#0f375f',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['line', 'bar'],
            textStyle: {
                color: '#ccc'
            }
        },
        xAxis: {
            data: category,
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            }
        },
        yAxis: {
            splitLine: {show: false},
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            }
        },
        series: [
            {
                name: '成交量',
                type: 'line',
                smooth: true,
                showAllSymbol: true,
                symbol: 'emptyCircle',
                symbolSize: 15,
                data: lineData
            },
            {
                name: '订单量',
                type: 'bar',
                barWidth: 10,
                itemStyle: {
                    borderRadius: 5,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {offset: 0, color: '#14c8d4'},
                        {offset: 1, color: '#43eec6'}
                    ])
                },
                data: barData
            },
            // {
            //     name: '折线图数据',
            //     type: 'bar',
            //     barGap: '-100%',
            //     barWidth: 10,
            //     itemStyle: {
            //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //             {offset: 0, color: 'rgba(20,200,212,0.5)'},
            //             {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
            //             {offset: 1, color: 'rgba(20,200,212,0)'}
            //         ])
            //     },
            //     z: -12,
            //     data: lineData
            // },
            // {
            //     name: '柱状图数据',
            //     type: 'pictorialBar',
            //     symbol: 'rect',
            //     itemStyle: {
            //         color: '#0f375f'
            //     },
            //     symbolRepeat: true,
            //     symbolSize: [12, 4],
            //     symbolMargin: 1,
            //     z: -10,
            //     data: barData
            // }
        ]
    };
    console.log('barData', barData, 'lineData', lineData, 'category', category, 'dottedBase', dottedBase)
    // 使用配置项和数据显示图表
    Seven.setOption(option);
    return {
        Seven: Seven,
        option7: option
    };
};

