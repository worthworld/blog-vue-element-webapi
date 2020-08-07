<template>
    <div class="pages-content-scroll .app-box">
     <el-backtop target=".pages-content-scroll" :visibility-height="60">
         
     </el-backtop>
         <slot name="main"></slot>
    </div>
</template>
<script>

export default {
    name:"BackTop"
}
</script>
<style scoped>
.pages-content-scroll{
    /* height: 100vh;
    width: 100vw;
    overflow-x: hidden; */
    position:absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-x: hidden;
}
</style>