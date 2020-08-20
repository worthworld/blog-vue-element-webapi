<template>
  <div class="app-box">
    <router-link to="/views/home">
      <el-button class="top">
        <i class="el-icon-s-home" style="font-size:22px;margin-right:10px;"></i>
        home
      </el-button>
    </router-link>
    <router-link to="/views/about">
      <el-button class="top">
        <i
          class="el-icon-s-custom"
          style="font-size:22px;margin-right:10px;"
        ></i>
        about
      </el-button>
    </router-link>

    <router-link to="/views/add">
      <el-button class="top">
        <i class="el-icon-s-home" style="font-size:22px;margin-right:10px;"></i>
        add
      </el-button>
    </router-link>
    <router-link to="/views/edit">
      <el-button class="top">
        <i
          class="el-icon-s-custom"
          style="font-size:22px;margin-right:10px;"
        ></i>
        edit
      </el-button>
    </router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  methods: {},
  created() {
    console.log("views/index:" + this.$route.meta.title);
    this.$setTitle(this.$route.meta.title);
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
}
</style>
