<template>
    <div>
      <brand-top></brand-top>
      <brand-bottom></brand-bottom>
    </div>
</template>

<script>
  import brandTop from "./brandTop"
  import brandBottom from "./brandBottom"
    export default {
        name: "khtBrand",
      components:{
        brandTop,
        brandBottom
      }
    }
</script>

<style scoped>

</style>
