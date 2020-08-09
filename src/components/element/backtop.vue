<template>
    <div class="pages-content-scroll .app-box">
     <el-backtop target=".pages-content-scroll" :visibility-height="60" :right='rightVal'>
         
     </el-backtop>
         <slot name="main"></slot>
    </div>
</template>
<script>
import utils from '@/utils/utils.js'
export default {
    name:"BackTop",
    data(){
        return{
            rightVal:40
        }
    },
    mounted(){
      let clientWidth=utils.getWindowSize()
      this.rightVal=clientWidth.width>500?40:20
    }
}
</script>
<style scoped>
.pages-content-scroll{
    height: 100vh;
    width: 100%;
    overflow-x: hidden;
    /* position:absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-x: hidden; */
}
</style>