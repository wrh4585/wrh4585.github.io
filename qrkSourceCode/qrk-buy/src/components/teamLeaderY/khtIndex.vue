<template>
  <div class="content">
    <index-nav></index-nav>
    <index-goodmsg></index-goodmsg>
    <index-list></index-list>
  </div>
</template>

<script>
  import indexNav from "./indexNav"
  import indexGoodmsg from "./indexGoodmsg"
  import indexList from "./indexList"
    export default {
        name: "khtIndex",
        components:{
            indexNav,
            indexGoodmsg,
            indexList
        }
    }
</script>

<style scoped>
  .content{
    width:100%;
    background:url('../../../static/img/litiqs.jpg') no-repeat right bottom;
  }
</style>
