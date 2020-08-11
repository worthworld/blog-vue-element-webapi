<template>
  <div id="app">
       <router-view />
  </div>
</template>
<script>

export default {
  name: "app",
  methods: {
  },
  created(){
    console.log('33:'+this.$route.meta.title)
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
</style>
