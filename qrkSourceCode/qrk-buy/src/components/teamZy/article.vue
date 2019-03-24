<template>
    <div class='wrap'>
        <div class='bot'>
            <div class='tip'>
                <button class='del'>删除</button>
                <button class='adda'>添加文章</button>
                <button class='addt'>添加分类</button>
                <div class='sou'>
                    <input type="text"><button><span class="iconfont icon-search"></span>搜索</button>
                    <span>数量<b>10件</b></span>
                </div>
            </div>
            <div class='ttb'>
                <table class='a' index='0'>
                    <tr>
                        <td class='wu'><input type="checkbox"></td>
                        <td class=''>所属分类</td>
                        <td class='shi'>排序</td>
                        <td class='esw'>标题</td>
                        <td class='shi'>简介</td>
                        <td class='shiwu'>添加时间</td>
                        <td class='shi'>状态</td>
                        <td class='esw'>操作</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"></td>
                        <td>帮助中心</td>
                        <td>1</td>
                        <td>订单已提交如何付款</td>
                        <td>付款方式分为以下几种：（注：先款订单请您在订单提交后24小时内...</td>
                        <td>2019-2-25 12:34</td>
                        <td>{{this.fabu1}}</td>
                        <td class='caozuo'>
                            <input type="button" value="发布"  @click='alert(1)'>
                            <input type="button" value="编辑">
                            <input type="button" value="删除">
                        </td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"></td>
                        <td>帮助中心</td>
                        <td>2</td>
                        <td>订单已提交如何付款</td>
                        <td>付款方式分为以下几种：（注：先款订单请您在订单提交后24小时内...</td>
                        <td>2019-2-25 12:34</td>
                        <td>{{this.fabu2}}</td>
                        <td  class='caozuo'>
                            <input type="button" value="发布"  @click='alert(2)'>
                            <input type="button" value="编辑">
                            <input type="button" value="删除">
                        </td>
                    </tr>
                </table>
            </div>
            <div class='tankuang' v-show='this.tanshow'>
                <p>信息 <span @click='quxiao()'>✖</span></p>
                <p>确定要发布吗?</p>
                <p>
                    <input type="button" value='确定' class='focus'  @click='queding(idx)'>
                    <input type="button" value='取消' @click='quxiao()'>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'article1',
    data(){
        return{
            tanshow:false,
            fabu1:'待发布',
            fabu2:'待发布',
            idx:0
        }
    },
    methods:{
        alert(id){
            this.tanshow=true;
            this.idx=id
            // console.log(this.idx)
        },
        queding(n){
            if(n==1){
                this.fabu1='已发布';
            }else{
                this.fabu2='已发布';
            }
            this.tanshow=false
        },
        quxiao(){
            console.log('quxiao')
            this.tanshow=false
        }
    }
}
</script>
<style scoped>
            .tankuang{
            background:white;
            width:200px;
            height:120px;
            border:1px solid #ddd;
            display:flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: column;
            cursor:move;
            font-size:14px;
            position:fixed;
            top:50%;
            left:50%;
            margin-left:-100px;
            margin-top:-60px;
            transition:all .2s;
        }
        .tankuang p:first-child{
            background: rgba(236,236,236,0.48);
            width:100%;
            height:30px;
            line-height:30px;
            text-indent:2px;
            border-bottom: 1px solid #ddd;
        }
        .tankuang input{
            margin-bottom:3px;
            background:rgba(236,236,236,0.48);
            border:1px solid #ddd;
            color:black;
        }
       .tankuang .focus{
            background:#2e8ded;
            color:white;
        }
        .tankuang span{
            float: right;
            margin-right:5px;
            font-size:12px;
            line-height:30px;
        }
   .la{
    position: absolute;
    top:45%;
    font-size:18px;
    border:1px solid #ddd;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border-left:0;
    left:-11px;
    background:white;
    display:none;

}
    .wrap{
    width:90%;
    height: 100%;
    margin:0 auto;
    display:flex;
    border:1px solid #ddd;
    padding:10px;
    overflow: auto;
}
.wrap::-webkit-scrollbar {/*滚动条整体样式*/
            color:transparent;
        }
.article1{
    height:100%;
    width:20%;
    border:1px solid #ddd;
    margin-right:10px;
    position:relative;
    transition:all .3s;
}
.article1 .lt{
    position:relative;
    height:100%;
}
table{
    flex:1;
    border-collapse: collapse;
}
.lt b{
    overflow: hidden;
    display: block;
    position:absolute;
    right:-1px;
    top:40%;
    border:1px solid #ddd;
    border-right:1px solid white;
    display: none;
}
.lt:hover b{
    display:block
}
li .iconfont{
    margin-left:10px;
}
.lt p{
    background: #f4f4f4;
    text-indent: 10px;
    height:40px;
    line-height:40px;
    color: #2c3e50;
}
.lt li{
    height:30px;
    line-height:30px;
}
.lt li:hover a {
    text-decoration: underline;
}
td{
    border:1px solid #ddd;
    text-align: center;
}
.shi{
    width:10%;
}
.esw{
    width:25%;
}
.wu{
    width:5%;
}
input{
    color: #2c3e50;
    height:30px;
    line-height:30px;
    padding:0 10px;
    background: #21a237;
    color:white;
    border:0;
    border-radius:3px;
}
.caozuo input:nth-child(2){
    background:#438eb9;
}
.caozuo input:nth-child(3){
    background:#d15b47;
}
.tip{
    height:60px;
    width:100%;
    margin-bottom:10px;
    color:white;
    border:1px solid #ddd;
    padding-top:15px;
}
button{
    padding:5px;
    margin-right:30px;
    color:white;
    background: #438eb9;
    border:0;
    transition:all .3s;
}
.sou{
    float:right;
}
.sou input{
    background: white;
    border:1px solid #ddd;
    margin-right:10px;
}
.sou span{
    margin-right:10px;
}
.del{
    margin-left:10px;
    background:#d15b47;
    color:white;
}
button span {
    vertical-align:middle;
}
button{
    vertical-align:middle;
}
.bot{
    height: 100%;
    display: flex;
    flex:1;
    flex-direction: column;
}
.ttb{
    flex:1;
    overflow:auto;
}
.b,.c,.d,.e{
    display: none;
}
table tr:first-child{
     background: #f4f4f4;
     color: #2c3e50;
}
</style>