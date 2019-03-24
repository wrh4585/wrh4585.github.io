<template>
  <!-- 订单 -->
  <div class="dingdan">
    <div class="dingdanA">
      <span>订单号：2016100956745345435</span>
      <span>下单时间：2016-09-04 12:34:45</span>
      <span>付款时间：2016-09-04 12:35:23</span>
      <span>付款方式:支付宝</span>
    </div>
    <div class="dingdanB">
      <span>oppo R9 4GB+6GB内存版 雪岩灰 全网通4G手机 双卡双待</span>
      <span>1</span>
      <span>2499</span>
      <span>2499</span>
      <span>代发货</span>
      <div class="dingdanC">
        <span>查看</span>
        <span>发送</span>
      </div>
    </div>
    <div class="dingdanB">
      <span>oppo R9 4GB+6GB内存版 雪岩灰 全网通4G手机 双卡双待</span>
      <span>1</span>
      <span>2499</span>
      <span>2499</span>
      <span>代发货</span>
      <div class="dingdanC">
        <span>查看</span>
        <span>发送</span>
      </div>
    </div>
    <div class="dingdanB">
      <span>oppo R9 4GB+6GB内存版 雪岩灰 全网通4G手机 双卡双待</span>
      <span>1</span>
      <span>2499</span>
      <span>2499</span>
      <span>代发货</span>
      <div class="dingdanC">
        <span>查看</span>
        <span>发送</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "logisticsDing"
    }
</script>

<style scoped>
  /* 物流 */
  .dingdan{
    width:98%;
    margin:0 auto;
  }
  .dingdanA{
    height:38px;
    background: #ededed;
    border-top:1px solid #eee;
    border-bottom: 1px solid #eee;
  }
  .dingdanB{
    height:48px;
    border-top:1px solid #eee;
    border-bottom: 1px solid #eee;
  }
  .dingdanA, .dingdanB{
    width:98%;
    margin:0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .dingdanA span, .dingdanB span{
    display: block;
    font-size: 12px;
  }
  .dingdanC{
    display: flex;
  }
  .dingdanC span{
    width:46px;
    height:41px;
    background: #438eb9;
    color:#fff;
    text-align: center;
    line-height: 41px;
    margin-left:3px;
    border-radius: 4px;
  }
  .dingdanC span:hover{
    cursor: pointer;
  }

</style>
