<template>
    <div class="Compe">
      <div class="Tops">
        <div class="shanchu">
          <a href="javascript:;">
            <span class="iconfont icon-shanchu"></span>
            <p>{{shan.msg}}</p>
          </a>
          <a href="javascript:;">
            <span class="iconfont icon-xiugai"></span>
            <p>{{shan.msgs}}</p>
          </a>
          <select name="" id="">
            <option v-for="(n,i) in Sele">{{n.msg}}</option>
          </select>
        </div>
        <div class="search">
          <input type="text"></input>
          <a href="javascript:;">
            <span class="iconfont icon-sousuo2"></span>
            <p>{{sea.msg}}</p>
          </a>
        </div>
      </div>
      <admini-one></admini-one>
    </div>
</template>

<script>
  import AdminiOne from "./adminiOne";
    export default {
        name: "adminiStrator",
      components: {AdminiOne},
      data(){
          return{
            shan:{
              msg:'删除',
              msgs:'添加管理员'
            },
            Sele:[
              {msg:'--选择分类--'},
              {msg:'超级管理员'},
              {msg:'普通管理员'},
              {msg:'栏目编辑'},
            ],
            sea:{
              msg:'搜索'
            }
          }
        }
    }
</script>

<style scoped>

  .Compe{
    margin: 10px;
    border-bottom: 1px solid #ddd;
  }
  .Tops{
    width: 100%;
    height: 56px;
    display: flex;
    padding: 9px 10px;
    align-items: center;
    justify-content: space-between;
  }
  .enable span{
    color: white;
    padding: 5px;
    font-size: 14px;
    border-radius: 3px;
    background: #82af6f;
  }
  .search{
    padding-right: 25px;
  }
  .search a{
    margin-left: 10px;
  }
  .enable span{
    color: white;
    padding: 5px;
    font-size: 14px;
    border-radius: 3px;
    background: #82af6f;
  }
  .header p{
    padding-left: 20px;
  }
  ul{
    height:auto;
    color: black;
    list-style: none;
  }
  ul li{
    padding-left: 30px;
    margin-bottom: 20px;
  }
  li>span:first-child{
    width: 80px;
    text-align: right;
    margin-right: 10px;
    display: inline-block;
  }
  [type='submit']{
    background-color: #5AC031;
    color: white;
    line-height: 30px;
    width: 100px;
    text-indent: 10px;
    margin-left: 120px;
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
  .search{
    display: flex;
    align-items: center;
    margin-right: 100px;
  }
  .search a{
    width: 70px;
    height: 33px;
    color: white;
    display: flex;
    font-size: 14px;
    border-radius: 5px;
    background: #438eb9;
    align-items: center;
  }
  .search input{
    width: 340px;
    height: 35px;
    margin-right: 10px;
  }
  .search span {
    padding-left: 9px;
  }
  .search p{
    padding-left: 5px;
  }
</style>
