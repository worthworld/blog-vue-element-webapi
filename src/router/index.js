import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router.js'
import store from '../store'
Vue.use(VueRouter)
const originalPush=VueRouter.prototype.push
VueRouter.prototype.push=function push(location){
  return originalPush.call(this,location).catch(err=>{console.log('router/index:'+err)})
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  next(); 
})


export default router
