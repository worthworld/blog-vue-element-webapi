<template>
  <div>
    <div class="search-box flex-row row-center">
      <input
        v-model="searchValue"
        list="blogs"
        :style="inputStyle"
        placeholder="请输入关键词搜索"
      />
      <datalist id="blogs" v-if="dtList && dtList.length > 0">
        <option
          v-for="item in dtList"
          :key="item.id"
          :value="item.title"
        ></option>
      </datalist>
      <button
        @click="submit"
        :style="submitStyle"
        class="el-icon-search submit"
      ></button>
      <!-- <i  style="color:#fff" ></i>
             </div> -->
    </div>

    <div class="statement">
      <div class="avatar">
       <img src="/img/header.jpg" alt="worthworld" />
       <h2>WorthWorld</h2>
      </div>
      <div class="placard">
        <h3 class="placard-title">公告</h3>
       <p class="introduce">
        这里是worthworld的个人博客，记录前端所学；
        如果内容对你有帮助，欢迎点赞、评论、留言。
      </p>
      </div>
      <div class="myInformation">
        <p>联系我：1135257206@qq.com</p>
        <a href="https://github.com/worthworld" target="_blank">
        <img src="/icon/github.jpg"/>
        </a>
      </div>
    </div>

    <el-divider class="tag"></el-divider>
    <div class="tag">
      <h3>标签云</h3>
      <ul class="tagList flex-row row-left row-shrink">
        <li class="tag-item" v-for="item in tagList" :key="item.id" 
         :style="item.id==tagID?submitStyle:''" @click="changeTag(item.id)">
          {{ item.name }}
        </li>
      </ul>
    </div>
    <el-divider></el-divider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: "",
      inputStyle: {
        border: "1px solid " + this.searchColor,
      },
      submitStyle: {
        backgroundColor: this.searchColor,
      },
      tagList: [
        { id:0,name:'全部'},
        { id: 3, name: "学习总结" },
        { id: 4, name: "移动端" },
        { id: 5, name: "性能优化" },
        { id: 6, name: "网络相关" },
        { id: 7, name: "vue" },
        { id: 8, name: "JavaScript" },
        { id: 9, name: "css" },
        { id: 10, name: "Webpack" },
      ],
      tagID:0
    };
  },
  props: {
    dtList: {
      type: Array,
      default: () => {
        return [];
      },
    },
    searchColor: { type: String, default: "#409EFF" },
  },
  mounted() {
    console.log("searchColor:" + JSON.stringify(this.searchColor));
    //  console.log('dtList:'+JSON.stringify(this.dtList))
  },
  methods: {
    submit() {
      this.$emit("searchInput", this.searchValue);
    },
    changeTag(tagID){
      this.tagID=tagID
      this.$emit('selectTag',tagID)
    }
  },
};
</script>
<style lang="less" scoped>
@radius: 5px;
.search-box {
  width: 90%;
  height: 35px;
  margin: 0 0 30px;
  @media screen and(max-width: 500px) {
    margin: 0 auto 20px;
  }
  input {
    width: 99%;
    height: 100%;
    font-size: 14px;
    padding-left: 7px;
    border-top-left-radius: @radius;
    border-bottom-left-radius: @radius;
  }
  .submit {
    width: 45px;
    flex-shrink: 0;
    color: #fff;
    font-size: 24px;
    border-top-right-radius: @radius;
    border-bottom-right-radius: @radius;
  }
}
.statement{
  width: 100%;
  font-size: 15px;
  line-height: 25px;
  background-color: #fff;
  text-align: left;
  box-shadow: 5px 5px 20px #c0bebe;
  .avatar{
    text-align: center;
    padding-top: 30px ;
    @media screen and(max-width: 500px){
      display: none;
    }
    img{
      width: 120px;
      border-radius: 50%;
    }
  }
  .placard{
    padding: 20px;
    .placard-title{
      display: none;
     @media screen and(max-width: 500px){
       text-align: center;
      display:block;
    }
    }
    .introduce{
      text-indent: 2em;
    }
  }
  .myInformation{
    background-color:#eee ;
    padding: 20px;
    p{
      margin-bottom: 6px;
    }
    img{
      width: 30px;
      border-radius: 50%;
    }
  }
}
.tag{
     @media screen and(max-width: 500px){
      display:none;
    }
}
.tagList{
  flex-wrap: wrap;
  padding: 0 10px;
 .tag-item{
    padding:5px 10px;
    margin: 10px 10px 0 0;
    background-color: #e5e5e5;
    border-radius: 5px;
  }
  .tag-item:hover{
    cursor: pointer;
  }
}

</style>
