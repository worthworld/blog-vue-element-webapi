import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
// import './components/registerCompontent.js'

Vue.config.productionTip = false


Vue.prototype.$setTitle=function(title){
  if(title){
   document.title=store.state.config.htmlTitle+'-'+title
  }
  else{
   document.title=store.state.config.htmlTitle
  }
}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
