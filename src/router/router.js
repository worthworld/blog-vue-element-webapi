import ViewIndex from '@/views/Index'
import Home from '@/views/Home'
import About from '@/views/About'
import PagesIndex from '@/pages/Index'
import PagesMain from '@/pages/main'
import AdminIndex from '@/admin/Index';
import AdminMain from '@/admin/main'
import Error404 from '@/views/Error'

export default [
    {
        path:'/views',
        redirect:'/views/home',
        component:ViewIndex,
        meta:{
        title:'test-demo'
        },
      children:[
        {
          path: 'home',
          name: 'Home',
          component: Home,
          meta:{
            title:'主页'
          }
        },
        {
          path: 'about',
          name: 'About',
          component:About,
          // component: () => import('@/views/About.vue'),
          meta:{
            title:'关于'
          }
        }
      ]
    },
  
    // pc
    {
      path:'/pages',
      redirect:'/pages/main',
      component:PagesIndex,
      children:[
        {
          path:'main',
          name:'blog-main',
          component:PagesMain,
          meta:{
            title:'博客首页'
          }
        },
      ]
    },
  
    // mobile
  
    
    // 后台管理系统
    {
      path:'/admin',
      component:AdminIndex,
      redirect:'/admin/index',
      children:[
        {
          path:'main',
          name:'admin-system',
          component:AdminMain,
          meta:{
            title:'后台管理系统'
          }
        },
  
      ]
    },
  
  
    {
      path:'/',
      redirect:'/views'
    },
    {
      path:'*',
      name:'Error404',
      component:Error404
    }
]