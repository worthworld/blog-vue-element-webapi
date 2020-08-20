import ViewIndex from '@/views/Index'
import Home from '@/views/Home'
import About from '@/views/About'
import Add from '@/views/Add'
import Edit from '@/views/Edit'
import PagesHome from '@/pages/Home'
import PagesIndex from '@/pages/Index'
import PagesArticle from '@/pages/Article'
import PagesPigeonhole from '@/pages/Pigeonhole';
import PagesBook from '@/pages/Book'
import PagesMessage from '@/pages/Message';
import PagesArticleDetails from '@/pages/ArticleDetails';

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
          meta:{
            title:'关于'
          }
        },
        {
          path: 'add',
          name: 'add',
          component: Add,
          meta:{
            title:'新增'
          }
        },
        {
          path: 'edit',
          name: 'edit',
          component:Edit,
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
          path:'pigeonhole',
          name:'blog-pigeonhole',
          component:PagesPigeonhole,
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
          path:'articleDetails/:id',
          name:'article-details',
          component:PagesArticleDetails,
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