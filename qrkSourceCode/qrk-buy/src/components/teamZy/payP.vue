<template>
        <div style='margin:0 auto'>
        <table>
        <tr class='tab-tp tab-tp1'>
            <td colspan='3' style='text-align:left'>商城用户支付配置</td>
        </tr>
        <tr class='tab-tp ab' >
            <td>支付名称</td>
            <td>状态</td>
            <td>描述</td>
        </tr>
        <tr class='ab'>
            <td class="a">在线支付（银联）</td>
            <td>
                <span><input type="radio" name='zhifu3' id='item5' checked>启用</span>
                <span><input type="radio" name='zhifu3' id='item6'>关闭</span>
            </td>
            <td class='c'>在线支付是指卖方与买方通过因特网上的电子商务网站进行交易时，银行为其提供网上资金结算服务的一种业务。它为企业和个人提供了一个安全、快捷、方便的电...</td>
        </tr>
        <tr class='ab'>
            <td>在线支付（预存）</td>
            <td>
                <span><input type="radio" name='zhifu4' id='item1'  checked='checked'>启用</span>
                <span><input type="radio" name='zhifu4' id='item2'>关闭</span>
            </td>
            <td>在线支付是指卖方与买方通过因特网上的电子商务网站进行交易时，银行为其提供网上资金结算服务的一种业务。它为企业和个人提供了一个安全、快捷、方便的电...</td>
        </tr>
        <tr class='ab'>
            <td>货到付款</td>
            <td>
                <span><input type="radio" name='zhifu5' id='item3'  checked='checked'>启用</span>
                <span><input type="radio" name='zhifu5' id='item4'>关闭</span>
            </td>
            <td>在线支付是指卖方与买方通过因特网上的电子商务网站进行交易时，银行为其提供网上资金结算服务的一种业务。它为企业和个人提供了一个安全、快捷、方便的电...</td>
        </tr>
        <tr class='ab'>
            <td>第三方在线支付	</td>
            <td>
                <span><input type="radio" name='zhifu6' id='item7'  checked='checked'>启用</span>
                <span><input type="radio" name='zhifu6' id='item8'>关闭</span>
            </td>
            <td>所谓第三方支付，就是一些和产品所在国家以及国内外各大银行签约、并具备一定实力和信誉保障的第三方独立机构提供的交易支持平台。在通过第三方支付平台的...</td>
        </tr>
    </table>
    <table style='margin-top:10px;width:98%;'>
         <tr class='tab-tp tab-tp1'>
            <td colspan='3' style='text-align:left'>其他配置</td>
        </tr>
    </table>
    <div class='bottom'>
        <table>
            <tr>
                <td>发票</td>
            </tr>
            <tr>
                <td>
                     <input type="radio" name='bb'>启用
                     <input type="radio" name='bb'>关闭
                </td>
            </tr>
        </table>
         <table>
            <tr>
                <td>优惠券</td>
            </tr>
            <tr>
                <td>
                     <input type="radio" name='bb'>启用
                     <input type="radio" name='bb'>关闭
                </td>
            </tr>
        </table>
         <table>
            <tr>
                <td>抵扣卷</td>
            </tr>
            <tr>
                <td>
                     <input type="radio" name='bb'>启用
                     <input type="radio" name='bb'>关闭
                </td>
            </tr>
        </table>
         <table>
            <tr>
                <td>代收人</td>
            </tr>
            <tr>
                <td>
                     <input type="radio" name='bb'>启用
                     <input type="radio" name='bb'>关闭
                </td>
            </tr>
        </table>
    </div>
    </div>
       
</template>
<script>
export default {
    name:'payP',
}
</script>
<style scoped>
table{
    border-collapse: collapse;
    width:98%;
    margin:0 auto;

}

tr{
    height:60px;
}
td{
    border: 1px solid #ddd;
    text-align:center;
 
}
.tab-tp{
    height:40px;
    font-size:14px;
    font-weight: 600;
}
.a,.b{
    width:15%
}
.c{
    width:70%;
}
.tab-tp1{
    background-image: linear-gradient(to bottom,#ffffff 0,#ededed 100%)!important;
    font-size:18px;
    font-weight: normal;
}
.ab td:last-child{
    text-align:left;
}
.bottom {
    display:flex;
    width:98%;
    margin: 10px auto 0;
    justify-content: flex-start;

}
.bottom table{
    width:22%;
}
.bottom table tr:first-child{
    height:40px;
    background-image: linear-gradient(to bottom,#ffffff 0,#ededed 100%)!important;

}
</style>