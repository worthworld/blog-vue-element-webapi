<template>
  <div class="main-box">
    <main class="main flex-row row-center">
      <aside class="aside">
        <blog-sidebar
          :dtList="blogList"
          @searchInput="getSearch"
          @selectTag="selectTag"
          :searchColor="baseColor[stateId]"
        ></blog-sidebar>
      </aside>
      <article class="article">
        <!-- showList.length==0&& -->
        <blog-loading class="load" v-if="load"></blog-loading>
        <ul v-if="showList.length > 0">
          <router-link
            class="blog-list"
            tag="li"
            v-for="item in showList.slice(
              (pageIndex - 1) * pageSize,
              pageIndex * pageSize
            )"
            :key="item.id"
            :to="{ name:'views', params: {pages:'articledetails', id: item.id } }"
          >
          <!-- :to="{name:'views',params:{pages:'articles',id:0}}" -->
            <span>{{ item.createTime }}</span>
            {{item.title }}
          </router-link>
        </ul>
      </article>
    </main>
    <footer class="footer">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="pageSize"
        :total="showList.length > 0 ? showList.length : 80"
        :pager-count="5"
        @current-change="pageChange"
      >
      </el-pagination>
    </footer>
  </div>
</template>

<script>
let that = {};
export default {
  name:'artcle',
  data() {
    return {
      load: true,
      blogList: [],
      showList: [],
      titleList: [],
      pageSize: 8,
      pageIndex: 1,
      baseColor: ["#81e6c4",'#409EFF'],
    };
  },
  props:['stateId'],
  created() {
    that = this;
  },
  mounted() {
     this.getGlogList();
  },
  computed:{

  },
  watch: {
    showList(newVal) {
      if (newVal.length == 0) {
        this.showMessage("info", "没有找到数据");
      }
    },
      '$route'(){
        //兼容路由变化，刷新数据
        this.getGlogList();
      }
  },
  methods: {
    // 获取文章列表
    async getGlogList() {
      let params={state:that.stateId}
      const res = await this.$https.get("GetArticles", {
         params
      });
      that.load = false;
      //  console.log('axios:'+JSON.stringify(res.data))
      if (res.status === 200) {
        if (res.data.StatusCode === 0) {
          //日期去除年，保留月日  08-02
          if (res.data.Data.length > 0) {
            let dataList = res.data.Data.map((item) => {
              item.createTime = item.createTime.slice(5, 10);
              return item;
            });
            that.blogList = dataList;
            that.showList = dataList;
          } else {
            this.showMessage("info", "没有找到数据");
          }
        } else {
          this.showMessage("warning", "服务器数据异常");
        }
      } else {
        this.showMessage("error", "服务器异常");
      }
    },
    // 分页按钮
    pageChange(val) {
      this.pageIndex = val;
    },
    // 搜索文章
    getSearch(ret) {
      this.showList = this.blogList.filter((item) => {
        if (item.title.includes(ret)) {
          return item;
        }
      });
    },
    // 标签筛选文章
    selectTag(ret) {
      if (ret == 0) {
        that.showList = that.blogList;
      } else {
        that.showList = that.blogList.filter((item) => {
          let arr = item.tagsID.split(",");
          // console.log(arr);
          // console.log(arr.indexOf(ret.toString()));
          return arr.indexOf(ret.toString()) != -1;
        });
      }
    },
    //提示
    showMessage(type, msg) {
      this.$message({
        message: msg || "请求异常",
        type: type || "info",
        duration: 3000,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.main-box {
  margin: auto;
  width: 1200px;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
  .main {
    // min-height: 100vh;
    flex-shrink: 0;
    flex-wrap: wrap;
    @media screen and (max-width: 500px) {
      padding: 10px 15px 0;
      // min-height: 90vh;
    }
    .aside {
      // border:1px solid red;
      width: 34%;
      min-width: 200px;
      padding-left: 30px;
      @media screen and (max-width: 500px) {
        width: 100%;
        padding-left: 0;
      }
    }
    .article {
      order: -1;
      width: 60%;
      margin-right: 20px;
      @media screen and (max-width: 500px) {
        order: 2;
        width: 100%;
        margin-right: 0;
      }
      @media screen and(min-width:700px ) {
        .load {
          margin-top: 100px;
        }
      }
      .blog-list {
        position: relative;
        margin-bottom: 30px;
        background-color: #fff;
        box-shadow: 5px 5px 20px #cccaca;
        border-left: 12px solid #64a58f;
        text-align: left;
        padding: 30px 20px 40px 130px;
        transform: 0.4s;
        @media screen and (max-width: 500px) {
          margin-bottom: 20px;
          font-size: 16px;
          padding: 20px 20px 30px 100px;
        }
        span {
          position: absolute;
          left: 40px;
          color: #878787;
        }
      }
      .blog-list:hover {
        border-left: 12px solid #81e6c4;
        transform: scale(1.03);
      }
    }
  }
  .footer {
    padding: 20px 0;
  }
}
</style>
