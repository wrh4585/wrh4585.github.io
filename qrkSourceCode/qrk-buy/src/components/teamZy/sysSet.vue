<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="基本设置" name="first">
      <form class="form01">
          店铺名称:<input type="text" value=''><br>
          店铺描述:<input type="text" value=''>简单描述一下<br>
          关键字:&nbsp;&nbsp;&nbsp;<input type="text" value=''>请用逗号分隔关键字<br>
          店铺介绍：<textarea name="" id="jieshao"></textarea><br>
          店铺logo:<input type="file" value=''><br>
          <p><img src="/static/img/logo.jpg" alt=""></p> 
          公司名称:<input type="text" value=''><br>
          公司电话:<input type="text" value=''><br>
          公司地址:<input type="text" value=''><br>
          公司传真:<input type="text" value=''><br>
          电子邮箱:<input type="text" value=''><br>
          <input type="button" value='保存提交' id='btn'>
      </form>
    </el-tab-pane>
    <el-tab-pane label="邮件设置" name="second"></el-tab-pane>
    <el-tab-pane label="联系方式设置" name="third">
      <form>
        公司电话:<input type="text" value=''><br>
        公司传真:<input type="text" value=''><br>
        <!-- 联系人:<input type="text" value='' class='pipo1' width=40>-<input type="text" value='' class='pipo2'><br> -->
        邮箱地址:<input type="text" value=''><br>
        邮箱密码:<input type="text" value=''><br>
        服务端:&nbsp;&nbsp;&nbsp;<input type="text" value=''><br>
        ssl安全协议:<input type="radio" value='' name='aaa' id='rrd'>是<input type="radio" value='' name='aaa' id='rrd'>否<br>
        <input type="button" value='保存提交' id='btn' stylr="margin-left:300px">
    </form>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
<style scoped>
    input{
    height:35px;
    width:68%;
    margin-bottom:10px;
    margin-top:10px;
    font-size:14px;
    margin-left:10px;
}
.pipo1{
    width:6%;
}
.pipo2{
    width:18%;
}
#rrd{
    width:14px;
    height:14px;
}
form {
     font-size:14px;
     line-height:35px;
     color:#999;
     width:40%;
}
.form01{
    width: 70%;
    text-align: left;
    margin-left:10px;
}
#btn{
    width:80px;
    margin-left:12%;
    background: #60A7D0;
    color:white;
    border:0;
    font-size:14px;
}
#jieshao{
    width:25%;
    height:120px;
}
form img{
    width:15%;
}
form p{
    font-size:14px;
    margin-left:84px;
}
</style>