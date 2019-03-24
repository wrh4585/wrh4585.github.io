<template>
      <div class="List-Top">
        <ul>
          <li>
            会员名称:
            <input type="text"></input>
          </li>
          <li>
            注册时间:
            <date-sel></date-sel>
          </li>
        </ul>
        <a href="javascript:;">
          <span class="iconfont icon-sousuo2"></span>
          搜索
        </a>
      </div>
</template>

<script>
  import dateSel from './dateSel'
    export default {
        name: "canvasOne",
        components:{
          dateSel
        }
    }
</script>

<style scoped>
  .List-Top{
    width: 100%;
    height: 55px;
    display: flex;
    align-items: center;
    border: 1px solid;
  }
  .List .List-Top a{
    width: 70px;
    height: 38px;
    color: white;
    display: flex;
    margin-left: 138px;
    border-radius: 5px;
    align-items: center;
    background: #438eb9;
  }
  .iconfont{
    font-size: 16px;
    padding-left: 5px;
  }
  .List .List-Top ul{
    display: flex;
    align-items: center;
  }
  .List .List-Top ul li{
    font-weight: 600;
    margin-bottom: 0;
  }
  .List .List-Top ul li:first-child input{
    width: 83px;
    height: 33px;
  }
  .List .List-Top ul li:last-child{
    display: flex;
    align-items: center;
  }
  .el-date-editor .el-range__icon{
    margin-bottom: 10px;
  }
  .el-date-editor--daterange .el-range-separator{
    margin-bottom: 10px;
  }
  .el-date-table th {
    height: auto;
  }
</style>
