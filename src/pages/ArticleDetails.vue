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
                  <span>{{ details.likes}}</span>
                </div>
                <div class="blog-msg">
                  <i class="el-icon-chat-line-square"></i>
                  <span>{{ messageList.length }}</span>
                </div>
              </div>
            </div>
            <mavon-editor
            :value="details.contents"
            :subfield="false"
            :defaultOpen="preview"
            :boxShadow='false'
            :toolbarsFlag="false"
            :editable="false"
            :scrollStyle="true"
            :ishljs="true"
            :previewBackground='previewBackground'
            />
            <div class="like-box">
              <vue-clap-button class="clap-button" v-if="flag" 
              @clap="mylike('add')"  @cancel="mylike('reduce')"
              :size="60" :clicked="isClicked" />
              <span>{{details.likes+'人点赞'}}</span>
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
import * as storage from "@/utils/storage"
let Local=storage.Local
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
      navigation:true,
      preview:'preview',
      previewBackground:'#fff'
    };
  },
  components: { publicMessage, loading},
  created(){
     that = this;
     that.getBlogDetails();
  },
  mounted() {
    setTimeout(() => {
         that.isClicked=that.getLikeStatus() 
        that.flag=true
         console.log('初始化clicked:'+that.isClicked)
    }, 500);
 
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
          let detail=res.data.Data
          that.details = detail.details;
          // 暂时不支持用户上传头像，默认配置头像
          that.messageList = detail.messageList.map(item=>{
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
      let ret = await that.$https.post("addMessage", data);
      // console.log(JSON.stringify(ret.data));
      if (ret.status == 200 && ret.data.Data) {
        this.showMessage("success", "评论成功");
        //后续改成 静态新增留言，不再访问浏览器刷新数据
        that.getBlogDetails();
      } else {
        this.showMessage("waring", ret.data.Info);
      }
    },
    // 点赞
    async mylike(type) {
        // console.log('点赞')
        let data={ id: that.id,type:type }
        const res = await that.$https.post("likes", data);
      if (res.status === 200) {
        if (res.data.StatusCode === 0 && res.data.Data) {
            that.setMyLikes(type)
        } else {
          this.showMessage("warning", "点赞失败");
        }
      } else {
        this.showMessage("error", "服务器异常");
      }
    },
       //查看是否有点赞
     getLikeStatus(){
       let key='mylike_'+that.id
       let mylike=Local.get(key)
      //  console.log('storage:',mylike)
       return !!mylike
     },
    // 由于没有游客的功能，点赞使用localStorage
    setMyLikes(type){
     let key='mylike_'+that.id
      // console.log('type:',type)
      if(type==='add'){
        // console.log('add:',type)
        Local.set(key,that.id)
        that.details['likes']=that.details['likes']+1
      }
      else{
        Local.remove(key)
        that.details['likes']=that.details['likes']-1
      }
      that.getLikeStatus()
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
    padding:30px 20px;
    margin-bottom: 30px;
    @media screen and (max-width: 500px) {
      width: 100%;
      padding:20px 10px;
    }
  }
  .blog-title {
    padding-bottom:20px;
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
.like-box{
    width: 100%;
     text-align: center;
  .clap-button{
    margin: 5px auto;
  }
}
footer {
  width: 100%;
}
</style>
