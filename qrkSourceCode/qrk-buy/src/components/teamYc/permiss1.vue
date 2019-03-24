<template>
    <div class="Tops">
      <div class="shanchu">
        <a href="javascript:;">
          <span class="iconfont icon-shanchu"></span>
          <p onclick="delaaa()">{{del.msg}}</p>
        </a>
        <a href="javascript:;">
          <span class="iconfont icon-xiugai"></span>
          <p>{{del.msgs}}</p>
        </a>
      </div>
      <div class="search">
        <input type="text">
        <a href="javascript:;">
          <span class="iconfont icon-sousuo2"></span>
          <p>{{sea.msg}}</p>
        </a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "permiss1",
        data(){
          return{
            del:{
              msg:"删除",
              msgs:"添加权限"
            },
            sea:{
              msg:"搜索"
            }
          }
        }
    }
</script>

<style scoped>
  .Competent{
    margin: 10px;
    border: 1px solid #dddddd;
  }
  
  .Caoni{
    color: #000;
    height: 38px;
    background: #f2f2f2;
  }
  
  #allDatas th{
    height:100%;
    display:flex;
    align-items: center;
    flex-direction:column;
    justify-content: center;
    border-right: 1px solid #ddd;
  }
  .operation{
    display: flex;
  }
  .operation a{
    width: 50px;
    height: 40px;
    display: flex;
    color: white;
    line-height:40px;
  }
  .operation a:first-child{
    /*margin-left: 27%;*/
    /*margin-right: 14px;*/
    background: #438eb9;
  }
  .operation a:last-child{
    /*margin-right: 34px;*/
    background: #d15b47;
  }
  .Compe{
    margin: 10px;
    border: 1px solid #ddd;
  }
  .Tops{
    width: 100%;
    height: 56px;
    display: flex;
    padding: 9px 10px;
    align-items: center;
    justify-content: space-between;
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
