<template>
  <div class="Competent">
    <permiss1></permiss1>
    <permiss2></permiss2>
  </div>
</template>

<script>
  import Permiss1 from "./permiss1";
  import Permiss2 from "./permiss2";
export default {
  name: 'HelloWorld',
  components: {
    Permiss2,
    Permiss1
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
  .Competent{
    margin: 10px;
    /*border: 1px solid #dddddd;*/
  }
  
</style>
