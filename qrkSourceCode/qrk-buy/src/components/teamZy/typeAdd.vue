<template>
      <div class='addact' v-show='Tshow'>
            标题名称：<input type="text"><br>
            简单描述：<input type="text" style='width:40%;'><br>
            关键字：&nbsp;&nbsp;&nbsp;<input type="text">请以‘，’分隔<br>
     发布栏目<div class='check'>
            <b><input type="checkbox" value='新品发布'>帮助中心</b>
            <b><input type="checkbox" value='限时促销'>购物指南</b>
            <b><input type="checkbox" value='特价处理'>售后服务</b>
            <b style='background:blue'><button >添加分类</button></b>
            <div class='check'>
            <div class='check check2'>
                    <b>商品原<input type="text" value=''>元</b>
                    <b>商品现<input type="text" value=''>元</b>
                    <b>商品数<input type="text" value=''>件</b>
            </div>

            <div>
                设置规格<input type="text">如"颜色,尺寸,型号"中间以英文逗号隔开
            </div>
            <div class='check check3'>
                是否上架:<input type="radio" name='a' value='是'>是<input type="radio" name='a' value='否'>否
            </div>
            <div>
                产品图: <input type="file">
            </div>
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
    name:'typeAdd',
    components:{
        office,
    },
    props:['Tshow'],
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
.addact{
    font-size:16px;
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
    button{
    padding:5px;
    margin-right:30px;
    color:white;
    background: blue;
    border:0;
    border-radius:5px;
    transition:all .3s;
}
.sou span{
    margin-right:10px;
}
.del{
    margin-left:10px;
    background:red;
}
button:hover{
    background:rgb(97, 97, 216);
}
.del:hover{
    background:rgb(235, 105, 105);
}
.sou{
    float:right;
}
    input{
    height:30px;
    line-height:30px;
    padding:0 10px;
    background:rgb(4, 92, 4);
    color:white;
    border:0;
    border-radius:3px;
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
</style>