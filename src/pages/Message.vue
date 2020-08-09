<template>
    <div class="app">
       <BackTop>
      <template v-slot:main>
          <div>
          <publicMessage :type="type" :messageList="messageList" @submitMsg="postMsg"></publicMessage>
        </div>

       </template>
    </BackTop>
    </div>
</template>

<script>
import publicMessage from '@/components/publicMessage'
import BackTop from "@/components/element/backtop";
export default {
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
    components:{publicMessage,BackTop},
    methods:{
        postMsg(nickName,msg){
         console.log('32:'+nickName,msg)
      }
    }
}
</script>
import moduleName from '@/components/publicMessage';
<style lang="less" scoped>
  .app{
  padding: 10px 70px 0;
  width: 100%;
  min-height: 100vh;
  @media screen and (max-width: 500px){
  padding:10px 15px 0 ;
  min-height: 90vh;
   }
  }
</style>