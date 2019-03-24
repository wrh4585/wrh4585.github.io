<template>
  <!-- 导航栏 -->
  <nav>
    <div class="cloLeftA">
      <div class="colLeft" style="margin: 3px">
        <span>￥</span>
        <span>成交金额</span>
      </div>
      <div class="colRight">
        <span>4567元</span>
      </div>
    </div>
    <div class="cloLeftA" style="margin: 3px">
      <div class="colLeft" id="navA">
        <span class="iconfont icon-liuyan"></span>
        <span>留言</span>
      </div>
      <div class="colRight" id="navB">
        <span>4567元</span>
      </div>
    </div>
    <div class="cloLeftA" style="margin: 3px">
      <div class="colLeft" id="navC">
        <span class="iconfont icon-gouwuche"></span>
        <span>订单</span>
      </div>
      <div class="colRight" id="navD">
        <span>4567元</span>
      </div>
    </div>
    <div class="cloLeftA" style="margin: 3px">
      <div class="colLeft" id="navE">
        <span class="iconfont icon-tongzhi"></span>
        <span>通知</span>
      </div>
      <div class="colRight" id="navF">
        <span>4567元</span>
      </div>
    </div>
    <div class="cloLeftA" style="margin: 3px">
      <div class="colLeft" id="navG">
        <span class="iconfont icon-daichuli"></span>
        <span>待处理</span>
      </div>
      <div class="colRight" id="navH">
        <span>4567元</span>
      </div>
    </div>
    <div class="cloLeftA" style="margin: 3px">
      <div class="colLeft" id="navI">
        <span class="iconfont icon-daichuli"></span>
        <span>紧急通知</span>
      </div>
      <div class="colRight" id="navK">
        <span>4567元</span>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "indexNav"
    }
</script>

<style scoped>
  /* 导航栏 */
  nav{
    width: 98%;
    display: flex;
    flex-wrap: wrap;
   margin: 0 auto;
  }
  #navA{
    background: #9cd159;
  }
  #navB{
    background: #72b63f;
  }
  #navC{
    background: #ff7171;
  }
  #navD{
    background: #ff5757;
  }
  #navE{
    background: #ff8e68;
  }
  #navF{
    background: #ff6633;
  }
  #navG{
    background: #ad96d6;
  }
  #navH{
    background: #8775a7;
  }
  #navI{
    background: #fddf39;
  }
  #navK{
    background: #f5c23d;
  }
  .cloLeftA{
    display: flex;
    /*flex-shrink: 0;*/
    /*margin:3px;*/
  }
  .colLeft{
    background: #60a7d0;
    width: 100px;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: center;
  }
  .colRight{
    background: #438eb9;
  }
  .colLeft span:nth-of-type(1){
    display: block;
    font-size:24px;
    font-weight:700;
    color:#fff;
    text-align: center;
    /*margin-bottom:6px;*/
  }
  .colLeft span:nth-of-type(2){
    font-size:16px;
    display: block;
    color:#fff;
  }
  .colRight span{
    display: block;
    font-size:18px;
    color:#fff;
    font-weight:700;
    line-height: 80px;
    padding:0px 20px;
  }

</style>
