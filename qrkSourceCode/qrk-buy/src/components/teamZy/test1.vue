<template>
	<div class='wrap'>
		<!--<paymTop></paymTop>-->
		<paymBot></paymBot>
	</div>
</template>
<script>
	import paymTop from './paymTop'
	import paymBot from './paymBot'
	export default {
		name:'test1',
		components:{
			paymTop,
			paymBot,
		},
		methods:{
			bbb(data){
				console.log(data)
			}
		}
	}
</script>
<style scoped>
	.wrap{
		height:100%;
		display: -webkit-flex;
		flex-direction:column;
	}
</style>
