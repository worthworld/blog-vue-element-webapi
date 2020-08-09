<template>
  <div id="app">
       <router-view />
    <!-- <BackTop>
      <template v-slot:main>
             <router-view />
       </template>
    </BackTop> -->
  </div>
</template>


<script>
// import BackTop from "./components/element/backtop";
export default {
  name: "app",
  // components: { BackTop },
  methods: {},
  created(){
    console.log('33:'+this.$route.meta.title)
    this.$store.dispatch('Init')
    this.$setTitle(this.$route.meta.title)
  }
};
</script>

<style lang="less" scoped>
 #app{
   width:100vw;
 }
</style>
