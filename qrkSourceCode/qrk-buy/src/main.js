// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/css/public.css'
import '../static/css/iconfont.css'
import './assets/css/iconfont.css'
//引入富文本编辑器
import  VueQuillEditor from 'vue-quill-editor'
//引入富文本编辑器
import '../static/utf8-jsp/ueditor.config'
import '../static/utf8-jsp/ueditor.all'
import '../static/utf8-jsp/lang/zh-cn/zh-cn'

//引入Echarts
import echarts from 'echarts'
Vue.prototype.echarts = echarts
Vue.use(echarts)
// require styles 引入样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor)

//引入font-awesome
import 'font-awesome/css/font-awesome.min.css'
import store from './store/index'

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
