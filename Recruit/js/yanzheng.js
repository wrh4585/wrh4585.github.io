function my$(id){//#box .cls  p
    // if(str.charAt(0)=="#"){
    //     return document.getElementById(str.substring(1));
    // }else if(str.charAt(0)=="."){
    //     return document.getElementsByClassName(str.substring(1));
    // }else{
    //     return document.getElementsByTagName(str);
    // }
    return document.getElementById(id);
}


my$(function(){
    my$("#username").blur(function(){
        //1、手机号码的规则：1开头，第二位是3-9，9位数字
        var reg = /^1[3-9]\d{9}$/i;
        if(reg.test( my&(this).val())){
            my$(this).next().html("有效");
        }else{
    my$(this).next().html("请输入11位有效电话号码");
        }
    })

})