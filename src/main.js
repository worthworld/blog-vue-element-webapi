import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import ajax from '@/utils/http'
import '@/plugins/element.js'
import {Message} from 'element-ui'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import vueClapButton from "vue-clap-button";
import "vue-clap-button/dist/vue-clap-button.js";
// import '@/css/global.js'
// import './components/registerCompontent.js'
Vue.use(vueClapButton)
Vue.use(mavonEditor)
Vue.config.productionTip = false
Vue.prototype.$message=Message   //弹出提示信息
Vue.prototype.$https=ajax        //请求

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
