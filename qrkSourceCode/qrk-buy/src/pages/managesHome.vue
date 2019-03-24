<template>
	<div id="mangHome">
		<el-container style="height: 100%;">
			<el-header id="header" class="primaryColor" style="height: 80px;padding: 0;">
				<navHeader></navHeader>
			</el-header>
			<el-container>
				<el-aside id="dev" width="230px" height="800px" class="primaryColor" >
					<navMenu class="primaryColor"></navMenu>
				</el-aside>
				<el-main id="elMainBox">
					<navMain></navMain>
					<keep-alive>
						<router-view/>
					</keep-alive>
				</el-main>
			</el-container>
			<el-footer class="el-footer primaryColor" style="height: 34px;">版权所有：Allright Reserved @2019</el-footer>
		</el-container>
	</div>
</template>

<script>
	import navMenu from '@/components/navMenu/navMenu'
	import navHeader from '@/components/header/elheader'
	import navMain from '@/components/navMain/navMain'

	export default {
		name: 'mangHome',
		components: {
			navMenu,
			navHeader,
			navMain
		}
	}
</script>

<style scoped>
	html,body{
		height: 100%;
		width:100%;
	}
	#mangHome{
		height: 100%;
		width: 100%;
	}
	
	.el-footer {
		color: #333;
		text-align: center;
		line-height: 34px;
		font-size: 12px;
		text-align: left;
		color: #ffffff;
		background-color: #0e6094;
	}
	#dev{
		height: 100%;
		border-right: 1px solid #999999;
		overflow-y:hidden;
		background-color: #0e6094;
	}
	#header{
		background-color: #0e6094;
	}
	.el-menu{
		border-right: none;
		overflow-y: auto;
		background-color: #0e6094;
	}
	.el-main{
		padding: 0;
	}
	.el-tabs__header{
		padding-top: 10px;
	}
	.el-tabs__nav-scroll {
		overflow: hidden;
		padding-left: 25px;
	}
	.el-tabs--card>.el-tabs__header .el-tabs__nav{
		background-color: #f5f5f5;
	}
	.el-tabs--card>.el-tabs__header .el-tabs__item.is-active.is-closable{
		background-color: white;
		font-size: 16px;
		font-weight: 800;
	}
	.el-menu-item, .el-submenu__title{
		height: 50px;
		line-height: 50px;
		text-align: left;
		border-bottom: 1px solid #dddddd;
	}
	.el-submenu__title i{
		color: white;
	}
	.el-menu-item-group__title{
		padding: 0!important;
	}
	.el-submenu .el-menu-item{
		background-color: #355155;
	}
	.el-submenu.is-active .el-submenu__title{
		border-bottom-color: #999999;
	}
	.el-submenu__title:hover {
		background-color: #010811;
	}
</style>