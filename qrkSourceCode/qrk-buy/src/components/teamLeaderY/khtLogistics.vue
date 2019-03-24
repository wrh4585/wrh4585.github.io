<template>
    <div>
      <logistics-search></logistics-search>
      <logistics-ding></logistics-ding>
    </div>
</template>

<script>
  import logisticsSearch from "./logisticsSearch"
  import logisticsDing from "./logisticsDing"
    export default {
        name: "khtLogistics",
      components:{
        logisticsSearch,
        logisticsDing
      }
    }
</script>

<style scoped>

</style>
