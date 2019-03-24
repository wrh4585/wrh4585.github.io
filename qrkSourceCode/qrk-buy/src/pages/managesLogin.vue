<template>
	<div class="wholeBox" >
		<!--header-->
		<header>
			<div class="welcome">
				<p class="manage">欢迎登陆后台管理界面</p>
				<p class="column">
					<a>返回首页</a>
					<a>关于</a>
					<a>帮助</a>
				</p>
			</div>
		</header>
		<!--section-->
		<section>
			<div class="warning">
				<!--<img class="movejif" src="../../static/img/balls.gif">-->
				<div class="logins">
					<h1>欢迎登录</h1>
					<ul class="loginUls">
						<li class="choose_lis">
							<span class="choose_span">账号<i class="fa fa-user-circle-o"></i>:</span> <input id="userId" type="text" value="admin">
						</li>
						<li class="choose_lis">
							<span class="choose_span">密码<i id="pwicon" class="fa fa-unlock-alt"></i>:</span> <input id="userPass" type="password" value="admin">
						</li>
					</ul>
					<input type="button" value="登 录" id="dengBtn" @click="loginCheck">
					<div id="tips">
						*温馨提示：为了您的良好体验，请使用高版本的浏览器！
					</div>
				</div>
				
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: "login",
		methods:{
			loginCheck(){
				var logName = document.querySelector("#userPass")
				var logPwd = document.querySelector("#userPass")
				var logbtns = document.querySelector("#dengBtn")
				
				if(logName.value!="" && logPwd.value!=""){
					this.$store.state.load=false
					console.log(this.$store.state.load)
					
				}else{
					alert("请输入账号及密码！")
				}
			}
		},
	}
</script>

<style scoped>
	html,body{
		height: 100%;
		width: 100%;
	}
	.wholeBox{
		height: 100%;
		width: 100%;
		background-image: url("../../static/img/citys.jpg");
		background-size: 100% 100%;
	}
	.welcome{
		width: 100%;
		height: 64px;
		font-size: 18px;
		color: #b7cdd6;
		display:flex;
		justify-content:space-between;
		align-items: center;
	}
	.manage{
		margin-left: 54px;
	}
	.column{
		margin-right: 54px;
		display:flex;
	}
	.column a{
		display: block;
		margin-left: 26px;
		color: #b7cdd6;
	}
	section{
		margin: 15% auto 0;
	}
	.warning{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	
	.logins{
		height: 320px;
		width: 400px;
		background-color: #a2bdff8a;
		border-radius: 10px;
		margin-left: 45%;
		text-align: left;
	}
	.logins h1{
		font-size: 30px;
		color: #705151;
		padding-left: 20px;
		border-bottom:1px dashed #dddddd;
		margin-bottom: 20px;
	}
	.choose_lis{
		display: block;
		height: 50px;
		font-size: 24px;
		line-height:50px ;
		display: -webkit-flex;
		justify-content: flex-start;
		align-items: center;
		margin-left: 35px;
	}
	.choose_span{
		display: block;
		height: 50px;
		font-size: 24px;
		line-height: 50px ;
		/*color: #cccccc;*/
	}
	.choose_span i{
		font-size: 24px;
	}
	#pwicon{
		font-size: 26px;
		margin-left: 5px;
	}
	.choose_lis input{
		display: block;
		height: 35px;
		width:240px ;
		margin-right: 5px;
		background-color: rgba(0,0,0, .3);
		border:none;
		color: #f6f5f5;
		font-size: 24px;
		text-indent: 10px;
		border-radius: 10px;
	}
	#dengBtn{
		display: block;
		width: 241px;
		height: 35px;
		background-color:#5055644f;
		border: 1px solid #4b5a85;
		outline: none;
		border-radius: 10px;
		font-size: 22px;
		color: #ffffff;
		margin-left: 110px;
		margin-top: 8px;
	}
	#dengBtn:hover{
		background-color:#999999;
	}
	#tips{
		height: 50px;
		line-height: 50px;
		font-size: 14px;
		color: #ffffff;
		border-top:1px dashed #dddddd;
		margin-top: 20px;
		text-align: center;
	}
</style>




