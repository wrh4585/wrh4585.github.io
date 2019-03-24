<template>
    <div id="test">
        Province：
        <select v-model="UnitSelected">
            <option v-for="item in UnitList" :value="item.id">{{item.name}}</option>
        </select>
        City：
        <select v-model="DepartmentSelected">
            <option v-for="item in DepartmentList" :value="item.id">{{item.name}}</option>
        </select>
        acount：
        <select v-model="UserSelected">
            <option v-for="item in UserList" :value="item.id">{{item.name}}</option>
        </select>
    </div>
</template>

<script>

    export default {
        name: "selects",
        data(){
            return{
                province: [
                    {
                        value: '省份'
                    }, {
                        id   : "1",
                        value: "大连"
                    },
                    {
                        id   : "2",
                        value: "沈阳"
                    },
                    {
                        id   : "3",
                        value: "北京"
                    }],
                city: [
                    {
                        value: '城市'
                    }, {
                        id   : "1",
                        value: "大连"
                    },
                    {
                        id   : "2",
                        value: "沈阳"
                    },
                    {
                        id   : "3",
                        value: "北京"
                    }],
                township: [
                    {
                        value: '区县'
                    }, {
                        id   : "1",
                        value: "大连"
                    },
                    {
                        id   : "2",
                        value: "沈阳"
                    },
                    {
                        id   : "3",
                        value: "北京"
                    }],
                UnitSelected:"",
                UnitList:[],
                DepartmentSelected:"",
                DepartmentList:[],
                UserSelected:"",
                UserList:[]
            }
        },
        methods:{
            
        },
        created:function () {
            this.UnitList = province
            this.UnitSelected = this.UnitList.length>0 ? this.UnitList[0].id : "";

            var val = this.UnitSelected;
            this.DepartmentList = city.filter(function (x) { return x.pid == val });
            this.DepartmentSelected = this.DepartmentList.length>0 ? this.DepartmentList[0].id : "";

            val = this.DepartmentSelected;
            this.UserList = township.filter(function (x){ return x.pid == val});
            this.UserSelected = this.UserList.length>0 ? this.UserList[0].id : "";

        },
        watch:{
            UnitSelected:function (val) {
                this.DepartmentList = city.filter(function (x) { return x.pid == val });
                this.DepartmentSelected = this.DepartmentList.length>0 ? this.DepartmentList[0].id : "";
            },
            DepartmentSelected:function (val) {
                this.UserList = township.filter(function (x){ return x.pid == val});
                this.UserSelected = this.UserList.length>0 ? this.UserList[0].id : "";
            }
        }

    }

</script>

<style scoped>

</style>