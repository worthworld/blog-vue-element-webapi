<template>
    <div class="app">
   <canvas id="meteor" :width="canvasWidth" :height="canvasHeight">
      你的浏览器器不支持canvas，请升级你的浏览器 
   </canvas>
   <div class="main ">
       <div class="img-box">
           <img src="/img/header.jpg" alt="">
       </div>
    <div class="flex-row  row-around">
    <router-link class="link" to="/pages">博客</router-link>
    <router-link class="link" to="https//wwww.stonemei.cn">gitHub</router-link>
    <router-link class="link" to="/views">测试</router-link>
   </div>
   </div>
    </div>
</template>
<script>
import draw from '@/utils/canvasMeteor'
import utils from '@/utils/utils'
export default {
  data(){
      return {
          canvasWidth:1200,
          canvasHeight:800
      }
  },
  created(){
      let  windowSize=utils.getWindowSize()
      this.canvasWidth=windowSize.width
      this.canvasHeight=windowSize.height
  },
  mounted(){
    
            draw()
  }
}
</script>

<style lang="less" scoped>
.app{
    position: relative;
    font-size: 22px;
}
#meteor{
    z-index: 1;
    widows: 100vw;
    height: 100vh;
}
.main{
    background-color: transparent;
    z-index: 999;
    height: 50vh;
    width: 90vw;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-left: -45vw;
    transform: translateY(-50%);
    flex-wrap: wrap;
    flex-shrink: 0;
    .img-box{
        text-align: center;
        img{
            width:  100px;
            border-radius: 50%;
            animation: mylogo 3s;
            animation-iteration-count: infinite;
        }
    }
   .link{
       padding: 20px;
       color:#409eff;
   }
   

}
</style>