<template>
  <div class="goods">
    <div id="editor" type="text/plain" style="width:1000px;height:300px;"></div>
  </div>
</template>

<script>
    export default {
        name: "addgoodsPic",
      data () {
        return {
          ue: '',
          uedata: [],
          xierudata: []
        }
      },
      mounted() {
        this.ue = UE.getEditor('editor',{
          BaseUrl: '',
          UEDITOR_HOME_URL: '../../../static/utf8-jsp/',
        });
      },
      updated(){
        this.ue = UE.getEditor('editor').render('editor');
      },
      methods: {
        submits(){
          this.uedata.push(UE.getEditor('editor').getContent());
          console.log(this.uedata.join("\n"));
        },
        xieru(){
          UE.getEditor('editor').setContent('欢迎使用ueditor');
        }
      }

    }
</script>

<style scoped>
    .goods{
      width:90%;
      margin:10px auto 0;
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
