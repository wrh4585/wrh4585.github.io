module.exports = [{
	name: '系统首页/HOME',
	claName:'fa fa-home',
	id: 'styIndex',
	sub: [{
			name: '系统首页/Home',
			componentName: 'index'
	}]
}, {
	name: '商品/PRODUCTS',
	claName:'fa fa-desktop',
	id: 'products',
	sub: [
		{
			name: '添加商品/AddGoods',
			componentName: 'AddGoods'
		},
		{
			name: '品牌管理/Brand',
			componentName: 'Brand'
		},
		{
			name: '商品分类/Classification',
			componentName: 'Classification'
		},
		{
			name: '分类管理/ClassManage',
			componentName: 'classManage'
		}
	]
},
	{
		name: '交易管理/DEAL',
		claName:'fa fa-database',
		id: 'deal',
		sub: [
			// {
			// 	name: '订单管理',
			// 	componentName: 'test1'
			// },
			{
				name: '退款管理/Refund',
				componentName: 'Refund'
			},
			{
				name: '交易统计/Census',
				componentName: 'Census'
			},
			// {
			// 	name: '订单处理',
			// 	componentName: 'test4'
			// },
			{
				name: '物流管理/Logistics',
				componentName: 'Logistics'
			}
		]
	},
	{
		name: '支付管理/PAY',
		claName:'fa fa-credit-card',
		id: 'pay',
		sub: [
			{
				name: '支付管理/payManage',
				componentName: 'payManage'
			},
			{
				name: '支付配置/paySet',
				componentName: 'paySet'
			},

		]
	},
	{
		name: '系统管理/STSTEM',
		claName:'fa fa-cogs',
		id: 'sysTem',
		sub: [
			{
				name: '系统设置/systemSet',
				componentName: 'systemSet'
			},
			{
				name: '系统日志/systemLog',
				componentName: 'systemLog'
			},
		]
	},
	{
		name: '文章管理/AREICLE',
		claName:'fa fa-file',
		id: 'article',
		sub: [
			{
				name: '文章设置/article',
				componentName: 'article'
			}
		]
	},
	{
		name: '人员管理/ADMIN',
		claName:'fa fa-users',
		id: 'admin',
		sub: [
			{
				name: '权限设置/adminSetting',
				componentName: 'adminSetting'
			},
			{
				name: '管理员设置/adminiStrator',
				componentName: 'adminiStrator'
			},
			{
				name: '管理员信息/info',
				componentName: 'info'
			}
		]
	},
	{
		name: '会员管理/VIP',
		claName:'fa fa-user',
		id: 'vip',
		sub: [
			{
				name: '会员/vip',
				componentName: 'vip'
			}
		]
	},
	{
		name: '报表管理/CHART',
		claName:'fa fa-bar-chart',
		id: 'chart',
		sub: [
			{
				name: '交易统计/dealCharts',
				componentName: 'dealCharts'
			},
			{
				name: '订单统计/OrderMassage',
				componentName: 'OrderMassage'
			},
			{
				name: '热度统计/soHot',
				componentName: 'soHot'
			}
		]
	},
	// {
	// 	name: '广告管理/ADV',
	// 	claName:'fa fa-file-image-o',
	// 	id: 'advertising',
	// 	sub: [
	// 		{
	// 			name: '广告列表',
	// 			componentName: 'test3'
	// 		},
	// 		{
	// 			name: '广告分类',
	// 			componentName: 'test4'
	// 		}
	// 	]
	// },
	// {
	// 	name: '单页管理/SINGLE',
	// 	claName:'fa fa-file-text',
	// 	id: 'single',
	// 	sub: [
	// 		{
	// 			name: '商城列表',
	// 			componentName: 'test3'
	// 		}
	// 	]
	// },
	// {
	// 	name: '前端管理/WEBPAGE',
	// 	claName:'fa fa-language',
	// 	id: 'qianduan',
	// 	sub: [
	// 		{
	// 			name: '栏目管理',
	// 			componentName: 'test3'
	// 		}
	// 	]
	// },
	// {
	// 	name: '留言管理/MASSAGE',
	// 	claName:'fa fa-file-audio-o',
	// 	id: 'massageLeave',
	// 	sub: [
	// 		{
	// 			name: '留言反馈',
	// 			componentName: 'test3'
	// 		},
	// 		{
	// 			name: '消息通知',
	// 			componentName: 'test4'
	// 		}
	// 	]
	// },
	// {
	// 	name: '店铺管理/SHOPS',
	// 	claName:'fa fa-laptop',
	// 	id: 'shops',
	// 	sub: [
	// 		{
	// 			name: '店铺管理',
	// 			componentName: 'test3'
	// 		}
	// 	]
	// },
]
