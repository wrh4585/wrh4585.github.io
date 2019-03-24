<template>
    <div id="test">
        Province：
        <select v-model="province">
            <!--<option :value="北京"></option>-->
            <option v-for="item in province" value="{{item}}">{{item}}</option>
        </select>
        City：
        <select v-model="city">
            <option v-for="item in city" value="{{item}}">{{item}}</option>
        </select>
        acount：
        <select v-model="township">
            <option v-for="item in township" value="{{item}}">{{item}}</option>
        </select>
    </div>
</template>

<script>
    let baseExtend = Vue.extends({
        template:"#test",
        props:{
            province:{},
            city:{},
            township:{}
        },
        data(){
            return {
                addressData:{}
            }
        },
        init:function () {
            setTimeout(()=>{
                that.addressData={
                    '陕西':{
                        '西安':{
                            "碑林区":{},
                            "雁塔区":{}
                        },
                        '宝鸡':{
                            '陈仓区':{},
                            '渭滨区':{}
                        }
                    },
                    '广东':{
                        '广州':{
                            '天河区':{},
                            '越秀区':{}
                        },
                        '深圳':{
                            '宝安':{},
                            '南山':{}
                        }
                    }
                }
            },1000)
        },
        watch:{
            province:function(val,oldval){
                if(val!==oldval){
                    this.city=''
                }
            },
            city:function(val,oldval){
                if(val!==oldval){
                    this.county=''
                }
            }
        },
        computed:{
            provinces:function(){
                if(!this.addressData)return
                let c=[]
                for(var key in this.addressData){
                    c.push(key)
                }
                return c
            },
            citys:function(){
                if(!this.addressData || !this.province)
                    return
                let c=[]
                for(var key in this.addressData[this.province]){
                    c.push(key)
                }

                return c
            },
            countys:function(){
                if(!this.addressData ||!this.city)
                    return

                let c=[]
                for(var key in this.addressData[this.province][this.city]){
                    c.push(key)
                }
                return c
            }
        },
    })
    Vue.component('address',addressExtend)


</script>

<style scoped>

</style>