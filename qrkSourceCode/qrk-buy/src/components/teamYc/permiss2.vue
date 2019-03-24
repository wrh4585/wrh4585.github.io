<template>
  <div id="Regulate">
      <table id="Regu">
        <tr>
          <th>
            <input type="checkBox"/>
          </th>
          <th>权限名称</th>
          <th>人数</th>
          <th>用户名称</th>
          <th>描述</th>
          <th>操作</th>
        </tr>
        <tr v-for="item in date">
          <th>
            <input type="checkBox"/>
          </th>
          <th>{{item.name}}</th>
          <th>{{item.sex}}</th>
          <th>{{item.sss}}</th>
          <th>{{item.ccc}}</th>
          <th>
            <el-button type="text" class="AA">{{item.san}}</el-button>
            <el-button type="text" @click="open7" class="AA">{{item.nima}}</el-button>
          </th>
        </tr>
      </table>
  </div>
</template>

<script>
    export default {
      name: "permiss2",
      data() {
        return {
            date:[
              {name:'普通管理员',sex:'3',sss:'熏鹏刚',ccc:'拥有网站的系统大部分使用权限，没有权限管理功能。',san:'编辑',nima:'删除'},
              {name:'普通管理员',sex:'3',sss:'熏鹏刚',ccc:'拥有网站的系统大部分使用权限，没有权限管理功能。',san:'编辑',nima:'删除'},
              {name:'普通管理员',sex:'3',sss:'熏鹏刚',ccc:'拥有网站的系统大部分使用权限，没有权限管理功能。',san:'编辑',nima:'删除'},
              {name:'普通管理员',sex:'3',sss:'熏鹏刚',ccc:'拥有网站的系统大部分使用权限，没有权限管理功能。',san:'编辑',nima:'删除'},
              {name:'普通管理员',sex:'3',sss:'熏鹏刚',ccc:'拥有网站的系统大部分使用权限，没有权限管理功能。',san:'编辑',nima:'删除'},
              {name:'普通管理员',sex:'3',sss:'熏鹏刚',ccc:'拥有网站的系统大部分使用权限，没有权限管理功能。',san:'编辑',nima:'删除'},
            ],
        }
      },
      methods: {
        open7() {
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true
          }).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        },
      }
    }
</script>

<style scoped>
#tabb{
  width: 100%;
}
table{
  display: flex;
  font-size: 14px;
  font-weight: 100;
  border: 1px solid #ddd;
  flex-direction: column;
}
table tr{
  height: 50px;
  display: flex;
  color: #666666;
  align-items: center;
  border-bottom: 1px solid #ddd;
  justify-content: space-between;
}
table tr:last-child{
  border-bottom: none;
}
/*第二部分*/
#Regulate{
  width: 100%;
  height: 202px;
  /*border-top: 1px solid #ddd;*/
}
#Regulate table{
  width: 100%;
  overflow: hidden;
}
#Regu tr{
  width: 100%;
  height: 53px;
  text-align: center;
}
#Regu tr:first-child{
  height: 38px;
  border-top: none;
  background: #f2f2f2;
}
#Regu tr th{
  height: 100%;
  display: flex;
  align-items: center;
  border-right: 1px solid #ddd;
  justify-content: center;
}
#Regu tr th:first-child{
  width:5%;
}
#Regu tr th:nth-child(2){
  width: 10%;
}
#Regu tr th:nth-child(3){
  width: 5%;
}
#Regu tr th:nth-child(4){
  width: 30%;
}
#Regu tr th:nth-child(5){
  width: 30%;
}
#Regu tr th:nth-child(6){
  width: 20%;
}
#Regu .AA{
  width:46px;
  height:44px;
  color: white;
  display: flex;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
}
#Regu .AA:first-child{
  margin-right: 10px;
  background: #438eb9;
}
#Regu .AA:last-child{
  background: #d15b47;
}
</style>
