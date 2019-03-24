<template>
    <div class='bot-tip'>
            <div class='fangshi'>
                在线支付方式
            </div>
            <div class='tip-bot'>
                <div class='tishi'>提示：该支付方式启用并不能正常使用，需要开通支付功能才能使用相应的支付方式。<span class="iconfont icon-guanbi1 "></span></div>
                <ul>
                        <li>支付宝</li>
                        <li><img src="/static/img/zhifb.jpg" alt=""></li>
                        <li>支付宝（中国）网络技术有限公司是国内领先的第三方支付平台，致力于提供“简单、安全、快速”的支付解决方案
                        </li>
                        <li>
                                <span><input type="radio" name='zhifu' id='item1'><label for="item1"></label>启用</span>
                                <span><input type="radio" name='zhifu' id='item2'><label for="item2"></label>关闭</span>
                        </li>
                        <li>
                            <a href="javascript:"><span class="iconfont icon-shanchu"></span>
                                删除</a>
                            <a href="javascript:"><span class="iconfont icon-xianshi_bi "></span>设置</a>
                        </li>
                    </ul>
                <ul>
                    <li>微信</li>
                    <li><img src="/static/img/weixin.jpg" alt=""></li>
                    <li>微信支付是集成在微信客户端的支付功能，用户可以通过手机完成快速的支付流程。

                    </li>
                    <li>
                            <span><input type="radio" name='zhifu4' id='item3'><label for="item3"></label>启用</span>
                            <span><input type="radio" name='zhifu4' id='item4'><label for="item4"></label>关闭</span>
                    </li>
                    <li>
                        <a href="javascript:"><span class="iconfont icon-shanchu"></span>
                            删除</a>
                        <a href="javascript:"><span class="iconfont icon-xianshi_bi "></span>设置</a>
                    </li>
                </ul>
                <ul>
                    <li>支付宝</li>
                    <li><img src="/static/img/yinglian.jpg" alt=""></li>
                    <li>中国银联是中国银行卡联合组织，通过银联跨行交易清算系统，实现商业银行系统间的互联互通和资源共享，保证银行卡跨行、跨地区和跨境的使用。

                    </li>
                    <li>
                            <span><input type="radio" name='zhifu3' id='item5'><label for="item5"></label>启用</span>
                            <span><input type="radio" name='zhifu3' id='item6'><label for="item6"></label>关闭</span>
                    </li>
                    <li>
                        <a href="javascript:"><span class="iconfont icon-shanchu"></span>
                            删除</a>
                        <a href="javascript:"><span class="iconfont icon-xianshi_bi "></span>设置</a>
                    </li>
                </ul>
                <ul>
                        <li>易宝支付</li>
                        <li><img src="/static/img/yozhif.jpg" alt=""></li>
                        <li>中国银联是中国银行卡联合组织，通过银联跨行交易清算系统，实现商业银行系统间的互联互通和资源共享，保证银行卡跨行、跨地区和跨境的使用。

    
                        </li>
                        <li>
                            <span><input type="radio" name='zhifu2' id='item7'><label for="item7"></label>启用</span>
                            <span><input type="radio" name='zhifu2' id='item8'><label for="item8"></label>关闭</span>
                        </li>
                        <li>
                            <a href="javascript:"><span class="iconfont icon-shanchu"></span>
                                删除</a>
                            <a href="javascript:"><span class="iconfont icon-xianshi_bi "></span>设置</a>
                        </li>
                    </ul>
            </div>
        </div>
</template>
<script>
export default {
    name:'paymBot'
}
</script>
<style scoped>
    .bot-tip{
    overflow:hidden;
    flex:1;
    border: 1px solid #ddd;
    margin-top:10px;
}

.fangshi{
    height:40px;
    background-image: linear-gradient(to bottom,#ffffff 0,#ededed 100%)!important;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    color: #393939;
    text-indent:20px;
    width: 100%;
}
.tishi{
    height: 39px;
    margin-top:10px;
    margin-bottom:10px;
    background: #f2dede;
    line-height: 39px;
    color:#b94a48;
    text-indent: 10px;
    border-radius:4px;
}
.tishi span{
    float:right;
    margin-top:4px;
    margin-right:4px;
}
.tip-bot{
    padding-left:10px;
    padding:20px;
}
.bot-tip ul{
    width:20%;
    margin-left: 2%;
}
.bot-tip img{
    width:100%;
    height:100%;
    display: block;
}
 ul li:nth-child(1){
    height:40px;
    font-size:18px;
    background: #438EB9;
    line-height: 40px;
    color:white;
    text-align: center;
}
 ul li:nth-child(2){
    height:150px;
}
 ul li:nth-child(3){
    height:90px;
    font-size: 14px;
    color: #999;
}
 ul li:nth-child(4){
    height:49px;
    display: flex;
    justify-content: center;
    align-items: center;
}
 ul li:nth-child(5){
    height:55px;
    display: flex;
    justify-content: center;
    align-items: center;
}
ul li{
    border-bottom: 1px solid #ddd;
}
ul{
    border-left:1px solid #ddd;
    border-right:1px solid #ddd;
    border-top:1px solid #ddd;
    float:left;
    margin-right:20px;
    margin-bottom:10px;
}
li a{
    display: block;
    width: 40%;
    height:35px;
    background: #82af6f;
    text-align: center;
    line-height: 35px;
    font-size:16px;
    color:white;
    border-radius:4px;
}
li a:first-child{
    margin-right:10px;
    background: #d15b47;
}
li span {
    position: relative;
    line-height: 30px;
    text-indent: 10px;
}

input[type="radio"] {
    width: 20px;
    height: 20px;
    opacity: 0;
}

label {
    position: absolute;
    left: 5px;
    top: 3px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #999;
}

/*设置选中的input的样式*/
/* + 是兄弟选择器,获取选中后的label元素*/
input:checked+label { 
    background-color: #82af6f;
    border: 1px solid #82af6f;
}

input:checked+label::after {
    position: absolute;
    content: "";
    width: 5px;
    height: 10px;
    top: 3px;
    left: 6px;
    border: 2px solid #fff;
    border-top: none;
    border-left: none;
    transform: rotate(45deg)
}
</style>