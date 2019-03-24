<template>
	<div class="dealChart">
		<div id="charsForDeal">
		
		</div>
	</div>
</template>

<script>
	export default {
		name: "dealCont",
		mounted(){
			var dom=document.getElementById("charsForDeal")
			var myChart11 = this.echarts.init(dom)
			myChart11.setOption({
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
		}
	}
	
	
</script>

<style scoped>
	.dealChart{
		margin:0 auto;
		width:98%;
		height:594px;
		display: flex;
		justify-content: space-between;
	}
	#charsForDeal{
		width: 100%;
		height: 594px;
	}
</style>