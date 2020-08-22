<template>
<div>
    <header class="blog-head">
      <div class="head-nav flex-row row-between row-bottom">
     <div class="blog-logo" @click="toIndex()">
     <img src="/img/logo.jpg"/>
     </div>
     <nav class="blog-nav flex-row row-between-wrapper">
      <div class="nav-item" :class="{'active-item':stateId==0}" @click="changeView('articles',0)" >文章</div>
      <div class="nav-item" :class="{'active-item':stateId==1}" @click="changeView('articles',1)" >归档</div>
      <div class="nav-item" :class="{'active-item':stateId==2}" @click="changeView('book',2)" >收藏</div>
      <div class="nav-item" :class="{'active-item':stateId==3}" @click="changeView('message',3)" >留言板</div>
     </nav>
     </div>
    </header>
     <div class="main">
        <component :is="currentView" :stateId='stateId'></component>
     </div>
      
</div>
</template>

<script>
import articles from './components/Article'
import book from './components/Book'
import message from './components/Message'
import articledetails from './components/ArticleDetails'

export default {
    props:['pages','id'],
    computed:{
        currentView(){
          return this.pages
        },
        stateId(){
          return this.id
        }
    },
    components:{articles,book,message,articledetails},
    methods:{
       // 切换子组件页面
      changeView(pages,id){
        let index=parseInt(id)
        this.$router.push({params:{pages:pages,id:index}})
      },
       // 返回首页
      toIndex(){
      this.$router.push({path:'/'})
      },
    }
}
</script>

<style lang="less" scoped>
  .blog-head{
      height: 80px;
      width: 90%;
      margin:0 auto 30px;
      padding: 10px 0 15px ;
      line-height: 1.5em;
      font-size: 18px;
      border-bottom:1px solid #DCDFE6 ;
    @media screen and (max-width: 500px){
      height: 70px;
      width: 100%;
      margin: 15px 0;
      padding: 5px 20px 10px ;
    }
     .head-nav{
        width: 1200px;
        height: 100%;
        margin: auto;
        @media screen and (max-width: 500px){
        width: 100%;
        }
      }
    .blog-logo{
      height: 50px;
      width: 50px;
      border-radius: 50%;
      overflow: hidden;
      cursor: pointer;
      img{
          width: 100%;
      }
      }
   
    .blog-nav{
       width: 40%;
     @media screen and (max-width:500px){
          width: 80%;
      }
      // a{
       .nav-item{
        margin-top: 10px;
        padding-bottom: 10px;
        border-bottom: solid transparent 3px;
        cursor: pointer;
       }
      //  .router-link-active{ router-link-active 为router-link的class
        .nav-item{
         color: #000 !important;
       }
       .nav-item.active-item:nth-of-type(1){
         border-bottom: solid #81e6c4 3px;
       }
       .nav-item.active-item:nth-of-type(2){
         border-bottom: solid  #409EFF 3px;
       }
       .nav-item.active-item:nth-of-type(3){
         border-bottom: solid #E6A23C 3px;
       }
        .nav-item.active-item:nth-of-type(4){
         border-bottom: solid #F56C6C 3px;
       }
       a:link{
         color:#989ca3;
       }
       a:visited{
         color: #989ca3;
       }
       a:hover{
         color:#FB7777;
       }
    }

  }
  .main{
    width: 100%;
    min-width:1200px;
    margin: auto;
    @media screen and(max-width: 500px){
    min-width:200px;
    }
  }
</style>