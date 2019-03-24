<template>
  <!-- 数据展示 -->
  <div class="echarsShow">
    <div id="charsLeft">

    </div>
    <div id="charsRight">

    </div>
  </div>
</template>

<script>
    export default {
        name: "censusEchars",
      mounted(){
        var dom=document.getElementById("charsLeft")
        var myChart = this.echarts.init(dom)
        myChart.setOption({
          title: {
            text: '交易统计',
            top:10,
            left:'center'
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}"
          },
          toolbox: {
            show : true,
            top:10,
            right:10,
            feature : {
              mark : {show: true},
              magicType : {show: true, type: ['line', 'bar']},
              restore : {show: true},
              saveAsImage : {show: true}
            }
          },
          grid:{
            top:80,
            right:70,
            bottom:50,
            left:60
          },
          legend: {
            left:'center',
            top:'bottom',
            data:['订单','金额']
          },
          calculable : true,
          xAxis : [
            {
              type : 'category',
              data : ['1','3','5','7','9','11','13','15','17','19']
            }
          ],
          yAxis : [
            {
              type: 'value',
              name:"定\n单",
              nameLocation:"center",
              nameGap:35,
              nameRotate:0,
              nameTextStyle:{
                fontSize: 16,
              },
              //默认以千分位显示，不想用的可以在这加一段
              axisLabel : {   //调整左侧Y轴刻度， 直接按对应数据显示
                show:true,
                showMinLabel:true,
                showMaxLabel:true,
                formatter: function (value) {
                  return value;
                }
              }
            },
            {
              type: 'value',
              name:"金\n额",
              nameLocation:"center",
              nameGap:50,
              nameRotate:0,
              nameTextStyle:{
                fontSize: 16,
              },
              //默认以千分位显示，不想用的可以在这加一段
              axisLabel : {   //调整左侧Y轴刻度， 直接按对应数据显示
                show:true,
                showMinLabel:true,
                showMaxLabel:true,
                formatter: function (value) {
                  return value;
                }
              }
            }
          ],
          series : [
            {
              name:'订单',
              type:'bar',
              yAxisIndex: 0,
              data:[10,50,100,70,150,170,200,100,120],
              markPoint : {
                data : [
                  {type : 'max', name: '最大值'},
                  {type : 'min', name: '最小值'}
                ]
              }
            },
            {
              name:'金额',
              type:'bar',
              yAxisIndex: 1,
              data:[1700,4500,3680,7000,6500,3200,5060,1900,542],
              markPoint : {
                data : [
                  {type : 'max', name: '最大值'},
                  {type : 'min', name: '最小值'}
                ]
              }
            },
          ]
        })

        var doms=document.getElementById("charsRight")
        var myCharts = this.echarts.init(doms)
        myCharts.setOption({
          title: {
            text: '订单来源分部',
            x: 'center',
            y: 20,
            itemGap: 20,
            textStyle: {
              fontSize:20,
              fontWeight: 'bolder',
              color: '#000080'
            },
          },
          legend: {
            orient: 'horizontal',
            x: 'center',
            y: 'bottom',
            itemWidth: 17,
            itemHeight: 10,
            textStyle: {
              color: '#666'
            },
            itemGap:15,
            data: ['北京','上海','广州','深圳','郑州']
          },
          series: [
            {
              name: '生源地',
              type: 'pie',
              radius: ['30%', '60%'],
              center: ['50%', '50%'],
              data: [
                {value:300, name:'北京'},
                {value:100, name:'上海'},
                {value:50, name:'广州'},
                {value:70, name:'深圳'},
                {value:10, name:'郑州'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(30, 144, 255，0.5)'
                }
              },

              labelLine: {
                normal: {
                  show: false
                }
              },

              label: {
                normal: {
                  position: 'inner',
                  formatter: '{c}'
                }
              }
            }
          ],
        })
     }
    }
</script>

<style scoped>
  /* 大数据展示 */
  .echarsShow{
    margin:0 auto;
    width:98%;
    height:394px;
    display: flex;
    justify-content: space-between;
  }
  #charsLeft{
    width:48%;
    height:394px;
  }

  #charsRight{
    width:49%;
    height:394px;
  }
</style>
