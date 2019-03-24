<template>
  <div class="addgoodscontent">
    <form  name="advForm" class="advForm1234">
    <p><span>*</span>&nbsp&nbsp标题名称:&nbsp&nbsp&nbsp<input type="text" name="name" style="width:500px;">
    </p>
    <p><span>*</span>&nbsp&nbsp简单描述:&nbsp&nbsp&nbsp<input type="text" name="msg" style="width:500px;"></p>
    <p><span>*</span>&nbsp&nbsp关键字:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input type="text" name="keyword" style="width:100px;">请用,分隔关键字</p>
    <p><span>*</span>&nbsp&nbsp选择分类:&nbsp&nbsp&nbsp<select name="type" style="width:100px; height:30px">
      <option value="食品">食品</option>
      <option value="保健">保健</option>
      <option value="酒">酒</option>
      <option value="饮料">饮料</option>
      <option value="数码影像">数码影像</option>
    </select>
    </p>
    <div class="release">
      <p><span>*</span>&nbsp&nbsp<input type="checkbox">新品发布</p>
      <p><input type="checkbox">限时促销</p>
      <p><input type="checkbox">特价处理</p>
      <div class="relA">
        <p class="releaseA" @click="showCont">添加分类</p>
        <a href="##" v-if="!show"><input type="text"><span id="rela">&nbsp该分类最多添加10个</span></a>
      </div>
    </div>
    <p><span>*</span>&nbsp&nbsp商品原价:&nbsp&nbsp&nbsp<input type="text" name="oprice" style="width:100px">&nbsp&nbsp元</p>
    <p><span>*</span>&nbsp&nbsp商品现价:&nbsp&nbsp&nbsp<input type="text" name="nprice" style="width:100px">&nbsp&nbsp元</p>
      <p><span>*</span>&nbsp&nbsp商品数量:&nbsp&nbsp&nbsp<input type="text" name="ku" style="width:100px">&nbsp&nbsp个
      <p class="sell"><span>*</span>&nbsp&nbsp是否上架:&nbsp&nbsp&nbsp<input type="radio" value="是" name="status" checked >是 <input type="radio" name="status">否</p>
    <p class="eval">允许评价:&nbsp&nbsp&nbsp<input type="checkbox"></p>
    <div class="addPic">
      <p @click="add">+</p>
      <div class="addpicB" v-for="(item,i) of items" v-model="items[i]" :key="i">
        <p id="addpicD"><input type="file" name="pic"></p>
        <p @click="remov">X</p>
      </div>
    </div>
      <div id="editor" type="text/plain" style="width:1000px;height:300px;"></div>
      <div class="caozuo">
        <span id="add" @click="jia">保存并提交</span>
        <span>保存草稿</span>
        <span>取消添加</span>
      </div>

    </form>
  </div>
</template>

<script>

    export default {
        name: "addgoodsContent",
      data(){
          return {
            items:[""],
            show:true
          }
      },
      methods:{
          add(){
            if(this.items.length<=7){
               this.items.push('')
            }else{
              alert("亲，最多可传8张图片")
            }
          },
          remov(){
            if(this.items.length>1){
              this.items.pop("")
            }else{
              alert("最少保留1张图片")
            }

          },

        //控制添加分类框的显示和消失
        showCont(){
            this.show=!this.show;
        },

        jia(){
          var formdata = new FormData(document.querySelector("form[name=advForm]"));
          var xhr = new XMLHttpRequest();
          xhr.open("post","http://10.35.170.4:800/addpro");
          xhr.send(formdata);
          xhr.onload=function (ev) {
            if(xhr.status===200){
                console.log(formdata);
                console.log(xhr.responseText);
                document.advForm.reset();
                alert(xhr.responseText)
            }

          }
        }
      }
    }
</script>

<style scoped>
  /* 添加商品 */

  .addgoodscontent{
    width:90%;
    margin:0 auto;
  }
  .advForm1234{
    text-align: left;
  }
  .advForm1234 p input[type="text"]{
    display: inline-block;
    height: 30px;
    width: 250px;
  }
  .addgoodscontent span{
    color:red;
  }
  .addgoodscontent p{
    font-size:14px;
    margin-top:15px;
  }
  .release{
    display: flex;
  }
  .release p{
    display: flex;
    align-items: center;
  }
  .releaseA{
    width:74px;
    height:30px;
    background: #438eb9;
    color:#fff;
    text-indent: 9px;
    line-height: 30px;
    margin-left: 15px;
  }
  .addpicB{

    display: flex;
  }
  .addPic{
    display: flex;
    flex-wrap: wrap;
  }
  .addPic input{
    display: block;
  }
  .addPic p:nth-of-type(1){
    width:38px;
    height:38px;
    background: #438eb9;
    text-align: center;
    line-height: 38px;
    color:#fff;
    font-weight: 700;
  }
  .addpicB p:nth-of-type(1){
    width:85px;
    height:38px;
    text-align: center;
    border:1px solid #ddd;
    margin-left: 8px;
    margin-right: 8px;
  }
  .addpicB p:nth-of-type(2){
    width:38px;
    height:38px;
    text-align: center;
    line-height: 38px;
    border:1px solid #ddd;
    font-weight: 700;
  }
  .addPic input{
    margin-top:7px;
    margin-left:7px;
  }
  #addpicD{
     background:none;
   }
  .relA{
    position: relative;
  }
  .relA a{
    position:absolute;
    top:50px;
    left:60px;
    display: block;
  }
  #rela{
    color:black;
  }

  form input{
    height:25px;
    outline:none;
  }

  .sell{
    display: flex;
    align-items: center;
  }

  .eval{
    display: flex;
    align-items: center;
  }
  .caozuo span{
    display: block;
    width:150px;
    height:37px;
    text-align: center;
    line-height: 37px;
    color:#fff;
    border-radius: 5px;
    margin-right:10px;
  }
  .caozuo span:nth-of-type(1){
    background: #2c9cef;
  }
  .caozuo span:nth-of-type(2){
    background: #d58512;
  }
  .caozuo span:nth-of-type(3){
    background: #8c8c8c;
  }
  .caozuo span:hover{
    cursor: pointer;
  }

  .caozuo{
    display: flex;
    justify-content: flex-start;
    margin-top:15px;
    margin-left: 240px;
  }
</style>
