<template>
  <!-- 产品信息 -->
  <div class="productMsg">
    <div class="productMsgtop">
      <div class="productMsgleft">
        <p class="removePro"><span class="iconfont icon-shanchu1"></span><span>批量删除</span></p>
        <p class="addPro"><span class="iconfont icon-dingdanye"></span><span>已退款</span></p>
        <p class="addFen"><span class="iconfont icon-dingdanye"></span><span>未退款</span></p>
        <p class="handle"><span>+</span><span>批量处理</span></p>
      </div>
      <div class="productMsgright">
        <p><span class="productMsgrightB">共：234条</span></p>
      </div>
    </div>
    <div class="brandBottomr">
      <table cellpadding="0">
        <tr>
          <th><input type="checkbox"></th>
          <th>订单编号</th>
          <th>产品名称</th>
          <th>交易金额</th>
          <th>交易时间</th>
          <th>退款金额</th>
          <th>数量</th>
          <th>说明</th>
          <th>订单状态</th>
          <th>退款状态</th>
          <th>操作</th>
        </tr>
        <tr>
          <td><input type="checkbox"></td>
          <td>20160705445622</td>
          <td><img src="../../../static/img/dp_logo.jpg" alt=""></td>
          <td>456.5</td>
          <td>2015-7-5</td>
          <td>145</td>
          <td>1</td>
          <td>重复购买商品需退款一件</td>
          <td>未发货</td>
          <td><span class="startGood">待退款</span></td>
          <td class="endGood"><span>直接退款</span><span>详情</span><span>删除</span></td>
        </tr>
        <tr>
          <td><input type="checkbox"></td>
          <td>20160705445622</td>
          <td><img src="../../../static/img/dp_logo.jpg"alt=""></td>
          <td>456.5</td>
          <td>2015-7-5</td>
          <td>145</td>
          <td>1</td>
          <td>重复购买商品需退款一件</td>
          <td>未发货</td>
          <td><span class="startGood">待退款</span></td>
          <td class="endGood"><span>直接退款</span><span>详情</span><span>删除</span></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
    export default {
        name: "refundProductmsg"
    }
</script>

<style scoped>
  /* 产品信息 */
  .productMsgleft{
    display: flex;
  }
  .productMsgleft p{
    display: flex;
    line-height: 33px;
    justify-content: center;
    margin-left:10px;
  }
  .productMsgleft span{
    display: block;
    text-indent: 3px;
  }
  .productMsgleft p:nth-of-type(1){
    width:98px;
    height:33px;
    background: #438eb9;
    color:#fff;
  }
  .productMsgleft p:nth-of-type(2){
    width:98px;
    height:33px;
    background: #d15b47;
    color:#fff;
  }
  .productMsgleft p:nth-of-type(3){
    width:98px;
    height:33px;
    background: #f5c23d;
    color:#fff;
  }
  .productMsgleft p:nth-of-type(4){
    width:98px;
    height:33px;
    background: #72b63f;
    color:#fff;
  }
  .productMsgtop{
    height:57px;
    width:98%;
    border:1px solid #ddd;
    margin:0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top:10px;
  }
  .productMsgright span{
    display: block;
    margin-top:10px;
  }
  .productMsgrightA{
    margin-right: 10px;
  }
  .productMsgright input{
    display: block;
    margin-right:14px;
  }
  .productMsgright a{
    display: block;
    color:#fff;
    width:70px;
    height:33px;
    background: #438eb9;
    display: flex;
    margin-right:14px;
  }
  .productMsgright a span:nth-of-type(1){
    margin-left: 7px;
    margin-right: 3px;
  }
  .productMsgright p{
    display: flex;
  }
  .productMsgrightB{
    margin-right: 21px;
  }
  table{
    width:98%;
    margin:0 auto;
    text-align: center;
    vertical-align: middle;
    border-collapse:collapse;
    margin-top:15px;
    margin-bottom:15px;
  }
  table th{
    background: #f4f4f4;
    height:40px;
  }
  table tr{
    height:40px;
  }
  table th{
    border:1px solid #ddd;
  }
  table tr td{
    border:1px solid #ddd;
    font-size:12px;
    height:40px;
  }
  .startGood{
    display: block;
    width:40px;
    height:20px;
    background: #82af6f;
    color:#fff;
    margin:0 auto;
  }
  .endGood{
    /*display:flex;*/
    /*align-items: center;*/
    /*justify-content: space-around;*/
  }
  .endGood span{
    display: inline-block;
    width:47px;
    height:30px;
    color:#fff;
    line-height: 30px;
    margin-left: 10px;
  }
  .endGood span:nth-of-type(1){
    width:60px;
    background: #21a237;
  }
  .endGood span:nth-of-type(2){
    background: #6fb3e0;
  }
  .endGood span:nth-of-type(3){
    background: #d15b47;
  }
  .productMsg{
    width:96%;
    margin:0 auto;
    border:1px solid #ddd;
  }
  .brandBottomr{
    height:300px;
    overflow-y: auto;
  }
  table img{
    width:60px;
    height:60px;
  }
</style>
