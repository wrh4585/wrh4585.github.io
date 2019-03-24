<template>
  <div class="addgoods">
    <addgoods-content></addgoods-content>
    <addgoods-pic></addgoods-pic>
  </div>
</template>

<script>
  import addgoodsContent from "./addgoodsContent"
  import addgoodsPic from "./addgoodsPic"
    export default {
        name: "khtAddgood",
      components:{
        addgoodsContent,
        addgoodsPic
      }
    }
</script>

<style scoped>
  .addgoods{
    width:100%;
    margin-top:10px;
  }
</style>
