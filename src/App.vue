<template>
  <div id="app">
       <BackTop>
      <template v-slot:main>
       <router-view />
         </template>
         </BackTop>
  </div>
</template>
<script>
import BackTop from "@/components/element/backtop";
export default {
  name: "app",
  components:{BackTop},
  methods: {
  },
  created(){
    this.$store.dispatch('Init')
  },
  mounted(){
    //移除加载动画
    let load=document.getElementById('load-box');
    if(load!=null)
    {
      load.parentNode.removeChild(load)
    }
  }
};
</script>

<style lang="less" scoped>
 #app{
   width:100vw;
 }
 html{
   background-color: #fff !important;
 }
</style>
