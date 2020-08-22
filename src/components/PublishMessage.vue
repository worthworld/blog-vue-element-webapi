<template>
    <div class="app flex-row row-shrink" :class="{'comment-box':hasComment}">
         <!-- :class="hasComment?'comment-box':''" -->
    <div class="showMessage" v-if="messageList.length>0">
      <div class="message-item flex-row row-middle"  v-for="item in messageList" :key="item.id">
      <div class="message-left row-shrink">
          <img :src="item.avatar" alt="">
      </div>
      <div class="message-right">
          <div>{{item.nickName}}</div>
          <div class="message-content flex-row row-between">
              <span>{{item.contents}}</span>
              <span class="flex-row row-right row-bottom row-shrink">{{item.createTime}}</span>
         </div>
      </div>
        </div>
   </div>

    <div class="input-box ">
        <el-input
        class="input-nick"
        type="text"
        placeholder="输入您的昵称"
        v-model="nickName"
        maxlength="10"
        show-word-limit
        >
        </el-input>
        <div style="margin: 15px 0;"></div>
        <el-input
        type="textarea"
        :placeholder="placeholder"
        v-model="inputMsg"
        maxlength="50"
        show-word-limit
        >
        </el-input>
         <div style="margin: 15px 0;"></div>
          <el-button @click="clickButton" size='small'>{{msg}}</el-button>
   </div>

       </div>
</template>

<script>
import utils from "@/utils/utils"
let that,debounce;
export default {
    data(){
        return {
          placeholder:'请输入内容',
          msg:'提交',
          nickName:this.$store.state.status.nickName,
          inputMsg:'',
          inputScale:'90%',
          hasComment:true,
          defaultImg:'/img/logo.jpg'
        }
    },
    props:{type:String,
           messageList:{type:Array,default(){
             return []  }}
          },
    mounted(){
       that=this
       if(that.type=='comment'){
        that.placeholder='输入评论内容'
        that.msg='提交评论'
        that.hasComment= true
       }
       else{
        that.placeholder='输入留言内容'
        that.msg='发布留言'
        that.hasComment= false
       }
    },
    methods:{
        clickButton(){
            // 防抖函数，避免频繁点击
            utils.debounce(that.submit)
        },
        submit(){
          if(that.nickName=='') return that.openPrompt('请输入您的昵称');
          if(that.inputMsg=='') return that.openPrompt('请'+that.placeholder);
         that.$store.commit('set_nickName',that.nickName)
         that.$emit('submitMsg',that.nickName,that.inputMsg)
         that.inputMsg=''
        },
        openPrompt(msg){
                that.$message({
                showClose:true,
                message:msg,
                type:'waring'
            })
        }
    }
}
</script>
<style lang="less" scoped>
@imgScale:40px;
.app{
   flex-wrap: wrap;
   text-align: left;
   width: 1200px;
   margin: auto;
   padding: 20px 20px 30px;
   overflow: hidden;
  @media screen and (max-width:500px) {
     padding: 15px;
     width:100%;
    }
    .input-box{  
        width: 38%;
       @media screen and (max-width: 500px){
        width: 100%;
       }
    .input-nick{
        width: 60%;
    }
    }
    .showMessage{
       width: 60%;
       padding-right: 50px;
       @media screen and (max-width: 500px){
        width: 100%;
        padding-right:0px;
       }
       .message-item{
        padding-bottom: 15px;
        margin-bottom: 15px;
        border-bottom: 1px solid #cccaca;
        .message-left{
           width:@imgScale;
           height: @imgScale;
           border-radius: 50%;
           overflow: hidden;
           img{
               width: 100%;
           }
        }
        .message-right{
            flex-grow: 1;
            padding-left: 15px;
            font-size: 14px;
         .message-content{
             padding-top: 3px;
             color: #999;
             span:nth-of-type(2){
                 width:110px ;
             }
         }
        }
       }
    }
    
}
.comment-box{
    box-shadow: 5px 5px 20px #cccaca;
    margin-bottom: 30px;
 .input-box{
    width: 100%;
    padding-right: 50px;
    @media screen and (max-width: 500px){
        padding-right:0px;
       }
    .input-nick{
      width:60%;
    }
  }
  .showMessage{
       width:100% ;
     }
}


</style>