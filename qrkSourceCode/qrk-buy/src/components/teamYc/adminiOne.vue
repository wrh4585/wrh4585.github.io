<template>
  <div class="install">
    <table cellspacing="0"cellpadding="0">
      <tr id="strator">
        <th class="Fuck" width="5%">
          <input type="checkbox" value="op"></input>
        </th>
        <th>登录名</th>
        <th>手机</th>
        <th>邮箱</th>
        <th>角色</th>
        <th>加入时间</th>
        <th>状态</th>
        <th>操作</th>
      </tr>
      <tr class="strator" v-for="item in date">
        <th class="Fuck">
          <input type="checkbox"></input>
        </th>
        <th>
          <span>{{item.login}}</span>
          <input type="text" value="" style="display:none"></input>
        </th>
        <th>
          <span>{{item.phone}}</span>
          <input type="text" value="" style="display:none"></input>
        </th>
        <th>
          <span>{{item.email}}</span>
          <input type="text" value="" style="display:none"></input>
        </th>
        <th>
          <span>{{item.role}}</span>
          <input type="text" value="" style="display:none"></input>
        </th>
        <th>
          {{item.join}}
        </th>
        <th>
          <span>{{item.state}}</span>
        </th>
        <th class="handle">
          <a href="javascript:;">{{item.block}}</a>
          <a href="javascript:;" onclick="changeContent(this)">{{item.compile}}</a>
          <a href="javascript:;" onclick="dele(this)">{{item.shanchu}}</a>
          <a href="javascript:;">{{item.lock}}</a>
        </th>
      </tr>
    </table>
  </div>
</template>

<script>
    export default {
        name: "adminiOne",
      components: {},
      data(){
        return{
          date:[
            {login:'admin123',phone:'13567878908',email:'676773651@qq.com',role:'超级管理员',join:'2019-3-12 10:23:23',state:'已启用',
              block:'停用',compile:'编辑',shanchu:'删除',lock:'查看'},
            {login:'saaseaa',phone:'13920704856',email:'676773651@qq.com',role:'普通管理员',join:'2019-3-12 10:23:23',state:'已启用',
              block:'停用',compile:'编辑',shanchu:'删除',lock:'查看'},
            {login:'wsdfccgg',phone:'13567878908',email:'676773651@qq.com',role:'栏目编辑员',join:'2019-3-12 10:23:23',state:'已启用',
              block:'停用',compile:'编辑',shanchu:'删除',lock:'查看'}
          ],
        }
      }
    }
</script>

<style scoped>
  .install{
    width: 100%;
  }
  .install table{
    width: 100%;
    border-collapse: collapse;
  }
  .install table tr th{
    border: 1px solid #ddd;
  }
  #strator th{
    height: 38px;
    /*border: 1px solid #ddd;*/
    background-color: #f2f2f2;
    /*border-collapse: collapse;*/
  }
  .install table tr th{
    height: 55px;
  }
  .handle a{
    width: 44px;
    height: 42px;
    color: white;
    line-height: 42px;
    margin-top: 6px;
    border-radius: 3px;
    display: inline-block;
  }
  .handle a:first-child{
    background: #82af6f;
  }
  .handle a:nth-child(2){
    background: #438eb9;
  }
  .handle a:nth-child(3){
    background: #d15b47;
  }
  .handle a:last-child{
    background: #72b63f;
  }
</style>
