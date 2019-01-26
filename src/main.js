import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ELEMENT from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import router from './router/index.js'
import store from './store'

import '@/icons' // icon
import '@/permission' // permission control

Vue.use(ELEMENT)

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app1')
