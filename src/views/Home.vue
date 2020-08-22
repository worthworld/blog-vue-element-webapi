<template>
  <div class="app">
    <div id="backImg"></div>
    <canvas id="meteor" :width="canvasWidth" :height="canvasHeight">
      你的浏览器器不支持canvas，请升级你的浏览器
    </canvas>
    <div class="main ">
      <div class="img-box">
        <img :src="this.$store.state.config.avatar" alt="" />
      </div>
      <div class="flex-row  row-center">
        <router-link class="link" :to="{name:'views',params:{pages:'articles',id:0}}">博客</router-link>
       <a class="link" :href="this.$store.state.config.github" target="_blank">gitHub</a>
        <router-link class="link" :to="{name:'views',params:{pages:'message',id:3}}">留言</router-link>
      </div>
      <div class="introduce">
         与善人居，如入芝兰之室，久而自芳矣！
      </div>
    </div>
  </div>
</template>
<script>
import canvas from "@/utils/canvasMeteor";
import utils from "@/utils/utils";
export default {
  data() {
    return {
      canvasWidth: 1200,
      canvasHeight: 800,
    };
  },
  created() {
    let windowSize = utils.getWindowSize();
    this.canvasWidth = windowSize.width;
    this.canvasHeight = windowSize.height;
  },
  mounted() {
    canvas.trck("meteor");
  },
};
</script>

<style lang="less" scoped>
.app {
  position: relative;
  font-size: 20px;
}
#backImg,
#meteor {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
}
#backImg {
  background-image: url("/img/back.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
#meteor {
  z-index: 99;
}
.main {
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
  text-align: center;
    img {
      width: 200px;
      border-radius: 50%;
      animation: mylogo 3s;
      -moz-animation: mylogo 3s; /* Firefox */
      -webkit-animation: mylogo 3s; /* Safari and Chrome */
      -o-animation: mylogo 3s; /* Opera */
      animation-iteration-count: infinite;
      @media screen and(max-width: 500px) {
        width: 100px;
      }
    }
  
  .link {
    padding: 18px;
    color: #409eff;
  }
  .introduce{
      text-align: center;
      color:#f38979 ;
      font-size: 18px;
  }
}
@keyframes mylogo {
  0% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
  25% {
    transform: rotate(0deg) scale(1, 1);
    opacity: 0.8;
  }
  100% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
}

@-moz-keyframes mylogo {
  0% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
  25% {
    transform: rotate(0deg) scale(1, 1);
    opacity: 0.8;
  }
  100% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
}

@-webkit-keyframes mylogo {
  0% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
  25% {
    transform: rotate(0deg) scale(1, 1);
    opacity: 0.8;
  }
  100% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
}

@-o-keyframes mylogo {
  0% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
  25% {
    transform: rotate(0deg) scale(1, 1);
    opacity: 0.8;
  }
  100% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
}

</style>
