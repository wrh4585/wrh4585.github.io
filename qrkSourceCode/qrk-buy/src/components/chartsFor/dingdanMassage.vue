<template>
	<div id="dingdan">
		<div id="diandanMsg">
		
		</div>
	</div>
</template>

<script>
	export default {
		name: "dingdanMassage",
		mounted(){
			var doms=document.getElementById("diandanMsg")
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
#dingdan{
	margin:0 auto;
	width:98%;
	height:594px;
	display: flex;
	justify-content: space-between;
}
#diandanMsg{
	width: 100%;
	height: 594px;
}
</style>