<template>
  <div class="complete">
    <InforOne></InforOne>
    <infor-four></infor-four>
  </div>
</template>

<script>
  import InforOne from "./inforOne";
  import InforFour from "./inforFour";
    export default {
        name: "inforMation",
        components: {
          InforFour,
          InforOne
          }
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
    color: #000;
    text-decoration: none;
  }
  .complete{
    margin: 10px;
    background: white;
  }


</style>
