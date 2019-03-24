<template>
  <div class="material">
    <div class="mater-left" v-for="item in date">
      <div class="group">
        <label>{{item.user}}</label>
        <input type="text" value="laosan"></input>
      </div>
      <div class="group">
        <label>{{item.name}}</label>
        <input type="text" value="张三"></input>
      </div>
      <div class="group">
        <label>{{item.sex}}</label>
        <input type="radio" value="sex">男
        <input type="radio" value="sex">女
      </div>
      <div class="group">
        <label>{{item.age}}</label>
        <input type="text" value="22"></input>
      </div>
      <div class="group">
        <label>{{item.phone}}</label>
        <input type="text" value="13889895623"></input>
      </div>
      <div class="group">
        <label>{{item.email}}</label>
        <input type="email" value="67673651@qq.com"></input>
      </div>
      <div class="group">
          <label>{{item.QQ}}</label>
        <input type="text" value="676773651"></input>
      </div>
      <div class="group">
        <label>{{item.jurisdiction}}</label>
        {{pu.msg}}
      </div>
      <div class="group">
        <label>{{item.riqi}}</label>
        <input type="text" value="2019-03-13"></input>
      </div>
      <infor-two></infor-two>
    </div>
    <infor-three></infor-three>
  </div>
</template>

<script>
    import InforTwo from "./inforTwo";
    import InforThree from "./inforThree";
    export default {
        name: "infor1",
      components: {InforThree, InforTwo},
      data(){
          return{
            date:[
              {user:'用户名:',name:'真实姓名:',sex:'性别:',age:'年龄:',phone:'移动电话:',email:'邮箱:',QQ:'QQ:',jurisdiction:'权限:',riqi:'注册时间:'}
            ],
            pu:{
              msg:'普通管理员'
            }
          }
        }
    }
</script>

<style scoped>
.material{
  border: 1px solid #ddd;
}
.group{
  width: 24%;
  float: left;
  height: 35px;
  display: flex;
  margin-top: 15px;
  line-height: 35px;
  margin-right: 10px;
  align-items: center;
  justify-content:end;
}
.group input{
  height: 30px;
  border: none;
  font-size: 14px;
  margin-left: 5px;
  padding-left: 5px;
}
.group:nth-child(1),
.group:nth-child(5),
.group:nth-child(9){
  margin-left: 10px;
}
.material{
  width: 100%;
  height: 230px;
  display: flex;
  border: 1px solid;
}
.mater-left{
  width: 85%;
  height:230px;
  border-right: 1px solid #ddd;
}
.shanchu{
  display: flex;
}
.shanchu a{
  width: 68px;
  height: 33px;
  color: white;
  display: flex;
  font-size: 12px;
  border-radius: 5px;
  align-items: center;
  background: #d15b47;
}
.shanchu a p{
  padding-left:8px;
}
.shanchu a span{
  padding-left:10px;
}
.shanchu a:nth-child(2){
  width: 97px;
  height: 36px;
  margin-left: 14px;
  background: #438eb9;
}
.shanchu select{
  height: 33px;
  width: 116px;
  margin-top: 2px;
  margin-left: 13px;
}
</style>
