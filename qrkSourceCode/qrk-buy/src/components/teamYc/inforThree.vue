<template>
    <div class="mater-right">
      <a href="javascript:;">
        <img :src="right.img">
      </a>
      <a href="javascript:;">
        <span>{{Span.msg}}</span>
      </a>
    </div>
</template>

<script>
  import '../../../static/laydate-v1.1/laydate'
    export default {
        name: "inforThree",
        data(){
          return{
            right:{
              img:'./static/img/1234.jpg'
            },
            Span:{
              msg:'皮了卡了丘'
            }
          }
        },
      mounted(){
        function $(id){
          return document.getElementById(id);
        }
        // $("#click").onclick = function(){
        //     if($("#Bao").style.display == "none"){
        //         $("#dian").style.display = "block";
        //     }else{
        //         $("#Bao").style.display = "none";
        //     }
        // }
        function Xin(){
          document.getElementById('Bao').style.display='block'
        };
        function BAO(){
          document.getElementById('Bao').style.display = 'none'
        }
        laydate({
          elem: '#hello', //需显示日期的元素选择器
          event: 'focus' //响应事件。如果没有传入event，则按照默认的click
        });
        /*方法属性开始*/
        laydate.skin('molv'); // 设置皮肤 官方默认可以调用的皮肤有'default'、'dahong'、'molv' 此版本已集成了'default'、'dahong'、'molv'、'danlan'、'yalan'、'qianhuang'、'yahui'、'huanglv'
        var tody=laydate.now('-2'); // laydate.now(timestamp, format); timestamp可以是前后若干天，也可以是一个时间戳。format为日期格式，为空时则采用默认的“-”分割。如laydate.now(-2)将返回前天，laydate.now(3999634079890)将返回2096-09-28
        /*方法属性结束*/
        /*参数设置开始*/
        laydate({
          elem: '#test', //需显示日期的元素选择器
          event: 'mouseover', //触发事件 可以调用的事件'click'、'focus'、'mouseover'、'mouseout'等
          format: 'YYYY/MM/DD hh:mm:ss', //日期格式
          istime: false, //是否开启时间选择
//		isclear: true, //是否显示清空
//		istoday: true, //是否显示今天
          issure: true, //是否显示确认
          festival: true, //是否显示节日
          min: '2015-03-01 00:00:00', //最小日期
          max: '2015-04-01 23:59:59', //最大日期
          start: laydate.now(),    //开始日期 例如：'2015-04-01 23:59:59' 此处是先用laydate.now('-1')获得了昨天的时间
          fixed: false, //是否固定在可视区域
          zIndex: 99999999, //css z-index
          choose: function(dates){ //选择好日期后的回调
            alert(tody);
          }
        });
      }
    }
</script>

<style scoped>
  .mater-right{
    width: 15%;
    height: 230px;
    display: flex;
    margin-top: 20px;
    align-items: center;
    flex-direction: column;
  }
  .mater-right img{
    width: 180px;
    height: 145px;
    border: 1px solid;
    margin-bottom: 10px;
  }
  .mater-right a:nth-child(2) span{
    font-size: 18px;
  }
</style>
