<template>
    <div class='wrap'>
        <paym-top></paym-top>
        <paym-bot></paym-bot>
    </div>
</template>
<script>
import paymTop from './paymTop'
import paymBot from './paymBot'
export default {
    name:'payM',
    components:{
        paymTop,
        paymBot,
    },
    methods:{
        bbb(data){
            console.log(data)
        }
    }
}
</script>
<style scoped>
    .wrap{
    height:100%;
    display: -webkit-flex;
    flex-direction:column;
    }
</style>
