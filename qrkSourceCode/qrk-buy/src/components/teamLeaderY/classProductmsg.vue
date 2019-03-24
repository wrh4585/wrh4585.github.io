<template>
  <!-- 产品信息 -->
  <div class="productMsg">
    <div class="productMsgtop">
      <div class="productMsgleft">
        <p class="removePro"><span class="iconfont icon-shanchu1"></span><span>删除</span></p>
        <p class="addPro"><span class="iconfont icon-dingdanye"></span><span>添加商品</span></p>
        <p class="addFen"><span class="iconfont icon-dingdanye"></span><span>添加分类</span></p>
      </div>
      <div class="productMsgright">
        <p><span class="productMsgrightA">商品搜索:</span><input type="text"/><a href="##"><span class="iconfont icon-sousuo3"></span><span>搜索</span></a><span class="productMsgrightB">数量：3433件</span></p>
      </div>
    </div>
    <div class="brandBottomr">
      <table cellpadding="0" >
        <tr>
          <th><input type="checkbox"></th>
          <th>产品编号</th>
          <th>分类</th>
          <th>产品名称</th>
          <th>原价格</th>
          <th>现价</th>
          <th>所属地区/国家</th>
          <th>加入时间</th>
          <th>审核状态</th>
          <th>状态</th>
          <th>操作</th>
        </tr>
        <tr>
          <td><input type="checkbox"></td>
          <td>45631</td>
          <td>手机</td>
          <td>
            <p>小米max全球通 高配版 3GB内存</p>
            <p>64GB ROM 金色 移动联通电信手机</p>
          </td>
          <td>5467</td>
          <td>4525</td>
          <td>法国</td>
          <td>2014-06-11 11:11:42</td>
          <td>通过</td>
          <td><span class="startGood">上架</span></td>
          <td class="endGood"><span>下架</span><span>编辑</span><span>删除</span></td>
        </tr>
        <tr>
          <td><input type="checkbox"></td>
          <td>45631</td>
          <td>手机</td>
          <td>
            <p>小米max全球通 高配版 3GB内存</p>
            <p>64GB ROM 金色 移动联通电信手机</p>
          </td>
          <td>5467</td>
          <td>4525</td>
          <td>法国</td>
          <td>2014-06-11 11:11:42</td>
          <td>通过</td>
          <td><span class="startGood">上架</span></td>
          <td class="endGood"><span>下架</span><span>编辑</span><span>删除</span></td>
        </tr>
        <tr>
          <td><input type="checkbox"></td>
          <td>45631</td>
          <td>手机</td>
          <td>
            <p>小米max全球通 高配版 3GB内存</p>
            <p>64GB ROM 金色 移动联通电信手机</p>
          </td>
          <td>5467</td>
          <td>4525</td>
          <td>法国</td>
          <td>2014-06-11 11:11:42</td>
          <td>通过</td>
          <td><span class="startGood">上架</span></td>
          <td class="endGood"><span>下架</span><span>编辑</span><span>删除</span></td>
        </tr>
        <tr>
          <td><input type="checkbox"></td>
          <td>45631</td>
          <td>手机</td>
          <td>
            <p>小米max全球通 高配版 3GB内存</p>
            <p>64GB ROM 金色 移动联通电信手机</p>
          </td>
          <td>5467</td>
          <td>4525</td>
          <td>法国</td>
          <td>2014-06-11 11:11:42</td>
          <td>通过</td>
          <td><span class="startGood">上架</span></td>
          <td class="endGood"><span>下架</span><span>编辑</span><span>删除</span></td>
        </tr>
        <tr>
          <td><input type="checkbox"></td>
          <td>45631</td>
          <td>手机</td>
          <td>
            <p>小米max全球通 高配版 3GB内存</p>
            <p>64GB ROM 金色 移动联通电信手机</p>
          </td>
          <td>5467</td>
          <td>4525</td>
          <td>法国</td>
          <td>2014-06-11 11:11:42</td>
          <td>通过</td>
          <td><span class="startGood">上架</span></td>
          <td class="endGood"><span>下架</span><span>编辑</span><span>删除</span></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
    export default {
        name: "classProductmsg"
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
  .productMsgleft p:hover{
    cursor: pointer;
  }
  .productMsgleft span{
    display: block;
    text-indent: 3px;
  }
  .productMsgleft p:nth-of-type(1){
    width:70px;
    height:33px;
    background: #d15b47;
    color:#fff;
  }
  .productMsgleft p:nth-of-type(2){
    width:98px;
    height:33px;
    background: #438eb9;
    color:#fff;
  }
  .productMsgleft p:nth-of-type(3){
    width:98px;
    height:33px;
    background: #438eb9;
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
    height:67px;
  }
  table tr{
    height:67px;
  }
  table th{
    border:1px solid #ddd;
  }
  table tr td{
    border:1px solid #ddd;
    font-size:12px;
    height:67px;
  }
  .startGood{
    display: block;
    width:30px;
    height:20px;
    background: #82af6f;
    color:#fff;
    margin:0 auto;
  }
  .endGood{
    display:flex;
    align-items: center;
    justify-content: space-around;
  }
  .endGood span{
    display: block;
    width:47px;
    height:30px;
    color:#fff;
    line-height: 30px;
  }
  .endGood span:nth-of-type(1){
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
</style>
