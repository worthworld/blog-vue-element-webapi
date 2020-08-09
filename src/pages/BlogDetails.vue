<template>
  <div class="app">
    <BackTop>
      <template v-slot:main>
          <div class="main">
        <div class="message-content">
          <div>
            <h2>{{blogDetails.title}}</h2>
          </div>
          <div v-html="blogDetails.html"></div>
        </div>
        <footer>
          <publicMessage :type="type" :messageList="messageList" @submitMsg="postMsg"></publicMessage>
        </footer>
        </div>
      </template>
    </BackTop>
  </div>
</template>

<script>
import publicMessage from "@/components/publicMessage";
import BackTop from "@/components/element/backtop";
export default {
  data() {
    return {
      type: "comment",
      messageList: [
        {
          id: 3,
          imgUrl: "/img/logo.jpg",
          nickName: "不耽误今天的美好",
          content: "我还是那个少年，没有一丝丝改变",
          createTime: "2020-07-09",
        },
        {
          id: 2,
          imgUrl: "/img/logo.jpg",
          nickName: "不负好时光",
          content: "言念君子，温其如玉",
          createTime: "2020-05-08",
        },
        {
          id: 1,
          imgUrl: "/img/logo.jpg",
          nickName: "相逢让个道",
          content: "话都是好话，可是落在实处门槛还是高了",
          createTime: "2020-04-06",
        },
      ],
      blogDetails: {
        title: "博客标题",
        html: "<div>我是内容呀</div><div>我是内容呀</div><div>我是内容呀</div><div>我是内容呀</div>",
      },
    };
  },
  components: { publicMessage, BackTop },
  mounted() {
    // console.log(this.id)
    // console.log(this.$route.params.id)
  },
  props: ["id"],
  methods: {
    getBlogDetails() {},
    postMsg(nickName, msg) {
      console.log("32:" + nickName, msg);
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
  h2{
     text-align: center;
  }
}
.message-content{
  width: 100%;
  overflow: hidden;
  box-shadow: 5px 5px 20px #cccaca;
  margin-bottom: 30px;
}
footer {
  width: 100%;
}
</style>