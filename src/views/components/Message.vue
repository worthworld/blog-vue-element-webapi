<template>
    <div class="app">
          <div>
          <blog-publishmessage :type="type" :messageList="messageList" @submitMsg="postMsg"></blog-publishmessage>
        </div>
    </div>
</template>

<script>
let that;
export default {
    name:'message',
    data(){
      return{
            type:'message',
            messageList:[
            {id:3,imgUrl:'/img/logo.jpg',nickName:'不耽误今天的美好',content:'我还是那个少年，没有一丝丝改变',createTime:'2020-07-09'},
            {id:2,imgUrl:'/img/logo.jpg',nickName:'不负好时光',content:'言念君子，温其如玉',createTime:'2020-05-08'},
            {id:1,imgUrl:'/img/logo.jpg',nickName:'相逢让个道',content:'话都是好话，可是落在实处门槛还是高了',createTime:'2020-04-06'}
        ]
      }
    },
   props:['stateId'],
    // components:{publicMessage},
    mounted(){
      that=this
      that.getMsg()
    },
    methods:{
     async getMsg(){
       let ret=await that.$https.get('GetLeaveMessage');
       if(ret.status==200){
         if(ret.data.Data.length>0){
            that.messageList=ret.data.Data.map(item=>{
            item.avatar=that.$store.state.config.touristAvatar
            return item
          });
         }
         else{
           this.showMessage("info", "还没有留言");
         }
       }
       else{
            this.showMessage("error", "服务器异常");
       }
     },
     // 评论
    async postMsg(nickName, msg) {
      let data = {
        nickName: nickName,
        createTime: null,
        contents: msg,
        type: "leave",
        articlesID: 0,
      };
      let ret = await that.$https.post("addMessage", data);
      // console.log(JSON.stringify(ret.data));
      if (ret.status == 200 && ret.data.Data) {
        this.showMessage("success", "留言成功");
        //后续改成 静态新增留言，不再访问浏览器刷新数据
        that.getMsg();
      } else {
        this.showMessage("waring", ret.data.Info);
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
    }
}
</script>
<style lang="less" scoped>
  .app{
  // padding: 10px 70px 0;
  margin: auto;
  width: 1200px;
  min-height: 100vh;
  @media screen and (max-width: 500px){
  padding:10px 15px 20px ;
  min-height: 90vh;
  width: 100%;
   }
  }
</style>