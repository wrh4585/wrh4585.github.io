<template>
	<div id="elH" class="primaryColor">
		<div id="elLogo">
			<div class="elLogo-1">
				<h1 class="elH-manage-name cn">全日空海淘后台管理系统</h1>
				<h3 class="elH-manage-name en">ANA CARGO DIRECT BACKGROUND MANAGEMENT SYSTEM</h3>
			</div>
		</div>
		<div id="elUser">
			<div id="searchBox">
				<input id="searceInput" type="text">
				<span id="input-btn">
					<i class="fa fa-search"></i>
				</span>
			</div>
			<div id="msgBox">
				<i class="fa fa-bell"></i>
				<span>5</span>
			</div>
			<div id="managers">
				<img class="touxiang" src="../../assets/img/avatar.png" alt="">
				<span class="user-info" @click="kai">欢迎你,超级管理员</span>
				<i v-if="!num" class="fa fa-caret-down"></i>
				<i v-if="num" class="fa fa-caret-up"></i>
				<ul v-if="num" class="dropdown-menu">
					<li><a href="#"><i class="fa fa-user"></i>个人信息</a></li>
					<li><a href="#"><i class="fa fa-cog"></i>系统设置</a></li>
					<li><a href="#" id="Exit_system" @click="exitSys"><i class="fa fa-user-times"></i>退出</a></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "elHeader",
		data() {
			return {
				num:false
			};
		},
		methods: {
			kai(){
				if(this.num==false){
					this.num=true
					
				}else{
					this.num=false
				}
			},
			getColor(){
			var str = "#";
			for(let i = 0 ; i <6 ; i++){
				str += (parseInt(Math.random()*16)).toString(16);
			}
				return str;
			},
			exitSys(){
				this.$store.state.load=true
				// console.log(this.$store.state.load)
			}
			
		},
		mounted() {
			setInterval(()=>{
				let tColor = this.getColor()
				document.querySelector(".cn").style.color =tColor
				document.querySelector(".en").style.color =tColor
			},1000)
		}
	}
</script>

<style scoped>
#elH{
	display: -webkit-flex;
	justify-content: space-between;
	align-items: center;
	/*background-color: black;*/
	width: 100%;
}
#elLogo{
	height: 80px;
	display: -webkit-flex;
	align-items: center;
	justify-content: center;
	margin-left: 10px;
}
.elLogo-1{
	margin-right: 10px;
}
.elLogo-1 .cn{
	color: #ffffff;
	font-size: 38px;
	margin-bottom: 2px;
	transition: all 1s;
}
.elLogo-1 .en{
	color: #ffffff;
	font-size: 14px;
	transition: all 1s;
}
.elLogo-2 .cn{
	color: #ffffff;
	font-size: 44px;
}
.elLogo-2 .en{
	color: #ffffff;
	font-size: 10px;
}
#elUser{
	height: 80px;
	display: -webkit-flex;
	align-items: center;
	margin-right: 10px;
}
#searchBox{
	-webkit-border-radius: 3px;
	border: 1px solid #dddddd;
	background-color: #ffffff;
	height: 40px;
	width: 233px;
}
#searceInput{
	box-shadow: none;
	background-color: #ffffff;
	border: 1px solid transparent;
	height: 39px;
	line-height: 38px;
	padding: 0px 5px;
	transition: all 0.3s ease-in-out;
	width: 183px;
	float: left;
	font-size: 20px;
}
#input-btn{
	float: left;
	border-left: 1px solid #dddddd;
	width: 35px;
	height: 38px;
	text-align: center;
	line-height: 38px;
	cursor: pointer;
	background-color: #fcfcfc;
}
#input-btn i{
	display: block;
	height: 38px;
	line-height: 38px;
	color: #666;
}
#msgBox{
	width: 44px;
	height: 44px;
	background-color: #666666;
	border-radius: 3px;
	text-align: center;
	line-height: 44px;
	position: relative;
	margin-left: 30px;
}
#msgBox i{
	color: white;
	font-size: 24px;
}
#msgBox span{
	color: white;
	font-size: 14px;
	background-color: #e80000;
	display: block;
	width: 20px;
	height: 20px;
	line-height: 20px;
	position: absolute;
	top: -8px;
	left: -8px;
	border-radius: 50%;
}
#managers{
	height: 44px;
	display: -webkit-flex;
	align-items: center;
	background-color: #666666;
	margin-left: 10px;
	padding: 0 10px;
	border-radius: 3px;
}
.touxiang{
	display: block;
	width: 34px;
	height: 34px;
}
.user-info{
	color: #ffffff;
	font-size: 14px;
	margin: 0 8px;
}
.fa-caret-down{
	color: white;
	font-size: 24px;
}
.fa-caret-up{
	color: white;
	font-size: 24px;
}
.dropdown-menu{
	background-color: #FFF;
	border: 1px solid #dddddd;
	border-radius: 3px;
	-moz-border-radius: 3px;
	-webkit-border-radius: 3px;
	-o-border-radius: 3px;
	position: absolute;
	z-index: 112;
	width: 199px;
	min-width: 140px;
	margin-top: 10px;
	right: 9px;
	top: 55px;
}
.dropdown-menu a{
	text-decoration: none;
	color: #000;
	font-size: 14px;
}
.dropdown-menu li{
	list-style: none;
	padding: 0 18px;
	text-align: left;
	height: 30px;
	line-height: 30px;
}
.dropdown-menu li i{
	margin-right: 10px;
}
</style>