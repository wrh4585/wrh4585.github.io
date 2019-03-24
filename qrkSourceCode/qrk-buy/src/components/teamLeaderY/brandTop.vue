<template>
  <!-- 品牌管理上部分 -->
  <div class="brandTop">
    <p>品牌名称:&nbsp&nbsp<input type="text" placeholder="输入品牌名称"></p>
    <p>添加时间:&nbsp&nbsp<input type="date"></p>
    <p><select name="" id="">
      <option>国内品牌</option>
      <option>国外品牌</option>
    </select></p>
    <p>查询</p>
  </div>
</template>

<script>
    export default {
        name: "brandTop"
    }
</script>

<style scoped>
  /* 品牌管理上部分 */
  .brand{
    width:100%;
  }
  .brandTop{
    width:98%;
    margin:0 auto;
    display: flex;
    height:57px;
    border: 1px solid #ddd;
    align-items: center;
    margin-top:10px;
  }
  .brandTop p{
    margin-left:33px;
    font-size:14px;
  }

  .brandTop p input{
    height:33px;
    text-indent: 8px;
  }
  .brandTop select{
    height:37px;
  }
  .brandTop p:nth-last-of-type(1){
    width:53px;
    height:37px;
    background: #438eb9;
    text-align: center;
    line-height: 37px;
    color:#fff;
  }

</style>
