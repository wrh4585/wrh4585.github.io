<template>
     <div class='top-tip'>
        <button class='abc'><span class="iconfont icon-sanjiaoright"></span>添加支付方式</button>
        <!-- 弹出部分 -->
    </div>
</template>
<script>
import paymTan from './paymTan'
export default {
    name:'paymTop',
}
</script>
<style scoped>
    .top-tip{
    border: 1px solid #ddd;
    padding: 10px;
    height: 60px;
    line-height: 36px;
}
.top-tip button{
    margin-left:10px;
    height:40px;
    background: #438eb9;
    border:0;
    border-radius:5px;
    color:white;
    margin-top:10px;
    padding-left:10px;
    padding-right:10px;
}
.top-tip span{
    color:white;
}
    .baobao{
    position:absolute;
    left:0;
    top:0;
    height:100%;
    z-index:0;
    z-index:5;
    background:#504b4b7a;
    display: flex;
    justify-content: center;
    align-items: center;
    /* display:none; */
}
.tan{
    width:70%;
    background: white;
}
#close{
    float:right;
    margin-right:10px;
}
.ttp{
    background: #f7f7f7;
    height:40px;
    font-size:14px;
    line-height: 40px;
    text-indent:10px;
}
.ttp p{
    width:25%;
    float:left;
    display: flex;
    align-items: center;
}
.ttp img{
    width:80%;
    float:right;
}
.ttp-list{
    display: flex;
    background: white;
}
.btn {
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    padding-top:10px;
}
.btn span{
    display:block;
    
    font-size:14px;
    color:gray;
    background: #f0f0f0;
    margin-left:10px;
    padding-right:10px;
    border-radius:3px;
}
#focus{
    background: #0e6094;
    color:white;
}
</style>