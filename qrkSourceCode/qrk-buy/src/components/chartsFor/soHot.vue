<template>
	<div id="sohots">
		<div id="hotCharts">
		
		</div>
	</div>
</template>

<script>
	export default {
		name: "soHot",
		mounted(){
			var doms=document.getElementById("hotCharts")
			var myCharts = this.echarts.init(doms)
			myCharts.setOption({
				title:{
					text:"搜索热度"
				},
				tooltip:{
					// 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
					trigger:"item",
					// 提示框浮层内容格式器，支持字符串模板和回调函数两种形式
					formatter:"{a} <br/>{b}: {c} ({d}%)",
				},
				legend: {
					orient: 'vertical',
					left:'left',
					top: 'bottom',
					data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
				},

				series:[
					// 系列列表。每个系列通过 type 决定自己的图表类型
					{
						name:"访问来源",
						type:"pie",
						selectedMode:"single",
						// 图例选择的模式，控制是否可以通过点击图例改变系列的显示状态。默认开启图例选择，可以设成 false 关闭。
						radius: [0, '33%'],
						label: {
							normal: {
								position: 'inner'
							}
						},
						labelLine: {
							// 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线。
							normal: {
								show: false
							}
						},
						data:[
							{value:335, name:'直达', selected:true},
							{value:679, name:'营销广告'},
							{value:1548, name:'搜索引擎'}
						]
					},
					{
						name: '访问来源',
						type: 'pie',
						radius: ['40%', '55%'],
						label: {
							normal: {
								formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
								backgroundColor: '#eee',
								borderColor: '#aaa',
								borderWidth: 1,
								borderRadius: 4,
								// shadowBlur:3,
								// shadowOffsetX: 2,
								// shadowOffsetY: 2,
								// shadowColor: '#999',
								// padding: [0, 7],
								rich: {
									//rich 富文本
									a: {
										color: '#999',
										lineHeight: 22,
										align: 'center'
									},
									// abg: {
									//     backgroundColor: '#333',
									//     width: '100%',
									//     align: 'right',
									//     height: 22,
									//     borderRadius: [4, 4, 0, 0]
									// },
									hr: {
										borderColor: '#aaa',
										width: '100%',
										borderWidth: 0.5,
										height: 0
									},
									b: {
										fontSize: 16,
										lineHeight: 33
									},
									per: {
										color: 'cyan',
										backgroundColor: '#334455',
										padding: [2, 4],
										borderRadius: 2
									}
								}
							}
						},
						data: [
							{value: 335, name: '直达'},
							{value: 310, name: '邮件营销'},
							{value: 234, name: '联盟广告'},
							{value: 135, name: '视频广告'},
							{value: 1048, name: '百度'},
							{value: 251, name: '谷歌'},
							{value: 147, name: '必应'},
							{value: 102, name: '其他'}
						]
					}
				]
			})
		}
	}
</script>

<style scoped>
	#sohots{
		margin:0 auto;
		width:98%;
		height:594px;
		display: flex;
		justify-content: space-between;
	}
	#hotCharts{
		width: 100%;
		height: 594px;
	}
</style>