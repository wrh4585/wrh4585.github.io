<template>
  <div class="List">
    <canva-one></canva-one>
    <canva-two></canva-two>
  </div>
</template>

<script>
  import CanvaOne from "./canvaOne";
  import CanvaTwo from "./canvaTwo";
    export default {
        name: "canva",
      components: {CanvaTwo, CanvaOne}
    }
</script>

<style scoped>
  body,p,dl,dd,ul,ol,li,div,h1,h2,h3,h4,h5,h6,form,input,table,th,tbody,tr,td{
    margin:0;
    padding:0;
  }
  body{
    height: 100%;
    position: relative;
    background-color:#fff;
    font-family: "微软雅黑",Arial;
  }
  ul,ol{
    list-style:none;
  }
  img{
    border: 0;
  }
  a{
    text-decoration: none;
  }
  
  .List{
    margin: 10px;
  }
</style>
