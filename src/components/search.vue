<template>
    <div>
          <div class="search-box flex-row row-center">
             <input v-model="searchValue" list="blogs" :style="inputStyle" 
             placeholder="请输入关键词搜索" />
            <datalist id="blogs" v-if="dtList&&dtList.length>0">
                <option v-for="item in dtList" :key="item.id" :value="item.title"></option>
            </datalist>
             <button @click="submit" :style="submitStyle" class="el-icon-search submit"></button>
               <!-- <i  style="color:#fff" ></i>
             </div> -->
          </div>

          <div class="placard">
            <h3>公告</h3>
            <span>
              这里是worthworld的个人博客，如果内容对你有帮助，欢迎大家在文章后面评论
            </span>
            <br/>
            <span>               
              github主页:<a href="https://github.com/worthworld" target="_blank">github连接</a>
            </span>
          </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
       searchValue:'',
       inputStyle:{
         border:'1px solid '+this.searchColor
       },
       submitStyle:{
         backgroundColor:this.searchColor
       }
        }
    },
    props:{
        dtList:{type:Array,default:()=>{return []}},
        searchColor:{type:String,default:'#409EFF'}
        },
    mounted(){
      console.log('searchColor:'+JSON.stringify(this.searchColor))
      //  console.log('dtList:'+JSON.stringify(this.dtList))
    },
    methods:{
      submit(){
        this.$emit('searchInput',this.searchValue)
      }
    }
}
</script>
<style lang="less" scoped>
@radius:5px;
.search-box{
  width: 90%;
  height: 35px;
  margin: 0 0 30px;
  @media screen and(max-width: 500px){
    margin: 0 auto 20px;
  }
  input{
  width: 99%;
  height: 100%;
  font-size: 14px;
  padding-left: 7px;
  border-top-left-radius:@radius;
  border-bottom-left-radius: @radius;
  }
  .submit{
  width: 45px;
  flex-shrink: 0;
  color: #fff;
  font-size: 24px;
  border-top-right-radius: @radius;
  border-bottom-right-radius: @radius;
  }
}
.placard{
  width: 100%;
  font-size: 15px;
  line-height: 25px;
  padding:20px 10px ;
  background-color: #fff;
  text-align: left;
  box-shadow: 5px 5px 20px #c0bebe;
  h3{
  padding-bottom:5px ;
  }
}
</style>