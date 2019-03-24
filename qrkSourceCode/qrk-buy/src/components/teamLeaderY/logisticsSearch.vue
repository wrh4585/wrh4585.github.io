<template>
  <!-- 搜索    -->
  <div class="search">
    <p><span>订单号:</span><input type="text"></p>
    <p><span>产品名称:</span><input type="text"></p>
    <p><span>下单时间:</span><input type="Date"></p>
    <p><span>至:</span><input type="Date"></p>
    <p class="searchC"><span class="iconfont icon-sousuo3"></span><span id="searchB">搜索</span></p>
  </div>
</template>

<script>
    export default {
        name: "logisticsSearch"
    }
</script>

<style scoped>
  /* 搜索 */

  .search{
    margin-top:10px;
  }
  .searchA{
    width:100%;
    margin-top:10px;
  }
  .search{
    width:96%;
    margin:0 auto;
    height:57px;
    border:1px solid #ddd;
    display: flex;
    align-items: center;
  }

  .search input{
    line-height: 57px;
    height:33px;
    display: block;
  }
  .search p{
    display: flex;
  }
  .search span{
    margin-left:20px;
    margin-right:5px;
    display: block;
    margin-top:10px;
  }
  #searchB{
    width:70px;
    height:36px;
    display:block;
    background: #438eb9;
    line-height: 36px;
    color:#fff;
    margin-top:-2px;
    border-radius: 3px;
    text-indent: 30px;
  }
  .searchC{
    position: relative;
  }
  .searchC:hover{
    cursor: pointer;
  }
  .searchC span:nth-of-type(1){
    position: absolute;
    left:7px;
    top:-5px;
    color:#fff;
  }

</style>
