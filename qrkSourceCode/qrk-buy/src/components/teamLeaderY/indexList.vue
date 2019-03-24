<template>
  <!-- 列表 -->
  <div class="list">
    <div class="shopList">
      <div class="shopListtop">
        <span></span>
        <span>店铺/订单提示</span>
      </div>
      <div class="shopListbottom">
        <div class="shopLeft">
          <div class="shopLeftA">
            <span class="iconfont icon-dingdan"></span>
            <span>订单&商品</span>
          </div>
          <div class="shopLeftB">
            <p><span>已发货订单</span><span>(02)</span></p>
            <p><span>已完成订单</span><span>(02)</span></p>
            <p><span>未完成订单</span><span>(02)</span></p>
          </div>
        </div>
        <div class="shopLeft">
          <div class="shopLeftA">
            <span id="shopLeftAs">促</span>
            <span>促销</span>
          </div>
          <div class="shopLeftB">
            <p><span>已发货订单</span><span>(02)</span></p>
            <p><span>已完成订单</span><span>(02)</span></p>
            <p><span>未完成订单</span><span>(02)</span></p>
          </div>
        </div>
        <div class="shopLeft">
          <div class="shopLeftA">
            <span class="iconfont icon-73" id="san"></span>
            <span>售后</span>
          </div>
          <div class="shopLeftB">
            <p><span>已发货订单</span><span>(02)</span></p>
            <p><span>已完成订单</span><span>(02)</span></p>
            <p><span>未完成订单</span><span>(02)</span></p>
          </div>
        </div>
        <div class="shopLeft">
          <div class="shopLeftA">
            <span class="iconfont icon-jiesuan" id="suan"></span>
            <span>结算</span>
          </div>
          <div class="shopLeftB">
            <p><span>已发货订单</span><span>(02)</span></p>
            <p><span>已完成订单</span><span>(02)</span></p>
            <p><span>未完成订单</span><span>(02)</span></p>
          </div>
        </div>
      </div>
    </div>
    <div class="productList">
      <div class="productTop">
        <span></span>
        <span>商品销售排行</span>
      </div>
      <div class="productBottom">
        <table  cellspacing="0">
          <tr>
            <th>排名</th>
            <th>商品编号</th>
            <th>商品名称</th>
            <th>销售总领</th>
          </tr>
          <tr>
            <td><span>1</span></td>
            <td>2345776</td>
            <td>联想（thinkPad）轻薄型</td>
            <td>23</td>
          </tr>
          <tr>
            <td><span>1</span></td>
            <td>2345776</td>
            <td>联想（thinkPad）轻薄型</td>
            <td>23</td>
          </tr>
          <tr>
            <td><span>1</span></td>
            <td>2345776</td>
            <td>联想（thinkPad）轻薄型</td>
            <td>23</td>
          </tr>
          <tr>
            <td><span>1</span></td>
            <td>2345776</td>
            <td>联想（thinkPad）轻薄型</td>
            <td>23</td>
          </tr>
          <tr>
            <td><span>1</span></td>
            <td>2345776</td>
            <td>联想（thinkPad）轻薄型</td>
            <td>23</td>
          </tr>
          <tr>
            <td><span>1</span></td>
            <td>2345776</td>
            <td>联想（thinkPad）轻薄型</td>
            <td>23</td>
          </tr>
          <tr>
            <td><span>1</span></td>
            <td>2345776</td>
            <td>联想（thinkPad）轻薄型</td>
            <td>23</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "indexList"
    }
</script>

<style scoped>
  /* 列表 */
  .list{
    width:100%;
    display:flex;
    margin-top:11px;
  }
  .shopList{
    width:55%;
    margin-left:15px;
  }
  .productList{
    width:45%;
    height:30px;
    margin-right:15px;
  }
  .shopListtop{
    height:39px;
    display:flex;
    align-items: center;
    border:1px solid #ddd;
    width:96%;
    margin:0 auto;
  }
  .shopListtop span:nth-of-type(1){
    display: block;
    width:3px;
    height:20px;
    background: #3293ca;
    margin-left:21px;
    margin-right:15px;
  }
  .shopListtop span:nth-of-type(2){
    display: block;
    font-size: 16px;
    font-weight:700;
  }
  .shopListbottom{
    margin:0 auto;
    display: flex;
    flex-wrap: wrap;
  }
  .shopLeft{
    width:50%;
  }
  .shopLeftA{
    display: block;
    margin-top:11px;
    text-align: left;
    margin-left: 26px;
  }

  .shopLeftA span:nth-of-type(1){
    color:#fff;
    font-size:12px;
    border-radius:50%;
    background: #56abe4;
    padding:4px;
    margin-top:11px;
    margin-left:12px;
  }
  .shopLeftA span:nth-of-type(2){
    font-size: 15px;
    font-weight: 700;
  }
  #shopLeftAs{
    font-size:12px;
    background: #f5c23d;
  }
  #san{
    background: #3c763d;
  }
  #suan{
    background: #ac2925;
  }
  .shopListbottom{
    border:1px solid #ddd;
    width:96%;
    line-height: 33px;
  }
  .shopLeftB p{
    display: flex;
    justify-content: space-between;
    margin-left:40px;
    margin-right:5px;
  }
  .shopLeftB span:nth-of-type(2n+1){
    display: block;
    font-size:12px;
  }
  .shopLeftB span:nth-of-type(2n){
    display: block;
    font-size:12px;
    color:#2c9cef;
    font-weight:700;
  }
  .productTop{
    display: flex;
    height:40px;
    border:1px solid #ddd;
    align-items: center;
  }
  .productTop span:nth-of-type(1){
    display: block;
    width:3px;
    height:20px;
    background: #2c9cef;
    margin-left:20px;
    margin-right:14px;
  }
  .productTop span:nth-of-type(2){
    font-size:18px;
    font-weight:700;
    display: block;
  }
  table{
    width:100%;
    text-align: center;
    vertical-align: middle;
    border-collapse:collapse;
    border:1px solid #ddd;
  }

  table tr:nth-of-type(1){
    background: #ededed;
  }
  table tr{
    height:37px;
    border-bottom: 1px solid #ddd;
  }
  table span{
    display: inline-block;
    width:20px;
    height:20px;
    color:#fff;
    background: #ff3333;
  }

  /* 添加商品 */
  .addgoods{
    width:100%;
  }
  .addgoodscontent{
    width:98%;
    margin:0 auto;
  }
  .addgoodscontent span{
    color:red;
  }

</style>
