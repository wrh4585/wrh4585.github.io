<template>
    <div v-show='Ashow'>
        <div class='addact'>
            标题名称：<input type="text"><br>
            简单描述：<input type="text" style='width:40%;'><br>
            关键字：&nbsp;&nbsp;&nbsp;<input type="text">请以‘，’分隔<br>
     所属分类<div class='check'>
         <b><input type="checkbox" value='帮助中心'>帮助中心</b>
         <b><input type="checkbox" value='购物指南'>购物指南</b>
         <b><input type="checkbox" value='售后服务'>售后服务</b>
         <b><input type="checkbox" value='公司动态'>公司动态</b>
         <b><button>添加分类</button></b>
        </div>
        </div>
        <office></office>
        <div class='dibu'>
        <!-- 发送请求 -->
        <button @click='quxiao(false)'>提交</button>
        <button @click='quxiao(false)'>取消</button>
    </div>
    </div>
</template>
<script>
import office from './office'
export default {
    name:'artAdd',
    components:{
        office,
    },
    props:['Ashow'],
    methods:{
        quxiao(data){
            this.$emit('fa',data)
        }
    }
}
</script>
<style scoped>
.ql-editor {
    height: 800px;
}
input{
    height:30px;
    border-radius:3px;
}
.dibu button{
    height:30px;
    font-size:16px;
    color:white;
    background:blue;
    border:0;
    padding:0 10px;
    border-radius:3px;
    margin-right:10px;

}

.dibu button:last-child{
    background:red;
    
}
.dibu{
   display:flex;
   justify-content: center;
   margin-top:10px;
}
.ql-toolbar.ql-snow + .ql-container.ql-snow {
    border-top: 0px;
    height:500px;
    width:100%;
}
.la{
    position: absolute;
    top:45%;
    font-size:18px;
    border:1px solid gray;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border-left:0;
    left:-11px;
    background:white;
    display:none;

}
.addact input{
    background:white;
    border:1px solid gray;
    margin-right:20px;
    margin-bottom: 10px;

}
.addact b{
    display:flex;
    line-height:30px;
    margin-right:20px;
    font-size:18px;
    color:gray;
    
}
.check input{
    width:18px;
    color:gray;
}
.check{
    display:flex;
}
.addact{
    font-size:18px;
}
.check2 input{
    width:80px;
}
.check3 input{
    margin-right:0;
    margin-left:20px;
}
.addact button{
    height: 30px;
}
</style>