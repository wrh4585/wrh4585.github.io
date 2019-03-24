<template>
  <!-- 导航栏 -->
  <nav>
    <div class="cloLeftA">
      <div class="colLeft">
        <span>￥</span>
        <span>成交总额</span>
      </div>
      <div class="colRight">
        <span>4567元</span>
      </div>
    </div>
    <div class="cloLeftA">
      <div class="colLeft" id="navA">
        <span>￥</span>
        <span>支付总额</span>
      </div>
      <div class="colRight" id="navB">
        <span>4567元</span>
      </div>
    </div>
    <div class="cloLeftA">
      <div class="colLeft" id="navC">
        <span>￥</span>
        <span>退款总额</span>
      </div>
      <div class="colRight" id="navD">
        <span>4567元</span>
      </div>
    </div>
    <div class="cloLeftA">
      <div class="colLeft" id="navE">
        <span>￥</span>
        <span>代付总额</span>
      </div>
      <div class="colRight" id="navF">
        <span>4567元</span>
      </div>
    </div>
    <div class="cloLeftA">
      <div class="colLeft" id="navG">
        <span class="iconfont icon-gouwuchekong"></span>
        <span>订单总量</span>
      </div>
      <div class="colRight" id="navH">
        <span>4567元</span>
      </div>
    </div>
    <div class="cloLeftA">
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
        name: "censusNav"
    }
</script>

<style scoped>
  /* 导航栏 */
  .census{
    width:100%;
  }
  nav{
    width: 100%;
    display: flex;
    margin-top:10px;
    flex-wrap: wrap;
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
    flex-shrink: 0;
    margin:10px;
  }
  .colLeft{
    background: #60a7d0;
    padding:3px;
    padding:17px 20px  10px 20px;
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
    margin-bottom:6px;
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
    padding:0px 10px;
  }

</style>
