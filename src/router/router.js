import Index from '@/views/Index'
import Home from '@/views/Home'
import Error404 from '@/views/Error'

export default [
    // 有背景的流星
    {
      path:'/home',
      name:'home',
      component:Home,
      meta:{
        title:'首页'
      }
    },
    //博客内容页
    {
      path:'/views/:pages/:id',
      name:'views',
      component:Index,
      props: true   
    },
    //初始页面，
    {
      path:'/',
      redirect:'/home'
    },
    //找不到页面时，跳转至该页面
    {
      path:'*',
      name:'Error404',
      component:Error404
    }
]