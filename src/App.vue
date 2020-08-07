<template>
  <div class="app-box">
    <BackTop>
      <template v-slot:main>
         <router-view />
       </template>
    </BackTop>
  </div>
</template>


<script>
import BackTop from "./components/element/backtop";
export default {
  name: "app",
  components: { BackTop },
  methods: {},
  created(){
    console.log('33:'+this.$route.meta.title)
    this.$store.dispatch('Init')
    this.$setTitle(this.$route.meta.title)
  },
};
</script>

<style>
:root {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* height: 100%;  */
  /* margin-top: 60px; */
}
</style>
