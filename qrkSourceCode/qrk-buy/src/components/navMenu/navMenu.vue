<template>
	<el-row class="tac primaryColor" style="height: 100%">
		<el-col :span="24">
			<h5 class="colorChoose">
				<span>自定义主题</span>
				<i class="fa fa-hand-o-right"></i>
				<el-color-picker  @change="colorChange" v-model="colors.primary" id="checkColor" ></el-color-picker>
			</h5>
			<el-menu
					default-active=""
					class="el-menu-vertical-demo primaryColor"
					text-color="#fff"
					unique-opened
					router
					active-text-color="#41a2ff"
			>
				<el-submenu
						v-for="item of menu"
						:index="item.id"
						:key="item.id"
				>
					<template slot="title">
						<i :class="item.claName"></i>
						<span style="margin-left: 10px">{{item.name}}</span>
					</template>
					<el-menu-item-group class="over-hide">
						<el-menu-item
								v-for="sub of item.sub"
								:index="sub.componentName"
								:key="sub.componentName"
								@click="clickMenu(sub.componentName)"
								style="padding-left:60px"
						>
							{{sub.name}}
						</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
			</el-menu>
		</el-col>
	</el-row>
</template>

<script>
	import menu from '../../../config/menu-config.js'
	import objectAssign from "object-assign";
	import generateColors from "../../utils/color";
	export default {
		name: 'navMenu',
		methods: {
			clickMenu(componentTitle) {
				this.openedTab = this.$store.state.openedTab
				// tabNum 为当前点击的列表项在openedTab中的index，若不存在则为-1
				let tabNum = this.openedTab.indexOf(componentTitle)
				// console.log(tabNum)
				// console.log(this.openedTab)
				// console.log(this.$store.state.openedTab)
				if (tabNum === -1) {
					// 该标签当前没有打开
					// 将componentName加入到已打开标签页state.openedTab数组中
					this.$store.commit('addTab', componentTitle)
				} else {
					// 该标签是已经打开过的，需要激活此标签页
					this.$store.commit('changeTab', componentTitle)
				}
			},
			colorChange(e) {
				if(!e)return;
				localStorage.setItem('color',e)
				this.primaryColor = this.colors.primary;
				this.colors = objectAssign(
					{},
					this.colors,
					generateColors(this.colors.primary)
				);
				this.writeNewStyle();
			},
			writeNewStyle() {
				let cssText = this.originalStyle;
				Object.keys(this.colors).forEach(key => {
					cssText = cssText.replace(
						new RegExp("(:|\\s+)" + key, "g"),
						"$1" + this.colors[key]
					);
				});
				if (this.originalStylesheetCount === document.styleSheets.length) {
					// 如果之前没有插入就插入
					const style = document.createElement("style");
					style.innerText =
						".primaryColor{background-color:" + this.colors.primary + "}" + cssText;
					document.head.appendChild(style);
				} else {
					// 如果之前没有插入就修改
					document.head.lastChild.innerText =
						".primaryColor{background-color:" +
						this.colors.primary +
						"} " +
						cssText;
				}
			},
			getIndexStyle(url) {
				let that = this;
				var request = new XMLHttpRequest();
				request.open("GET", url);
				request.onreadystatechange = function() {
					if (
						request.readyState === 4 &&
						(request.status == 200 || request.status == 304)
					) {
						// 调用本地的如果拿不到会得到html,html是不行的
						if (request.response && !/DOCTYPE/gi.test(request.response)) {
							that.originalStyle = that.getStyleTemplate(request.response);
							that.writeNewStyle()
						} else {
							that.originalStyle = "";
						}
					} else {
						that.originalStyle = "";
					}
				};
				request.send(null);
			},
			getStyleTemplate(data) {
				const colorMap = {
					"#3a8ee6": "shade-1",
					"#409eff": "primary",
					"#53a8ff": "light-1",
					"#66b1ff": "light-2",
					"#79bbff": "light-3",
					"#8cc5ff": "light-4",
					"#a0cfff": "light-5",
					"#b3d8ff": "light-6",
					"#c6e2ff": "light-7",
					"#d9ecff": "light-8",
					"#ecf5ff": "light-9"
				};
				Object.keys(colorMap).forEach(key => {
					const value = colorMap[key];
					data = data.replace(new RegExp(key, "ig"), value);
				});
				return data;
			}
		},
		data() {
			return {
				menu: menu,
				openedTab: [],
				originalStylesheetCount: -1,//记录当前已引入style数量
				originalStyle: "",//获取拿到的.css的字符串
				colors: {
					//颜色选择器默认颜色值,这个值要和element-variables一样
					primary: "#0e6094"
				},
				// primaryColor: "", //提交成功后设置默认颜色
				cssUrl: [
					"../../../node_modules/element-ui/lib/theme-chalk/index.css",
					"../../../static/css/index.css"
				]
			}
		},
		mounted() {
			// 默认从线上官方拉取最新css,2秒钟后做一个检查没有拉到就从本地在拉下
			let that = this;
			// 如果是记住用户的状态就需要，在主题切换的时候记录颜色值，在下次打开的时候从新赋值
			// this.colors.primary = localStorage.getItem('color')||this.colors.primary//例如
			this.colors.primary =this.colors.primary//例如
			this.getIndexStyle(this.cssUrl[0]);
			setTimeout(function() {
				// if (that.originalStyle) {
				// 	return;
				// } else {
				// 	that.getIndexStyle(that.cssUrl[0]);
				// }
				that.getIndexStyle(that.cssUrl[0]);
			}, 100);
			this.$nextTick(() => {
				// 获取页面一共引入了多少个style 文件
				this.originalStylesheetCount = document.styleSheets.length;
			});
			// console.log(this.menu)
			// console.log(this.openedTab)
		}
	}
</script>

<style scoped>
	.over-hide{
		/*overflow-x:hidden;*/
		background-color: floralwhite;
	}
	.over-hide li{
    width: 100%;
  }
	.colorChoose{
		height: 50px;
		width: 209px;
		color: #000;
		line-height: 50px;
		background-color: #ffffff;
		font-size: 20px;
		display: -webkit-flex;
		align-items: center;
		justify-content: center;
	}
	.colorChoose i{
		color: #393939;
		font-size: 20px;
		margin: 0 10px;
	}
	
</style>
