<template>
  <div class="prompt">
    <p><span>提示：暂时只支持未发货的订单退款申请，已发货订单不支持退款换货，敬请谅解</span><span @click="rem">X</span></p>
  </div>
</template>

<script>
    export default {
        name: "refundPrompt",
        methods:{
          rem(){
            document.querySelector(".prompt").style.display="none"
          }
        }
    }
</script>

<style scoped>
  /* 提示 */
  .refund{
    width:100%;
    margin-top:10px;
  }
  .prompt span{
    text-indent: 10px;
    display: block;
  }
  .prompt span:nth-of-type(2){
    margin-right:10px;
  }
  .prompt p{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height:40px;
  }
  .prompt{
    color: #fff;
    background: #21a237;
    font-size: 14px;
    margin:0 auto;
    width:96%;
  }
</style>
