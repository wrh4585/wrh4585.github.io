<template>
  <div class="addBrand">
    <form action="" name="addForm">
      <p><span>*</span>品牌名称：<input type="text" name="brandName"></p>
      <p><span>*</span>品牌序号：<input type="text" name="id"></p>
      <p class="pic"><span>*</span>品牌图片：<input type="file" name="brandPic"></p>
      <p><span>*</span>所属地区：<input type="text" name="brandAreas"></p>
      <p><span>*</span>品牌描述：<textarea name="msg" cols="30" rows="10"></textarea></p>
    </form>
    <div class="add">
      <span @click="baocun">保存</span>
      <span>取消</span>
      <router-link to="/khtBrand"><span id="back">返回</span></router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "addBrand",
      methods:{
          baocun(){
            var formData=new FormData(document.querySelector("form[name=addForm]"));
            var xhr=new XMLHttpRequest();
            xhr.open("post","http://10.35.170.4:800/addbrand");
            xhr.send(formData);
            xhr.onload=function(ev){
              console.log(formData);
              console.log(xhr.responseText);
              if(xhr.status===200){
                  document.addForm.reset();
              }
            }

          }
      }

    }
</script>

<style scoped>
    .addBrand{
      width:80%;
      margin:0 auto;
    }

    .pic{
      display: flex;
    }
    form span{
      color:red;
    }
    form p{
      margin-top:15px;
      font-size:16px;
    }
    .add{
      display: flex;
      justify-content:left;
    }
  .add span{
    display: block;
    width:70px;
    height:33px;
    color:#fff;
    text-align: center;
    line-height: 33px;
    border-radius: 4px;
    margin-left:10px;
    margin-top:20px;
  }
  .add span:nth-of-type(1){
    background: #2c9cef;
  }
    .add span:nth-of-type(2){
      background: #3c763d;
    }
    #back{
      background: #a94442;
    }
    .add span:hover{
      cursor: pointer;
    }
  form input{
    height:25px;
    outline: none;
  }
</style>
