<template>
    <div class="history">
      <div class="history-Top">
        <span style="font-size: 18px">
          {{top.msg}}
          <input class="laydate-icon" onclick="laydate({istime: true, format: 'YYYY-MM-DD hh:mm:ss'})">
        </span>
        <div class="search">
          <a href="javascript:;">
            <span class="iconfont icon-sousuo2"></span>
            <p>{{search.msg}}</p>
          </a>
        </div>
      </div>
      <infor-five></infor-five>
    </div>
</template>

<script>
    import InforFive from "./inforFive";
    export default {
        name: "inforFour",
      components: {InforFive},
      data(){
          return{
            top:{
              msg:'记录搜索:'
            },
            search:{
              msg:'搜索'
            }
          }
        }
    }
</script>

<style scoped>
  .history{
    height: 334px;
    margin-top: 15px;
    border: 1px solid;
  }
  .history-Top{
    width: 98%;
    height: 55px;
    display: flex;
    margin: 15px auto;
    border: 1px solid;
    padding-left: 10px;
    align-items: center;
  }
  .history-Top span{
    display: flex;
  }
  .history-Top .laydate-icon{
    height: 30px;
  }
  .search{
    margin-left: 15px;
  }
  .search a{
    height: 37px;
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
