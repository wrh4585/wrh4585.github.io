<template>
     <div class='wrap'>
        <p><span style='margin-left:10px;'>提示：该记录只保留进一个月的操作记录，请及时处理。</span><span  style='margin-right:10px;'>x</span></p>
        <div class='date'>
        &nbsp; &nbsp; &nbsp;搜索条件：<select name="" id="">
                    <option value="">普通管理员</option>
                    <option value="">超级管理员</option>
                    <option value="">财务</option>
                </select>
               <date-sel></date-sel>
               <button class="btn">搜索</button>
        </div>
        <table>
            <tr class="hhh">
                <td class="aa">登录名</td>
                <td class="aa">等级</td>
                <td class="wu">状态</td>
                <td class="aa">IP地址</td>
                <td class="shi">访问地址</td>
                <td class="bb">开始时间</td>
                <td class="bb">结束时间</td>
            </tr>
            <tr>
                <td>admin12345</td>
                <td>超级管理员</td>
                <td>在线</td>
                <td>192.168.1.50</td>
                <td>南京</td>
                <td>2019-3-3 10:25</td>
                <td>2019-3-5 10:25</td>
            </tr>
        </table>
    </div>
</template>
<script>
import dateSel from './dateSel'
export default {
    name:'sysLog',
    components:{
        dateSel,
    }
}
</script>
<style scoped>
    .wrap{
    width:95%;
    margin:0 auto;
}
p{  
    height:40px;
    background: #6fb3e0;
    font-size:14px;
    color:white;
    border-radius:4px;
    line-height:40px;
    margin-top:10px;
    display:flex;
    justify-content: space-between;
}
.date{
    height:100px;
    display:flex;
    align-items: center;
    border:1px solid #ddd;
    margin-top:10px;
}
.date input,.date select{
    height:30px;
}
.date img{
    height:30px;
    width:30px;
}
.date span{
    display:flex;
    align-items: center;
}
table{
    width:100%;
    border-collapse: collapse;
    margin-top: 10px;
}
td{
    text-align:center;
    border:1px solid #ddd;
    height:40px;

}
.aa {
    width:15%;
}
.bb{
    width:20%;
}
.wu{
    width:5%;
}
.shi{
    width:10%;
}
.hhh{
    background-image: linear-gradient(to bottom,#ffffff 0,#ededed 100%)!important;
}
.iconfont{
    float:right;
    margin-right:10px;
}
.btn{
    height: 30px;
    width: 100px;
    text-align: center;
    line-height: 30px;
    background: #438eb9;
    color: white;
    border: 0;
    margin-left: 10px;
}
    .el-picker-panel__body-wrapper{
        margin-left: 295px !important;
        border-color: rgb(169, 169, 169);
    }
    .el-picker-panel el-date-range-picker el-popper has-sidebar{
        left: 295px!important;
         border-color: rgb(169, 169, 169);
    }
</style>
