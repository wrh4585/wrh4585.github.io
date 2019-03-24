<template>
    <div class="amend">
      <a href="javascript:;" @click="Xin()" id="click">{{Amend.msg}}</a>
      <a href="javascript:;">{{Amend.msga}}</a>
      <a href="javascript:;" @click="BAO()" id="Bao">{{Amend.msgs}}</a>
    </div>
</template>

<script>
    export default {
        name: "inforTwo",
        data(){
          return{
            Amend:{
              msg:'修改信息',
              msga:'修改密码',
              msgs:'保存修改'
            }
          }
        }
    }
</script>

<style scoped>
  .amend{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .amend a{
    width: 84px;
    height: 39px;
    color: white;
    font-size: 14px;
    margin-top: 25px;
    line-height: 39px;
    border: 1px solid;
    border-radius: 5px;
    text-align: center;
  }
  .amend a:nth-child(1){
    margin-right: 10px;
    background: #d15b47;
  }
  .amend a:nth-child(2){
    margin-right: 10px;
    background: #72b63f;
  }
  .amend a:nth-child(3){
    display: none;
    background: #226e9a;
  }
</style>
