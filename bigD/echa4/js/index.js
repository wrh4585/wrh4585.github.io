//左上方柱状图
function zhuA(){
    var myChart = echarts.init(document.getElementById('leftTop'));
    // 指定图表的配置项和数据
    var option = {
        legend: {
            x:"center",
            y:"bottom",
            itemWidth:8,
            itemHeight:8,
            itemBorderRadius:"50%",
            itemGap: 15,
            textStyle:{
                color:'#fff',
                fontSize:10
            }
        },

        tooltip: {},
        dataset: {
            dimensions: ['product', '负责帮扶', '以帮扶', '提出需要帮扶'],
            source: [
                { product: '1户', '负责帮扶': 460, '以帮扶': 1400, '提出需要帮扶':940},
                { product: '2户', '负责帮扶': 1750, '以帮扶': 1050, '提出需要帮扶': 1410 },
                { product: '3户', '负责帮扶': 1100, '以帮扶': 1900, '提出需要帮扶': 470 },
                { product: '4户', '负责帮扶': 900, '以帮扶': 1400, '提出需要帮扶': 1000 },
                { product: '5户以上', '负责帮扶': 550, '以帮扶':1050, '提出需要帮扶': 1550 }
            ]
        },

        xAxis: { 
            type: 'category',
            axisLabel:{
                show: true,
                // rotate: 40,//倾斜
                 interval: 0, 
                textStyle: {
                    color: '#fff',  //更改坐标轴文字颜色
                    fontSize: 12,    //更改坐标轴文字大小       
                }
            }
        },

        yAxis: {

            max:2000,
            min:0,
            splitNumber:5,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',  //更改坐标轴文字颜色
                    fontSize: 9      //更改坐标轴文字大小
                }
            },
            splitLine:{
                lineStyle:{
                    color:"#212237"
                }
            }
        },
        series: [
            { 
                type: 'bar' ,
                barGap: 0,/*多个并排柱子设置柱子之间的间距*/
                barWidth:8,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var colorList = ['rgb(255,83,44)'];
                            return colorList[params.dataIndex];
                        }
                    },
                }
            },

            { 
                type: 'bar',
                barWidth:8,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var colorList = [ 'rgb(7,201,226)'];
                            return colorList[params.dataIndex];
                        }
                    },
                }
             },


            {
                type: 'bar',
                barWidth: 8,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var colorList = ['rgb(13,100,255)'];
                            return colorList[params.dataIndex];
                        }
                    },
                }
                 }
        ],

        grid:{
            top:20,
            x:30,
            y:30
        },
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}



//左侧中间饼图
function bingA(){
    var myChart = echarts.init(document.getElementById('leftCenter'));
    var option = {
        legend: {
            orient: 'horizontal',
            x: "center",
             y: "bottom",
             itemWidth:8,
             itemHeight:8,
             textStyle:{
                fontSize:12,
                color:"#fff"
             },
            itemGap:9,
            data: ['金融扶贫', '产业扶贫', '易地搬迁', '雨露计划']
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '70%'],
                center: ['50%', '43%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: '{d}%' 
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '20',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        position:"inner",
                        show: false
                    }
                },
                data: [
                    { value:60, name: '金融扶贫' },
                    { value:20, name: '产业扶贫' },
                    { value:15, name: '易地搬迁' },
                    { value:5, name: '雨露计划' }
                ]
            }
        ],
        color: ["#016afe", "#00c9d6", "#96effd","#5485f0"]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}


//左下方饼图
function bingB() {
    var myChart = echarts.init(document.getElementById('leftBottom'));
    var option = {
        legend: {
            orient: 'horizontal',
            x: "center",
            y: "bottom",
            itemWidth: 8,
            itemHeight: 8,
            textStyle: {
                fontSize: 12,
                color: "#fff"
            },
            itemGap: 9,
            data: ['中国石油', '格力电器', '移动', '腾讯']
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                center: ['50%', '43%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: '{d}%'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '20',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        position: "inner",
                        show: false
                    }
                },
                data: [
                    { value:30, name: '中国石油' },
                    { value: 20, name: '格力电器' },
                    { value:20, name: '移动' },
                    { value: 30, name: '腾讯' }
                ]
            }
        ],
        color: ["#016afe", "#00c9d6", "#96effd", "#5485f0"]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}


//右上角
function zheA(){
    var myChart = echarts.init(document.getElementById('rightTop'));
    var option={
        legend: {
            // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） ¦ 'vertical'（垂直）
            orient: 'horizontal',
            // x 设置水平安放位置，默认全图居中，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
            x: 'center',
            // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
            y: 'bottom',
            data: ['脱贫户数', '新增脱困户数'],
            textStyle: {
                color: '#fff',
                fontSize: 10
            }
        },
        //  图表距边框的距离,可选值：'百分比'¦ {number}（单位px）
        grid: {
            top: '16%',   // 等价于 y: '16%'
            left: '3%',
            right: '8%',
            bottom: '18%',
            containLabel: true
        },
        // 提示框
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            data: ['02', '03', '04', '05', '06', '07', '08'],
            axisLabel: {
                show: true,
                // rotate: 40,//倾斜
                interval: 0,
                textStyle: {
                    color: '#fff',  //更改坐标轴文字颜色
                    fontSize: 12,    //更改坐标轴文字大小       
                }
            }
        },
        yAxis: {
            type: 'value',
            min:0,
            max:2000,
            axisLabel: {
                show:true,
                // rotate: 40,//倾斜
                interval: 0,
                textStyle: {
                    color: '#fff',  //更改坐标轴文字颜色
                    fontSize: 10,    //更改坐标轴文字大小       
                }
            },
            //分割线
            splitLine: {
                lineStyle: {
                    // 设置y轴颜色
                    color: '#2a404b'
                }
            },

        },
        series: [
            {
            name:"脱贫户数",
            data: [1300, 1000, 800, 1200, 1000, 960, 1100],
            type: 'line',
            smooth: .5,
            symbol:"none",
                areaStyle: {
                    normal: {
                        //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(80,141,255,0.39)'
                        }, {
                            offset: .34,
                            color: 'rgba(56,155,255,0.25)'
                        }, {
                            offset: 1,
                            color: 'rgba(38,197,254,0.00)'
                        }])

                    }
                },
        },
        {
            name: "新增脱困户数",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: .5,
            symbol: "none",
            areaStyle: {
                normal: {
                    //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(80,141,255,0.39)'
                    }, {
                        offset: .34,
                        color: 'rgba(56,155,255,0.25)'
                    }, {
                        offset: 1,
                        color: 'rgba(38,197,254,0.00)'
                    }])

                }
            },
        }
    ],
        color: ["#47d4dc","#256cb9"]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}


//右边中间
function zhuB(){
    var myChart = echarts.init(document.getElementById('rightCenter'));
    var option={
            legend: {
                x: "center",
                y: "bottom",
                itemWidth: 8,
                itemHeight: 8,
                itemBorderRadius: "50%",
                itemGap: 15,
                textStyle: {
                    color: '#fff',
                    fontSize: 10
                }
            },

            tooltip: {},
            dataset: {
                dimensions: ['product', '家庭人口数'],
                source: [
                    { product: '100以下', '家庭人口数': 1400 },
                    { product: '100-500',  '家庭人口数': 1050 },
                    { product: '500-1000',  '家庭人口数': 1900 },
                    { product: '1000-5000',  '家庭人口数': 1400},
                    { product: '5000以上',  '家庭人口数': 1050 }
                ]
            },

            xAxis: {
                type: 'category',
                axisLabel: {
                    show: true,
                    // rotate: 40,//倾斜
                    interval: 0,
                    textStyle: {
                        color: '#fff',  //更改坐标轴文字颜色
                        fontSize: 8,    //更改坐标轴文字大小       
                    }
                }
            },

            yAxis: {

                max: 2000,
                min: 0,
                splitNumber: 5,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff',  //更改坐标轴文字颜色
                        fontSize: 9      //更改坐标轴文字大小
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "#212237"
                    }
                }
            },
            series: [
                {
                    type: 'bar',
                    barGap: 0,/*多个并排柱子设置柱子之间的间距*/
                    barWidth: 8,
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                var colorList = ['rgb(4,105,246)'];
                                return colorList[params.dataIndex];
                            }
                        },
                    }
                }

            ],

            grid: {
                top: 20,
                x: 30,
                y: 30
            },
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }


//右下角
function bingC() {
    var myChart = echarts.init(document.getElementById('rightBottom'));
    var option = {
        legend: {
            orient: 'horizontal',
            x: "center",
            y: "bottom",
            itemWidth: 8,
            itemHeight: 8,
            textStyle: {
                fontSize: 12,
                color: "#fff"
            },
            itemGap: 9,
            data: ['项目计划', '项目完成', '项目进程']
        },
        series: [
            {
                type: 'pie',
                radius: ['50%', '70%'],
                center: ['50%', '43%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: '{d}%'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '20',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        position: "inner",
                        show: false
                    }
                },
                data: [
                    { value: 65, name: '项目计划' },
                    { value: 20, name: '项目完成' },
                    { value: 15, name: '项目进程' },
                ]
            }
        ],
        color: ["#016afe", "#00c9d6", "#96effd"]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}


function mapA(){
    let myChart = echarts.init(document.getElementById('contentCenterA'));
    let data = [
        { name: '北京', value: 57 },
        { name: '张家口', value: 47 },
        { name: '上海', value: 3 },
        { name: '上海', value: 3 },
        { name: '佛山', value: 22 },
        { name: '嘉兴', value: 6 },
        { name: '黔西南州', value: 17 },
        { name: '湖州', value: 34 },
        { name: '苏州', value: 33 },
        { name: '无锡', value: 5 },
        { name: '南京', value: 5 },
        { name: '太原', value: 55 },
        { name: '晋中', value: 23 },
        { name: '西安', value: 4 },
        { name: '长沙', value: 49 },
        { name: '株洲', value: 17 },
        { name: '武汉', value: 57 },
        { name: '荆州', value: 10 },
        { name: '黄石', value: 21 },
        { name: '合肥', value: 54 },
        { name: '九华山', value: 5 },
        { name: '泉州', value: 45 },
        { name: '福州', value: 9 },
        { name: '九江', value: 3 },
        { name: '仙桃', value: 63 },
        { name: '天门', value: 10 },
        { name: '东戴河', value: 28 },
        { name: '广州', value: 29 }

    ];
    let geoCoordMap = {
        '北京': [116.4, 39.9],
        '张家口': [114.9, 40.8],
        '上海': [121.5, 31.2],
        '佛山': [113.1, 23],
        '惠州': [114.4, 23.1],
        '嘉兴': [120.8, 30.7],
        '黔西南州': [104.9, 25.1],
        '湖州': [120.1, 30.9],
        '苏州': [120.6, 31.3],
        '无锡': [120.3, 31.5],
        '南京': [118.8, 32.1],
        '太原': [112.5, 37.9],
        '晋中': [112.7, 37.7],
        '西安': [108.9, 34.3],
        '长沙': [112.9, 28.2],
        '株洲': [113.2, 27.8],
        '武汉': [114.3, 30.6],
        '荆州': [112.2, 30.3],
        '黄石': [115, 30.2],
        '合肥': [117.2, 31.8],
        '九华山': [117.8, 30.5],
        '泉州': [118.7, 24.9],
        '福州': [119.3, 26.1],
        '南昌': [115.9, 28.7],
        '九江': [116, 29.7],
        '仙桃': [113.4, 30.4],
        '天门': [113.2, 30.7],
        '东戴河': [119.9, 40],
        '广州': [113.3, 23.1],

        '大庆': [125.03, 46.58]
    };
    let convertData = function (data) {
        let res = [];
        for (let i = 0; i < data.length; i++) {
            let geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    }; 
    let left = false, top = false, priority = 'top'
    // 自定义tooltip配置属性
    let config = {
        ecBoxId: 'chart-panel',
        lineColor: '#fff',
        L1: {
            time: 0.3,
            long: 40
        },
        L2: {
            time: 0.3,
            long: 40
        },
        text: {
            time: 0.5,
            text: '',
            font: '14px Arial',
            color: '#fff',
            padding: [10, 10],
            width: 120,
            height: 60,
            lineHeight: 24,
            backgroundColor: 'rgba(50, 50, 50, 0.8)'
        }
    }
    var option = {
        backgroundColor: 'rgba(8, 9, 27, 1)',
        tooltip: {
            trigger: 'item',
            triggerOn: 'click',
            backgroundColor: 'transparent',
            alwaysShowContent: true,
            position(pos) {
                let position = getPosOrSize('pos', pos)
                return position
            },
            formatter(params, p, a) {
                canvasAnimation(params)
                let size = getPosOrSize('size')
                let tooltipDom = `<canvas id="tCanvas" width="${size.width}" height="${size.height}">123</canvas>`
                return tooltipDom
            }
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: false,
            itemStyle: {
                normal: {
                    borderColor: 'rgba(147, 235, 248, 1)',
                    borderWidth: 1,
                    areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(128, 217, 248, 1)',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
        series: [
            {
                name: 'Tooltip Test',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(data.sort(function (a, b) {
                    return b.value - a.value;
                }).slice(0, 50)),
                symbolSize: function (val) {
                    return val[2] / 5;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#f4e925',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                zlevel: 1,
            }
        ]
    };
    const canvasAnimation = params => {
        setTimeout(function () {
            config.text.text = `地点：${params.name}\n数量：${params.value[2]}`
            new myTooltip('tCanvas', config)
        }, 0);
    }
    // 计算tooltip位置
    const getPosOrSize = (type, point) => {
        let x1 = config.L1.long * Math.sin(Math.PI / 4)
        let width = x1 + config.L2.long + config.text.width,
            height = x1 + config.text.height / 2
        if (type === 'size') {
            config.width = width
            config.height = height
            return {
                width,
                height
            }
        } else {
            let box = document.getElementById(config.ecBoxId),
                bw = box.offsetWidth,
                bh = box.offsetHeight,
                x = point[0],
                y = point[1]
            left = false
            if (x + width >= bw / 1.2) {
                x = x - width - 5
                left = true
            }
            if (priority === 'top') {
                // L1向上
                top = true
                y = y - height - 5
                if (y <= 0) {
                    y = point[1]
                    top = false
                }
                return [x, y]
            } else {
                top = false
                if (y + height >= bh) {
                    y = y - height - 5
                    top = true
                }
                return [x, y]
            }
        }
    }
    class myTooltip {
        constructor(id, config) {
            this.config = config
            this.totalTime = 0
            this.stage = new createjs.Stage(id)
            this.timeline = new TimelineMax({ repeat: 0 })
            this.g = new createjs.Graphics()
            this.lineShape = new createjs.Shape(this.g)
            this.textShape = new createjs.Shape()
            this.stage.addChild(this.lineShape, this.textShape)
            this.init()
            this.begin()
            this.update()
        }
        init() {
            this.start = [0, 0]
            if (left) {
                this.start[0] = this.config.width
            }
            if (top) {
                this.start[1] = this.config.height
            }
        }
        begin() {
            this.L1()
            this.L2()
            this.addText()
        }
        L1() {
            let me = this
            let c = me.config
            let tl = new TimelineMax()
            let scale = { s: 0 },
                x = c.L1.long * Math.sin(Math.PI / 4)
            if (left) {
                if (top) {
                    this.L1End = [me.start[0] - x, me.start[1] - x]
                } else {
                    this.L1End = [me.start[0] - x, me.start[1] + x]
                }
            } else {
                if (top) {
                    this.L1End = [x, me.start[1] - x]
                } else {
                    this.L1End = [x, x]
                }
            }

            tl.to(scale, c.L1.time, {
                s: 1,
                onUpdate() {
                    let s = scale.s
                    if (left) {
                        if (top) {
                            me.g.c().s(c.lineColor).mt(...me.start).lt(me.start[0] - x * s, me.start[1] - x * s)
                        } else {
                            me.g.c().s(c.lineColor).mt(...me.start).lt(me.start[0] - x * s, me.start[1] + x * s)
                        }
                    } else {
                        if (top) {
                            me.g.c().s(c.lineColor).mt(...me.start).lt(x * s, me.start[1] - x * s)
                        } else {
                            me.g.c().s(c.lineColor).mt(...me.start).lt(x * s, x * s)
                        }
                    }
                    me.update()
                }
            })
            this.timeline.add(tl, this.totalTime)
            this.totalTime += c.L1.time
        }
        L2() {
            // 只跟左右有关，只判断left
            let me = this
            let c = me.config
            let tl = new TimelineMax()
            let scale = { s: 0 }
            tl.to(scale, c.L2.time, {
                s: 1,
                onUpdate() {
                    let s = scale.s
                    if (left) {
                        me.g.c().s(c.lineColor).mt(...me.start).lt(...me.L1End).lt(me.L1End[0] - c.L2.long * s, me.L1End[1])
                    } else {
                        me.g.c().s(c.lineColor).mt(...me.start).lt(...me.L1End).lt(me.L1End[0] + c.L2.long * s, me.L1End[1])
                    }
                    me.update()
                }
            })
            this.timeline.add(tl, this.totalTime)
            this.totalTime += c.L2.time
        }
        addText() {
            // text框只与L2end有关，只需判断left即可，top不影响
            let me = this
            let c = me.config
            let tl = new TimelineMax()
            let scale = { s: 0 },
                L2End = [me.L1End[0] + c.L2.long, me.L1End[1]]
            if (left) {
                L2End = [me.L1End[0] - c.L2.long, me.L1End[1]]
            }
            tl.to(scale, c.text.time, {
                s: 1,
                onStart() {
                    let x = 0, y = 0
                    if (left) {
                        x = L2End[0] - c.text.width
                    } else {
                        x = L2End[0]
                    }
                    me.g.c().s(c.lineColor).mt(...me.start).lt(...me.L1End).lt(...L2End)
                    me.text = new createjs.Text(c.text.text, c.text.font, c.text.color)
                    me.text.alpha = 0
                    me.text.lineHeight = c.text.lineHeight
                    me.text.x = x + c.text.padding[0]
                    me.text.y = L2End[1] - c.text.height / 2 + c.text.padding[1]
                    me.stage.addChild(me.text)
                    me.textShape.graphics.c().f(c.text.backgroundColor).rr(x, L2End[1] - c.text.height / 2, c.text.width, c.text.height, 5)
                    me.textShape.alpha = 0
                    me.update()
                },
                onUpdate() {
                    if (typeof me.text === 'string') return
                    me.text.alpha = scale.s
                    me.textShape.alpha = scale.s
                    me.update()
                }
            })
            this.timeline.add(tl, this.totalTime)
        }
        update() {
            this.stage.update()
        }
    }
    var index = 0
    setInterval(_ => {
        EC.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: index
        })
        index++
        if (index >= data.length) {
            index = 0
        }
    }, 3000)
    window.addEventListener('resize', e => {
        let tCanvas = document.getElementById('tCanvas')
        if (tCanvas) {
            tCanvas.style.display = 'none'
        }
    });
    myChart.setOption(option);
}