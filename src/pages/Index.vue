<template>
<div>
    <header class="blog-head">
      <div class="head-nav flex-row row-between row-bottom">
     <div class="blog-logo" @click="toIndex()">
     <img src="/img/logo.jpg"/>
     </div>
     <nav class="blog-nav flex-row row-between-wrapper">
      <router-link class="nav-item" to="/pages/article">文章</router-link>
      <router-link class="nav-item" to="/pages/pigeonhole">归档</router-link>
      <router-link class="nav-item" to="/pages/book">收藏</router-link>
      <router-link class="nav-item" to="/pages/message">留言板</router-link>
     </nav>
     </div>
    </header>
     <div class="main">
        <router-view/>
     </div>
      
</div>
</template>

<script>

export default {
    methods:{
      toIndex(){
      this.$router.push({path:'/'})
      }
    },
    created(){

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
       a{
        margin-top: 10px;
        padding-bottom: 10px;
        border-bottom: solid transparent 3px;
       }
       .router-link-active{
         color: #000 !important;
       }
       .router-link-active:nth-of-type(1){
         border-bottom: solid #81e6c4 3px;
       }
       .router-link-active:nth-of-type(2){
         border-bottom: solid  #409EFF 3px;
       }
       .router-link-active:nth-of-type(3){
         border-bottom: solid #E6A23C 3px;
       }
        .router-link-active:nth-of-type(4){
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