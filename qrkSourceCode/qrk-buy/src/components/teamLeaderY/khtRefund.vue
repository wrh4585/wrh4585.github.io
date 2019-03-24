<template>
  <div>
    <refund-prompt></refund-prompt>
    <refund-productmsg></refund-productmsg>
  </div>
</template>

<script>
  import refundPrompt from "./refundPrompt"
  import refundProductmsg from "./refundProductmsg"
    export default {
        name: "khtRefund",
      components:{
        refundPrompt,
        refundProductmsg
      }
    }
</script>

<style scoped>

</style>
