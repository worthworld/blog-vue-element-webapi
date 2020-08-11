import ViewIndex from '@/views/Index'
import Home from '@/views/Home'
import About from '@/views/About'
import PagesHome from '@/pages/Home'
import PagesIndex from '@/pages/Index'
import PagesArticle from '@/pages/Article'
import PagesNote from '@/pages/Note';
import PagesBook from '@/pages/Book'
import PagesMessage from '@/pages/Message';
import PagesBlogDetails from '@/pages/BlogDetails';
import AdminIndex from '@/admin/Index';
import AdminMain from '@/admin/Main'
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
      path:'/pages/home',
      component:PagesHome,
      meta:{
        title:'首页'
      }
    },
    {
      path:'/pages',
      redirect:'/pages/article',
      component:PagesIndex,
      children:[
        {
          path:'article',
          name:'blog-article',
          component:PagesArticle,
          meta:{
            title:'文章'
          }
        },
        {
          path:'note',
          name:'blog-note',
          component:PagesNote,
          meta:{
            title:'随笔'
          }
        },
        {
          path:'book',
          name:'blog-book',
          component:PagesBook,
          meta:{
            title:'收藏'
          }
        },
        {
          path:'message',
          name:'blog-message',
          component:PagesMessage,
          meta:{
            title:'留言板'
          }
        },
        {
          path:'blogdetails',
          name:'blog-details',
          component:PagesBlogDetails,
          props:true,
          meta:{
            title:'文章详情页'
          }
        }

      ]
    },
   
  
    
    // 后台管理系统
    {
      path:'/admin',
      component:AdminIndex,
      beforeEnter:(to,from,next)=>{
        if(localStorage.getItem('token'))
        {
          next()
        }
        else{
          next({path:'Login'})
        }
      },
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
      redirect:'/pages/home'
    },
    {
      path:'*',
      name:'Error404',
      component:Error404
    }
]