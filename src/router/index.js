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
  let isLogin=store.state.status.isLogin
  let path=to.path.indexOf('admin')>0
  if(path&&to.name!='login'&&!isLogin)
  {
   return next({path:'/admin/login'})
  }
  next(); 
})


export default router
