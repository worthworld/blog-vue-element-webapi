<template>
  <div class="app">
        <div class="main">
          <loading class="load" v-if="load"></loading>
          <div class="message-content" v-if="details">
            <div class="blog-title">
              <h1>{{ details.title }}</h1>
              <div class="blog-remarks flex-row row-center-wrapper">
                <div class="blog-msg">
                  <i class="el-icon-date"></i>
                  <span>{{ details.createTime }}</span>
                </div>
                <div class="blog-msg">
                  <i class="el-icon-view"></i>
                  <span>{{ details.views }}</span>
                </div>
                <div class="blog-msg">
                  <i class="el-icon-thumb"></i>
                  <span>{{ details.likes }}</span>
                </div>
                <div class="blog-msg">
                  <i class="el-icon-chat-line-square"></i>
                  <span>{{ messageList.length }}</span>
                </div>
              </div>
            </div>
            <div v-html="details.contents"></div>
            <div>
              <vue-clap-button v-if="flag" size="60" :clicked="isClicked" />
            </div>
          </div>
          <footer>
            <publicMessage
              :type="type"
              :messageList="messageList"
              @submitMsg="postMsg"
            ></publicMessage>
          </footer>
        </div>
  </div>
</template>

<script>
import publicMessage from "@/components/publicMessage";
import loading from "@/components/loading";
import vueClapButton from "vue-clap-button";

let that = {};
export default {
  data() {
    return {
      flag: false,
      isClicked: false,
      load: true,
      type: "comment",
      details: {},
      messageList: [],
      blogDetails: {
        title: "博客标题",
        html:
          "<div>我是内容呀</div><div>我是内容呀</div><div>我是内容呀</div><div>我是内容呀</div>",
      },
    };
  },
  components: { publicMessage, loading, vueClapButton },
  mounted() {
    that = this;
    that.getBlogDetails();
  },
  props: ["id"],
  methods: {
    // 获取博客
    async getBlogDetails() {
      const res = await that.$https.get("GetArticleDetails", {
        params: { id: that.id },
      });
      that.load = false;
      // console.log("axios:" + JSON.stringify(res.data));
      if (res.status === 200) {
        if (res.data.StatusCode === 0 && res.data.Data) {
          that.details = res.data.Data.details;
          // 暂时不支持用户上传头像，默认配置头像
          that.messageList = res.data.Data.messageList.map(item=>{
            item.avatar=that.$store.state.config.touristAvatar
            return item
          });
        } else {
          this.showMessage("warning", "服务器数据异常");
        }
      } else {
        this.showMessage("error", "服务器异常");
      }
    },
    // 评论
    async postMsg(nickName, msg) {
      let data = {
        nickName: nickName,
        createTime: null,
        contents: msg,
        type: "comment",
        articlesID: that.id,
      };
      let ret = await that.$https.post("addMessage", data, {
        headers: {"Content-Type": "application/x-www-form-urlencoded;charset=utf-8;"},
      });
      console.log(JSON.stringify(ret.data));
      if (ret.status == 200 && ret.data.Data) {
        this.showMessage("success", "评论成功");
        //后续改成 静态新增留言，不再访问浏览器刷新数据
        that.getBlogDetails();
      } else {
        this.showMessage("error", "服务器异常,留言失败");
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
.main {
  width: 100%;
  padding: 10px 70px 0;
  overflow: hidden;
  text-align: left;
  @media screen and (max-width: 500px) {
    padding: 15px;
  }
  .message-content {
    width: 1200px;
    margin: auto;
    overflow: hidden;
    box-shadow: 5px 5px 20px #cccaca;
    padding: 20px;
    margin-bottom: 30px;
    @media screen and (max-width: 500px) {
      width: 100%;
      padding: 10px;
    }
  }
  .blog-title {
    padding: 10px 0 20px;
    h1 {
      text-align: center;
      font-size: 32px;
    }
    .blog-remarks {
      color: #666;
      font-size:13px ;
      .blog-msg {
        padding: 10px 5px;
       i{
         margin-right: 3px;
       }
      }
    }
  }
}

footer {
  width: 100%;
}
</style>
