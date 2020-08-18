import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import ajax from '@/utils/http'
import '@/plugins/element.js'
import {Message} from 'element-ui'

// import '@/css/global.js'
// import './components/registerCompontent.js'

Vue.config.productionTip = false
Vue.prototype.$message=Message   //弹出提示信息
Vue.prototype.$https=ajax

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
