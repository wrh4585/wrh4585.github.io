
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/teamLeaderY/khtIndex'
import AddGoods from '@/components/teamLeaderY/khtAddgood'
import classManage from '@/components/teamLeaderY/khtClassification'
import Brand from '@/components/teamLeaderY/khtAddbrand'
import Classification from '@/components/teamLeaderY/khtBrand'
import Refund from '@/components/teamLeaderY/khtRefund'
import Census from '@/components/teamLeaderY/khtCensus'
import Logistics from '@/components/teamLeaderY/khtLogistics'

import systemSet from '@/components/teamZy/sysSet'
import systemLog from '@/components/teamZy/sysLog'
import article from '@/components/teamZy/article'
import payManage from '@/components/teamZy/payM'
import paySet from '@/components/teamZy/payP'
import adminSetting from '@/components/teamYc/permissionSetting'
import adminiStrator from '@/components/teamYc/adminiStrator'
import info from '@/components/teamYc/inforMation'
import vip from '@/components/teamYc/canva'

import dealCharts from '@/components/chartsFor/jiaoyiManage'
import OrderMassage from '@/components/chartsFor/dingdanMassage'
import soHot from '@/components/chartsFor/soHot'

import login from '@/pages/managesLogin'
import sle from '@/components/selects'


Vue.use(Router)

export default new Router({

    routes: [
        // {
        //     path: '/login',
        //     name: '登录',
        //     component:login
        // },
        {
            path: '/sle',
            name: '登录',
            component:sle
        },
        {
            path: '/index',
            name: '首页',
            component:index,
        },
        {
            path: '/AddGoods',
            name: '添加商品',
            component: AddGoods
        }, {
            path: '/Brand',
            name: '品牌管理',
            component: Brand
        }, {
            path: '/Classification',
            name: '商品分类',
            component: Classification
        }, {
            path: '/Refund',
            name: '退款管理',
            component: Refund
        },
        {
            path: '/Census',
            name: '交易统计',
            component: Census
        },
        {
            path: '/Logistics',
            name: '物流管理',
            component: Logistics
        },
        {
            path: '/systemSet',
            name: '系统设置',
            component: systemSet
        },
        {
            path: '/systemLog',
            name: '系统日志',
            component: systemLog
        },
        {
            path: '/article',
            name: '文章管理',
            component:article
        },
        {
            path: '/payManage',
            name: '支付管理',
            component:payManage
        },
        {
            path: '/paySet',
            name: '支付设置',
            component:paySet
        },
        {
            path: '/classManage',
            name: '分类管理',
            component:classManage
        },
        {
            path: '/adminSetting',
            name: '权限设置',
            component:adminSetting
        },
        {
            path: '/adminiStrator',
            name: '管理员设置',
            component:adminiStrator
        },
        {
            path: '/info',
            name: '管理员信息',
            component:info
        },
        {
            path: '/vip',
            name: '会员信息',
            component:vip
        },
        {
            path: '/dealCharts',
            name: '成交统计',
            component:dealCharts
        },
        {
            path: '/OrderMassage',
            name: '订单信息',
            component:OrderMassage
        },
        {
            path: '/soHot',
            name: '搜索热度',
            component:soHot
        },
    ]
})
