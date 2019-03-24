<template>
    <div id="Edit">
      <table border="1" cellspacing="0" cellpadding="0">
        <tr id="someTr">
          <th>
            <input type="checkbox"/>
          </th>
          <th>用户名</th>
          <th>真实姓名</th>
          <th>性别</th>
          <th>电话</th>
          <th>邮箱</th>
          <th>地址</th>
          <th>加入时间</th>
          <th>等级</th>
          <th>状态</th>
          <th>编辑</th>
        </tr>
        <tr v-for="item in date">
          <th>
            <input type="checkbox" />
          </th>
          <th>{{item.username}}</th>
          <th>{{item.realname}}</th>
          <th>{{item.sex}}</th>
          <th>{{item.phone}}</th>
          <th>{{item.email}}</th>
          <th>{{item.site}}</th>
          <th>{{item.time}}</th>
          <th>{{item.grade}}</th>
          <th class="Qi">
            <a href="javascript:;">
              {{item.initiate}}
            </a>
          </th>
          <th class="Xiu">
            <a href="javascript:;">{{item.block}}</a>
            <a href="javascript:;">{{item.compile}}</a>
            <a href="javascript:;">{{item.delete}}</a>
          </th>
        </tr>
      </table>
    </div>
</template>

<script>
    export default {
        name: "canvaThree",
        data(){
          return{
            date:[
              {username:'汇海天堂',realname:'熏鹏刚',sex:'男',phone:'13456655656',
                email:'676773651@qq.com',site:'高老庄',time:'2019-03-15',grade:'高级用户',initiate:'启用',
                block:'停用',compile:'编辑',delete:'删除'
              },
              {username:'汇海天堂',realname:'熏鹏刚',sex:'男',phone:'13456655656',
                email:'676773651@qq.com',site:'高老庄',time:'2019-03-15',grade:'高级用户',initiate:'启用',
                block:'停用',compile:'编辑',delete:'删除'
              },
              {username:'汇海天堂',realname:'熏鹏刚',sex:'男',phone:'13456655656',
                email:'676773651@qq.com',site:'高老庄',time:'2019-03-15',grade:'高级用户',initiate:'启用',
                block:'停用',compile:'编辑',delete:'删除'
              },
              {username:'汇海天堂',realname:'熏鹏刚',sex:'男',phone:'13456655656',
                email:'676773651@qq.com',site:'高老庄',time:'2019-03-15',grade:'高级用户',initiate:'启用',
                block:'停用',compile:'编辑',delete:'删除'
              },
              {username:'汇海天堂',realname:'熏鹏刚',sex:'男',phone:'13456655656',
                email:'676773651@qq.com',site:'高老庄',time:'2019-03-15',grade:'高级用户',initiate:'启用',
                block:'停用',compile:'编辑',delete:'删除'
              },
            ]
          }
        }
    }
</script>

<style scoped>
#Edit table tr:first-child{
  background-color: #F2F2F2;
}
#Edit table tr:first-child th{
  height: 42px;
}
#Edit{
  width: 100%;
  height: 359px;
}
table{
  width:100%;
  border: 1px solid #ddd;
  border-collapse: collapse;
}
#someTr th{
  height: 38px;
}
#Edit table tr th{
  height: 55px;
}

/*#Edit table tr th{*/
  /*height: 100%;*/
  /*width: 188px;*/
  /*display: flex;*/
  /*align-items: center;*/
  /*justify-content: center;*/
  /*border-right: 1px solid;*/
/*}*/
#Edit table tr th:first-child{
  width: 5%;
}
.Xiu{
  align-items: center;
  justify-content: center;
}
.Xiu a{
  display: inline-block;
  width: 46px;
  height: 30px;
  color: white;
  margin-left: 5px;
  line-height: 30px;
  border-radius: 5px;
}
.Xiu a:first-child{
  background: #21a237;
}
.Xiu a:nth-child(2){
  background: #6fb3e0;
}
.Xiu a:last-child{
  background: #d15b47;
}
</style>
