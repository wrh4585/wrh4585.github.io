<template>
    <div>
      <class-search></class-search>
      <class-productmsg></class-productmsg>
    </div>
</template>

<script>
  import classSearch from "./classSearch"
  import classProductmsg from "./classProductmsg"
    export default {
        name: "khtClassification",
      components:{
        classSearch,
        classProductmsg
      }
    }
</script>

<style scoped>

</style>
