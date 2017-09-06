import 'babel-polyfill'

import Vue from 'vue'
import App from './App'
import router from './router'

/* 解决 Web 移动端点击延迟 300 毫秒 */
import FastClick from 'fastclick'
FastClick.attach(document.body)

Vue.config.productionTip = false
/* 编译 stylus */
import 'assets/stylus/index.styl'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
