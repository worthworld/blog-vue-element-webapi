<template>
  <div id="app">
       <blog-backtop>
      <template v-slot:main>
       <router-view />
         </template>
         </blog-backtop>
  </div>
</template>
<script>
export default {
  name: "app",
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
</style>
