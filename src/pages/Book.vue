<template>
    <div class="main-box">
     
     
    <main class="main flex-row row-center row-top">
        <aside class="aside">
         <sidebar  :dtList="blogList" @searchInput="getSearch" :searchColor="baseColor"></sidebar>
    
        </aside>
        <article class="article">
               <loading class="load" v-if="load"></loading>
        <ul v-if="showList.length>0">
          <a :href="item.url" target="_blank" :key="item.id"
          v-for="item in showList.slice((pageIndex-1)*pageSize,pageIndex*pageSize)" >
          <li class="blog-list" >
          <span>{{item.createTime}}</span>
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
import sidebar from '@/components/sidebar'
import loading from '@/components/loading'
let that={}
export default {
    data(){
        return {
            load:true,
            params:{type:'文章'},
            blogList:[],
            showList:[],
            pageSize:8,
            pageIndex:1,
            baseColor:'#E6A23C'
        }
    },
    components:{
     sidebar,loading 
    },
    mounted(){
      that=this
      that.getGlogList()
    },
    methods:{
        pageChange(val){
           this.pageIndex=val
        },
        async getGlogList(){
           let ret=await that.$https.get('GetBooks');
           that.load=false
           if(ret.status==200){
               if(ret.data.Data.length>0){
                let dataList=ret.data.Data.map(item=>{
                     item.createTime = item.createTime.slice(5, 10);
              return item;
                 })
                 that.blogList=dataList
                 that.showList=dataList
               }
               else{
                   that.showMessage("info", "还没有收藏哦~");
               }
           }
           else{
         that.showMessage("error", "服务器异常");
           }
        },
        getSearch(ret){
         this.showList=(this.blogList.filter(item=>{
             if(item.title.includes(ret))
             {
                return item;
             }
         }))
        },
        //提示
       showMessage(type, msg) {
      this.$message({
        message: msg || "请求异常",
        type: type || "info",
        duration: 3000,
      });
    },
    }
}
</script>

<style lang="less" scoped>
.main-box{
  margin: auto;
  width: 1200px;
  @media screen and (max-width: 500px){
    width:100%;
  }
  .main{
  // min-height: 100vh;
  flex-shrink: 0;
  flex-wrap: wrap;
  @media screen and (max-width: 500px){
  padding:10px 15px 0 ;
  // min-height: 90vh;
  }
  .aside{
    // border:1px solid red;
    width: 34%;
    min-width: 200px;
    padding-left: 30px;
    @media screen and (max-width: 500px){
    width: 100%;
    padding-left:0;
    }
  }
  .article{
    order: -1;
    width: 60%;
    margin-right: 20px;
   @media screen and (max-width: 500px){
    order: 2;
    width: 100%;
    margin-right: 0;
  }
   @media screen and(min-width:700px ){
     .load{
      margin-top: 100px;
    }
   }
   a{
     color: #555;
   }
  .blog-list{
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