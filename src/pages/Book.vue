<template>
    <div class="main-box">
     
     
    <main class="main flex-row row-center">
        <aside class="aside">
         <search  :dtList="blogList" @searchInput="getSearch" :searchColor="baseColor"></search>
    
        </aside>
        <article class="article">
        <ul>
          <a :href="item.linkUrl" target="_blank" :key="item.id"
          v-for="item in showList.slice((pageIndex-1)*pageSize,pageIndex*pageSize)" >
          <li class="blog-list" >
          <span>{{item.date}}</span>
          {{item.title}}
            </li>
         </a>
        </ul>
    </article>
     </main>
     <footer class="footer">
         <el-pagination  background layout="prev, pager, next"   :page-size="pageSize"
          :total="showList.length>0?showList.length:80" :pager-count="5" @current-change="pageChange">
        </el-pagination>
     </footer>
    </div>
</template>

<script>
import axios from 'axios'
import search from '@/components/search'
export default {
    data(){
        return {
            type:0,
            blogList:[{id:1,title:'2020年前端总结',date:'4-12',linkUrl:'https://www.baidu.com'},{id:2,title:'实验室',date:'4-12',linkUrl:'https://www.stonemei.cn'}
            ,{id:3,title:'前端劝退师',date:'2019-4-16',linkUrl:'www.imoc.com'}],
            showList:[{id:1,title:'2020年前端总结',date:'4-12',linkUrl:'https://www.baidu.com'},{id:2,title:'实验室',date:'4-12',linkUrl:'https://www.stonemei.cn'}
            ,{id:3,title:'前端劝退师',date:'2019-4-16',linkUrl:'https://www.imoc.com'}],
            titleList:[],
            pageSize:8,
            pageIndex:1,
            baseColor:'#E6A23C'
        }
    },
    components:{
     search 
    },
    mounted(){
    
    },
    methods:{
        pageChange(val){
           this.pageIndex=val
        },
        getGlogList(){

            axios.get('').then({

            })
        },
        getSearch(ret){
         this.showList=(this.blogList.filter(item=>{
             if(item.title.includes(ret))
             {
                return item;
             }
         }))
        }
    }
}
</script>

<style lang="less" scoped>
.main-box{
  width: 100%;
  .main{
  padding: 10px 70px 0;
  min-height: 100vh;
  flex-shrink: 0;
  flex-wrap: wrap;
  @media screen and (max-width: 500px){
  padding:10px 15px 0 ;
  min-height: 90vh;
  }
  .aside{
    // border:1px solid red;
    width: 34%;
    padding-right: 30px;
    @media screen and (max-width: 500px){
    width: 100%;
    padding-right:0;
    }
  }
  .article{
    width: 60%;
    margin-left: 20px;
   @media screen and (max-width: 500px){
    width: 100%;
    margin-left: 0;
  }
  .blog-list{
    display: block;
    position: relative;
    margin-bottom: 30px;
    background-color: #FFF;
    box-shadow: 5px 5px 20px #cccaca;
    border-left: 12px solid #c29044;
    text-align: left;
    padding:30px 20px 40px 130px ;
    transform: 0.4s;
   @media screen and (max-width: 500px){
    margin-bottom: 20px;
    font-size: 16px;
    padding: 20px 20px 30px 100px;
  }
    span{
        position:absolute;
        left: 40px;
        color:#878787 ;
    }
  }
  .blog-list:hover{
      border-left: 12px solid #e6a23c;
      transform: scale(1.03);
  }
  }

  }
  .footer{
      padding:20px 0;
  }
}

</style>