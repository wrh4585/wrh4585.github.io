<template>
  <div>
    <census-nav></census-nav>
    <census-echars></census-echars>
  </div>

</template>

<script>
  import censusNav from "./censusNav"
  import censusEchars from "./censusEchars"
    export default {
        name: "khtCensus",
      components:{
        censusNav,
        censusEchars
      }
    }
</script>

<style scoped>

</style>
