<template>

  <!-- 信息 -->
  <div class="goodsMsg">
    <div class="goodsMsgLeft">
      <div class="goodsLeftA">
          {{date}}
      </div>
      <div class="goodsLeftB">
        <p>AD: {{date1}} 年 {{date2}} 月</p>
        <span>{{date4}}</span>
        <span>星期：{{date3}}</span>
      </div>
    </div>
    <div class="goodsMsgCenter">
      <div class="msgTop">
        <div class="msgTopleft">
          <img src="../../../static/img/dp_logo.jpg" alt="">
          <span>进入首页</span>
        </div>
        <div class="msgTopcenter">
          <p><span>商城名称:</span><span>全日空海淘</span></p>
          <p><span>店铺等级:</span><span>三级</span></p>
          <p><span>商城类型:</span><span>电子商务</span></p>
          <p><span>销售类型:</span><span>综合</span></p>
          <p><span>店铺ID:</span><span>234565</span></p>
          <p><span>开通时间:</span><span>2016-08-21</span></p>
        </div>
        <div class="msgTopright">
          <p>店铺动态评分:</p>
          <p><span>店铺动态评分</span><span>4.5分</span></p>
          <p><span>相符描述</span><span>4.0分</span></p>
          <p><span>发货速度</span><span>4.6分</span></p>
        </div>
      </div>
      <div class="msgBottom">
        <span>添加商品</span>
        <span>添加广告</span>
        <span>添加文章</span>
        <span>新增单页面</span>
      </div>
    </div>
    <div class="goodsMsgRight">
      <div class="goodsRighttop">
        <div class="goodsRightL">
          <span></span>
          <span>登录记录</span>
        </div>
        <div class="goodsRightr">
          <span>+更多</span>
        </div>
      </div>
      <div class="goodsRightbottom">
        <p><span>管理员</span><span>2016-08-04 12:45:43</span></p>
        <p><span>管理员</span><span>2016-08-04 12:45:43</span></p>
        <p><span>管理员</span><span>2016-08-04 12:45:43</span></p>
        <p><span>管理员</span><span>2016-08-04 12:45:43</span></p>
        <p><span>管理员</span><span>2016-08-04 12:45:43</span></p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "indexGoodmsg",
      data() {
        return {
          date: new Date(),
          date1:new Date().getFullYear(),
          date2:new Date().getMonth()+1,
          date3:new Date().getDay(),
          date4:new Date().getDate(),
        };
      },
      mounted() {
        let _this = this;
        this.timer = setInterval(() => {
          _this.date = new Date().toLocaleTimeString();
        },1000)
      },
      beforeDestroy() {
        if (this.timer) {
          clearInterval(this.timer);
        }
      }
    }
</script>

<style scoped>
  /* 信息 */
  .goodsMsg{
    width:100%;
    height:238px;
    display: flex;
    justify-content: space-between;
    margin-top:10px;
  }
  .goodsMsgLeft{
    margin-left:10px;
    width:25%;
  }
  .goodsMsgCenter{
    width:50%;
    height:238px;
    border:1px solid #ddd;
  }
  .goodsMsgRight{
    width:25%;
    height:238px;
    margin-right:20px;
  }
  .goodsLeftA{
    width:80%;
    height:50px;
    margin:0 auto;
   font-size:23px;
    text-align: center;
    line-height: 50px;
    font-weight: 700;
    border:1px solid #eee;
  }
  .goodsLeftB{
    margin:0 auto;
    width:80%;
    height:187px;
    border:1px solid #dddddd;
    border-top:0;
  }
  .goodsLeftB p{
    height:40px;
    background: #f0f0f0;
    text-align: center;
    line-height: 40px;
    border:1px solid #dddddd;
  }
  .goodsLeftB span:nth-of-type(1){
    display: block;
    font-size:30px;
    color:#0b90d9;
    font-weight:800;
    text-align: center;
    margin-top:17px;
    margin-bottom: 22px;
  }
  .goodsLeftB span:nth-of-type(2){
    display: block;
    font-size:20px;
    text-align: center;
  }
  .msgTop{
    display: flex;
    padding:20px 30px 0px 20px;
    justify-content: space-between;
    width:90%;
    margin:0 auto;
  }
  .msgTopleft img{
    border-radius: 50%;
    border:1px solid #ddd;
    display: block;
    width:78px;
    height:78px;
    margin-bottom:15px;
  }
  .msgTopleft span{
    display: block;
    width:74px;
    height:32px;
    background: #438eb9;
    color:#fff;
    text-align: center;
    line-height: 32px;
    border-radius: 3px;
  }
  .msgTopcenter,.msgTopright{
    text-align: left;
  }
  .msgTopcenter span:nth-of-type(2n+1){
    font-size:13px;
    color:#999;
    margin-right:28px;
    line-height: 26px;
  }
  .msgTopcenter span:nth-of-type(2n){
    font-size:12px;
  }
  .msgTopright p:nth-of-type(1){
    margin-top:10px;
    margin-bottom: 6px;
  }
  .msgTopright span:nth-of-type(2n+1){
    font-size:13px;
    line-height: 30px;
    margin-right:16px;
  }
  .msgBottom{
    border-top:1px solid #ddd;
    display: flex;
    padding-top:10px;
    width:90%;
    margin:0 auto;
  }
  .msgBottom span{
    display: block;
    width:74px;
    height:39px;
    font-size: 13px;
    text-align: center;
    line-height: 39px;
    border:1px solid #ddd;
    margin:0 10px;
  }
  .msgBottom span:hover{
      cursor: pointer;
    background:#2e6da4;
    color:#fff;
  }
  .goodsRightL{
    display: flex;
  }
  .goodsRightL span:nth-of-type(1){
    display: block;
    width:3px;
    height:20px;
    background: #3293ca;
    margin-left:20px;
    margin-right:16px;
  }
  .goodsRightL span:nth-of-type(2){
    display: block;
    font-size:14px;
    font-weight:700;
  }
  .goodsRightr span{
    font-size: 12px;
    color:#999999;
    display: block;
    margin-right:22px;
  }
  .goodsRighttop{
    margin:0 auto;
    width:90%;
    display: flex;
    justify-content: space-between;
    height:38px;
    align-items: center;
    border:1px solid #ddd;
  }
  .goodsRightbottom span{
    display: block;
  }
  .goodsRightbottom P{
    margin:0 auto;
    width:90%;
    display: flex;
    justify-content: space-between;
    height:38px;
    align-items: center;
    border:1px solid #ddd;
  }
  .goodsRightbottom span:nth-of-type(2n+1){
    margin-left:27px;
  }
  .goodsRightbottom span:nth-of-type(2n){
    margin-right:50px;
  }

</style>
