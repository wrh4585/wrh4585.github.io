<template>
	<div id="elA">
		<el-row class="tac">
			<el-col :span="24">
				<h5 class="colorChoose">
					<i class="fa fa-hand-o-down"></i>
					<span>选择页面主题</span>
				</h5>
				<h5 class="colorModule">
					<span class="cm01"></span>
					<span class="cm02"></span>
					<span class="cm03"></span>
					<span class="cm04"></span>
					<span class="cm05"></span>
					<span class="cm06"></span>
				</h5>
				<el-menu
						default-active="1"
						class="el-menu-vertical-demo styMenu"
						unique-opened
						router
						@open="handleOpen"
						@close="handleClose"
						background-color="#545c64"
						text-color="#ffffff"
						active-text-color="#ffd04b"
				>
					<el-submenu index="1" >
						<template slot="title" style="text-align: left">
							<i class="fa fa-home"></i>
							<span >系统首页</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="/payM">测试页面小组件1</el-menu-item>
							<el-menu-item index="test2">测试页面小组件2</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title">
							<i class="fa fa-desktop" aria-hidden="true"></i>
							<span>商品管理</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="/payM" @click="ADDTAGS('娃哈哈')">WAHAH</el-menu-item>
							<el-menu-item index="/test4">选项2</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title">
							<i class="fa fa-database" aria-hidden="true"></i>
							<span>交易管理</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="3-1">选项1</el-menu-item>
							<el-menu-item index="3-2">选项2</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="4">
						<template slot="title">
							<i class="fa fa-credit-card" aria-hidden="true"></i>
							<span>支付管理</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="4-1">选项1</el-menu-item>
							<el-menu-item index="4-2">选项2</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="5">
						<template slot="title">
							<i class="fa fa-cogs" aria-hidden="true"></i>
							<span>系统管理</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="5-1">选项1</el-menu-item>
							<el-menu-item index="5-2">选项2</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="6">
						<template slot="title">
							<i class="fa fa-users" aria-hidden="true"></i>
							<span>管理员</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="6-1">选项1</el-menu-item>
							<el-menu-item index="6-2">选项2</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="7">
						<template slot="title">
							<i class="fa fa-user" aria-hidden="true"></i>
							<span>会员管理</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="7-1">选项1</el-menu-item>
							<el-menu-item index="7-2">选项2</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import vuex from  "vuex"
	import {mapState,mapMutations,mapGetters} from "vuex"
	export default {
		name: "elAside",
		methods: {
			handleOpen(key, keyPath) {
				// console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				// console.log(key, keyPath);
			},
			...mapMutations(["ADDTAGS"])
		}
		
	}
</script>

<style scoped>
#elA{
	width: 200px;
}
.tac{
	width: 200px;
}
.colorChoose{
	height: 50px;
	width: 198px;
	color: #000;
	line-height: 50px;
	background-color: #ffffff;
	font-size: 20px;
}
.colorChoose i{
	color: #393939;
	font-size: 30px;
}
.colorModule{
	height: 50px;
	width: 198px;
	color: #000;
	line-height: 50px;
	border: 1px solid #666666;
	background-color: #000000;
}
.colorModule span{
	display: inline-block;
	width: 26px;
	height: 26px;
	border: 1px solid #999999;
	margin-top: 11px;
}
.colorModule span:nth-child(1){
	background-color: #000000;
}
.colorModule span:nth-child(2){
	background-color: #438EB9;
}
.colorModule span:nth-child(3){
	background-color: #72B63F;
}
.colorModule span:nth-child(4){
	background-color: #41a2ff;
}
.colorModule span:nth-child(5){
	background-color: #FF6868;
}
.colorModule span:nth-child(6){
	background-color: #6F036B;
}
.el-submenu{
	text-align: left;
}
.el-submenu__title i{
	color: #ffffff;
}
</style>