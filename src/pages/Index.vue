<template>
<div>
    <header class="blog-head">
     <div class="blog-logo" @click="toIndex()">
     <img src="/img/logo.jpg"/>
     </div>
     <nav class="blog-nav flex-row row-between-wrapper">
      <router-link class="nav-item" to="/pages/main">文章</router-link>
      <router-link class="nav-item" to="/pages/note">随笔</router-link>
      <router-link class="nav-item" to="/pages/book">收藏</router-link>
      <router-link class="nav-item" to="/pages/message">留言板</router-link>
     </nav>
    </header>
      <!-- <el-divider></el-divider> -->
       <router-view/>
</div>
</template>

<script>
export default {
    methods:{
      toIndex(){
      this.$router.push({path:'/'})
      }
    }
}
</script>

<style lang="less" scoped>
  .blog-head{
      position: relative;
      height: 70px;
      width: 90%;
      margin:0 auto 30px;
      padding: 10px 0 15px ;
      line-height: 1.5em;
      font-size: 18px;
      border-bottom:1px solid #DCDFE6 ;
    @media screen and (max-width: 500px){
      height: 60px;
      widows: 100%;
      margin: 5px 15px 15px;
      padding: 5px 0 20px ;
    }
    .blog-logo{
      // margin:12px 0 0 10px;
      margin-left: 10px;
      position: absolute;
      left: 0;
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
       position: absolute;
       right: 0;
       width: 40%;
       display: flex;
     @media screen and (max-width:500px){
          width: 70%;
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
</style>