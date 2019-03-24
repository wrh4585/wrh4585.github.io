<template>
    <div class="history-Bottom">
      <table id="tttt">
        <tr>
          <th>排序</th>
          <th>内容</th>
          <th>操作时间</th>
          <th>备注</th>
        </tr>
        <tr v-for="item in date">
          <td>{{item.sort}}</td>
          <td>{{item.content}}</td>
          <td>{{item.operation}}</td>
          <td>{{item.remark}}</td>
        </tr>
      </table>
    </div>
</template>

<script>
    export default {
        name: "inforFive",
        data(){
          return{
            date:[
              {sort:'1',content:'添加了10个商品信息',operation:'2019-3-9 12:00',remark:'一个未保存成功'},
              {sort:'2',content:'添加了12个商品信息',operation:'2019-3-10 12:00',remark:'一个未保存成功'},
              {sort:'3',content:'添加了8个商品信息',operation:'2019-3-11 11:00',remark:'一个未保存成功'},
              {sort:'4',content:'添加了8个商品信息',operation:'2019-3-11 15:30',remark:'一个未保存成功'},
              {sort:'5',content:'添加了5个商品信息',operation:'2019-3-12 10:00',remark:'一个未保存成功'},
              {sort:'6',content:'添加了3个商品信息',operation:'2019-3-13 11:12',remark:'一个未保存成功'},
              {sort:'7',content:'添加了8个商品信息',operation:'2019-3-14 12:00',remark:'一个未保存成功'},
              {sort:'8',content:'添加了4个商品信息',operation:'2019-3-16 12:00',remark:'一个未保存成功'},
            ]
          }
        }
    }
</script>

<style scoped>
  .history-Bottom table{
    border: 1px solid #ddd;
  }
  .history-Bottom table tr:first-child th{
    height: 39px;
    line-height: 39px;
    border-right: 1px solid #ddd;
  }
  .history-Bottom{
    width: 98.5%;
    height: 234px;
    margin: 15px auto;
    border: 1px solid;
    overflow-x: auto;
    overflow-y: auto;
  }
  .history-Bottom::-webkit-scrollbar{
    width: 0;
    height: 0;
  }
  .history-Bottom table{
    width: 100%;
    height: 39px;
    border-collapse:collapse;
  }
  .history-Bottom table tr{
    width: 100%;
    height: 39px;
    border-bottom: 1px solid #ddd;
  }
  .history-Bottom table tr:last-child{
    border-bottom: none;
  }
  .history-Bottom table tr:first-child th{
    font-weight: 600;
    background: #f1f1f1;
  }
  .history-Bottom table tr td{
    height: 39px;
    font-weight: 100;
    line-height: 39px;
    text-align: center;
    border-right: 1px solid #ddd;
  }
  .history-Bottom table th:last-child{
    width: 25%;
    border-right: none;
  }
  .history-Bottom table th:nth-child(1){
    width: 10%;
  }
  .history-Bottom table th:nth-child(2){
    width: 50%;
  }
  .history-Bottom table th:nth-child(3){
    width: 15%;
  }
  .history-Bottom table td:last-child{
    width: 25%;
    border-right: none;
  }
  .history-Bottom table td:nth-child(1){
    width: 10%;
  }
  .history-Bottom table td:nth-child(2){
    width: 50%;
  }
  .history-Bottom table td:nth-child(3){
    width: 15%;
  }
</style>
