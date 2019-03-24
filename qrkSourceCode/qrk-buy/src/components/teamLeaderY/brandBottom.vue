<template>
  <!-- 品牌管理下部分 -->
  <div class="brandBottom">
    <div class="brandBottomleft">
      <div id="brandBottomleftA">

      </div>
    </div>
    <div class="brandBottomright">
      <div class="brandBottomrightL">
        <div class="brandBottomrightA">
          <router-link to="/Brand"><p>+添加品牌</p></router-link>
          <p><span class="iconfont icon-shanchu2"></span><span>批量删除</span></p>
          <p>国内品牌</p>
          <p>国外品牌</p>
        </div>
        <div class="brandBottomrightB">
          <p>共234个品牌</p>
        </div>
      </div>
      <div class="brandBottomr">
        <table>
          <tr>
            <th><input type="checkbox"></th>
            <th>ID</th>
            <th>排序</th>
            <th>品牌LOGO</th>
            <th>品牌名称</th>
            <th>所属地区/国家</th>
            <th>数量</th>
            <th>加入时间</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
          <tr>
            <th><input type="checkbox"></th>
            <td>45631</td>
            <td>1</td>
            <td><img src="../../../static/img/dp_logo.jpg"></td>
            <td>玉兰油</td>
            <td>法国</td>
            <td>123</td>
            <td>
              <p>2014-6-11</p>
              <p>11:11:42</p>
            </td>
            <td><span class="startGood">以启用</span></td>
            <td class="endGood"><span @click="putoff" class="off">下架</span><span>编辑</span><span @click="rem">删除</span></td>
          </tr>
          <tr>
            <th><input type="checkbox"></th>
            <td>45631</td>
            <td>1</td>
            <td><img src="../../../static/img/dp_logo.jpg"></td>
            <td>玉兰油</td>
            <td>法国</td>
            <td>123</td>
            <td>
              <p>2014-6-11</p>
              <p>11:11:42</p>
            </td>
            <td><span class="startGood">以启用</span></td>
            <td class="endGood"><span @click="putoff">下架</span><span>编辑</span><span @click="rem">删除</span></td>
          </tr>
          <tr>
            <th><input type="checkbox"></th>
            <td>45631</td>
            <td>1</td>
            <td><img src="../../../static/img/dp_logo.jpg"></td>
            <td>玉兰油</td>
            <td>法国</td>
            <td>123</td>
            <td>
              <p>2014-6-11</p>
              <p>11:11:42</p>
            </td>
            <td><span class="startGood">以启用</span></td>
            <td class="endGood"><span @click="putoff">下架</span><span>编辑</span><span @click="rem">删除</span></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "brandBottom",
      mounted(){
        var dom = document.getElementById('brandBottomleftA')
        var myChart = this.echarts.init(dom)
        // 绘制图表
        myChart.setOption({
          title: {
            text: '国内国外品牌比例',
            x: 'center',
            y: 'top',
            textStyle: {
              fontSize: 26,
              fontWeight: 'bolder',
              color: 'black'
            }
          },
          legend: {
            orient: 'horizontal',
            x: 'center',
            y: 'bottom',
            itemWidth: 20,
            itemHeight: 10,
            textStyle: {
              color: '#666'
            },
            itemGap: 30,
            data: ['国内品牌','国外品牌']
          },


          series: [{
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            center: ['50%', '50%'],
            data: [
              {
                value: 335,
                name: '国外品牌'
              },
              {
                value: 600,
                name: '国内品牌'
              }
            ]
          }],

          color:["#87cefa","#ff7f50"],
        })
      },
      methods:{
        rem(){
          if(confirm("您确定要删除吗？")){
            alert("已删除")
          }
        },
    
        putoff(){
          if(confirm("您确定要下架该产品吗？")){
            alert("该商品已下架");
            document.querySelector(".off").style.backgroundColor="#ddd";
            document.querySelector(".off").innerHTML="上架";
          }
        }
      }
  
    }

</script>

<style scoped>
  /* 品牌管理下部分 */
  .brandBottom{
    width:98%;
    margin:0 auto;
    display: flex;
    border: 1px solid #ddd;
    margin-top:16px;
    justify-content: space-between;
  }
  .brandBottomleft{
    width:29.5%;
  }
  #brandBottomleftA{
    width:100%;
    height:410px;
    border:1px solid #ddd;
    position: relative;
  }
  .brandBottomright{
    width:70%;
    border:1px solid #ddd;
  }
  .brandBottomrightL{
    font-size:12px;
    width:98%;
    display: flex;
    margin:0 auto;
    height:56px;
    border:1px solid #ddd;
    justify-content: space-between;
    align-items: center;
    margin-top:5px;
  }
  .brandBottomrightA{
    display: flex;
  }

  .brandBottomrightA p{
    color:#fff;
    width:91px;
    height:37px;
    border-radius: 5px;
    text-align: center;
    line-height: 37px;
    margin-left:10px;
  }

  .brandBottomrightA p:nth-of-type(1){
    background: #438eb9;
  }

  .brandBottomrightA p:nth-of-type(2){
    background: #d15b47;
  }

  .brandBottomrightA p:nth-of-type(3){
    background: #6fb3e0;
  }

  .brandBottomrightA p:nth-of-type(4){
    background: #82af6f;
  }
  .brandBottomrightA p:hover{
    cursor: pointer;
  }
  .brandBottomrightB p{
    margin-right:15px;
    font-weight: 700;
  }

  table{
    width:98%;
    margin:0 auto;
    text-align: center;
    vertical-align: middle;
    border-collapse:collapse;
    margin-top:15px;
    margin-bottom:15px;
    overflow-y: auto;
    height:100px;
  }
  table th{
    background: #f4f4f4;
    height:67px;
  }
  table tr{
    height:67px;
  }
  table th{
    border:1px solid #ddd;
  }
  table tr td{
    border:1px solid #ddd;
    font-size:12px;
    height:67px;
  }
  table img{
    width:118px;
    height:82px;
  }

  .endGood{
    display:flex;
    align-items: center;
    justify-content: space-around;
    height:85px;
  }
  .endGood span{
    display: block;
    width:47px;
    height:30px;
    color:#fff;
    line-height: 30px;
  }
  .endGood span:nth-of-type(1){
    background: #21a237;
  }
  .endGood span:nth-of-type(2){
    background: #6fb3e0;
  }
  .endGood span:nth-of-type(3){
    background: #d15b47;
  }
  .endGood span:hover{
    cursor: pointer;
  }
  .productMsg{
    width:96%;
    margin:0 auto;
    border:1px solid #ddd;
  }
  .startGood{
    display: block;
    width:40px;
    height:20px;
    background: #82af6f;
    color:#fff;
    margin:0 auto;
  }
  .brandBottomr{
    overflow-y: auto;
    height:350px;
  }
</style>
