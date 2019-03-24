<template>
    <div class="usermod">
      <div class="mod-one">
        <a href="javascript:;">
          <span class="iconfont icon-shanchu1">{{mod.msg}}</span>
        </a>
        <a href="javascript:;">
          <span class="iconfont icon-xiugai">{{mod.msga}}</span>
        </a>
        <a href="javascript:;">
          <span class="iconfont icon-shanchu">{{mod.msgs}}</span>
        </a>
      </div>
      <canva-three></canva-three>
    </div>
</template>

<script>
    import CanvaThree from "./canvaThree";
    export default {
        name: "canvaTwo",
      components: {CanvaThree},
      data(){
          return{
            mod:{
              msg:'删除用户',
              msga:'修改用户',
              msgs:'关闭用户'
            }
          }
        }
    }
</script>

<style scoped>
  .usermod{
    margin-top: 15px;
    padding-left: 10px;
    height: 418px;
    border: 1px solid #ddd;
  }
  .mod-one{
    width: 100%;
    height: 57px;
    display: flex;
    align-items: center;
  }
  .mod-one a{
    width: 95px;
    height: 30px;
    color: white;
    display: flex;
    margin-left: 10px;
    border-radius: 3px;
    align-items: center;
  }
  .mod-one a span{
    padding-left: 8px;
    padding-right: 5px;
  }
  .mod-one a:first-child{
    background: #d15b47;
  }
  .mod-one a:nth-child(2){
    background: #438eb9;
  }
  .mod-one a:last-child{
    background: #82af6f;
  }

</style>
