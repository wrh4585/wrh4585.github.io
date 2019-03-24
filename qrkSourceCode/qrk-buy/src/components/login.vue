<template>
    <div class="wholeBox">
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
                <img src="img/ball.gif">
                <div class="title">
                    <div class="info" ref="info" ><h3>海</h3><h3>淘</h3><h3>网</h3><h3>后</h3><h3>台</h3><h3>管</h3><h3>理</h3><h3>界</h3><h3>面</h3></div>
                    <p><i>WEB SITE BANCKGROUND MANAGE SYSTEM</i></p>
                </div>
            </div>
            <div class="showInfo">
                <img src="img/bg.PNG">
                <div>
                    <p><img src="img/head.PNG"></p>
                    <form action="/login" method="POST">
                        <p><span></span><input name="username" type="text" placeholder="用户名"></p>

                        <p><span></span><input type="password" name="password" placeholder="密码"></p>

                        <p><input type="text" name="check" placeholder="验证码"></p>

                        <p class="choseBox"><input type="checkbox" class="choseBox"><span class="save">保存密码</span></p>
                        <input type="submit" value="登陆" class="login" disabled ref="login">
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

    export default {
        name: "login",
        mounted(){
            function fn() {
                function getColor(){
                    let str="#";
                    for(let i=0;i<6;i++){
                        str+=(parseInt(Math.random()*16)).toString(16);
                    }
                    return str;
                }
                let fonts = document.querySelector("h3")
                for(let i=0;i<fonts.length;i++){
                    setInterval(function(){
                        fonts[i].style.color=getColor();
                    },500);
                }
            }
            function f2() {
                let choseBox = document.querySelector("choseBox")
                let bnt = document.querySelector("login")
                if(choseBox.checked == true){
                    bnt.disabled = false
                    this.$refs.btn.style.backgroundColor = "blue"
                }else{
                    btn.disabled = true
                }
            }
        },
        created() {
            this.fn()
            // this.f2()
        }

    }
</script>

<style scoped>
    .wholeBox{
        background-color: #1d78ad;
        width: 100%;
    }
    .welcome{
        width: 100%;
        height: 64px;
        background-color: #14547a;
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
    }
    section{
        width: 600px;
        height: 320px;
        background-color: #fff;
        margin: 10% auto 0;
    }
    #main{
        width: 100px;
        height: 100px;
        border:1px solid black;
        margin-right: 30px;
    }
    .warning{
        width: 100%;
        height: 100px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #1d78ad;
    }
    .warning img{
        display: inline-block;
        background-color: #277fb3;
        margin-right: 20px;
        border-radius: 50%;
    }
    .warning p:last-child{
        font-size: 10px;
        color : #fff;
    }
    .info{
        font-size: 24px;
        margin-bottom: 10px;
        display: flex;

    }
    .showInfo{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .showInfo img{
        width: 200px;
        height: 200px;
        display: block;
    }
    .showInfo p img{
        width: 160px;
        height: 52px;
    }
    .choseBox{
        display: flex;
        justify-content: left;
        margin: 5px 0 5px;
        align-items: center;
    }
    .save{
        font-size: 12px;
        display: block;
    }
    .login{
        width: 100px;
        height: 30px;
        background-color: #2e6eba;
        color: #fff;
    }
</style>