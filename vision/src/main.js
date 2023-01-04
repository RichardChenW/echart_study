import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
// 请求基准路径配置
// axios.defaults.baseURL = "http://127:0:0.1:8888/api"
// 引入router
import VueRouter from 'vue-router'
import router from './router'

// 将axios挂载到Vue原型上
// 在别的组件中 this.$http
Vue.prototype.$http = axios

// 将全局的 echarts 对象挂载到 vue 的原型上，其他组件也可以使用 echarts
Vue.prototype.$echarts = window.echarts

// 引入全局样式
import "./assets/css/global.css"

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
