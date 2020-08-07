<template>
  <div >
    <h1>This is an about page</h1>
  <card class="box-card">
  <div slot="header" class="clearfix">
    <span>卡片名称</span>
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
  </div>
  <div v-for="o in 50" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div>
  </card>
  </div>
</template>
<script>
import {card} from 'element-ui'
export default {
  components:{card},
   created(){
    console.log('33:'+this.$route.meta.title)
    this.$store.dispatch('Init')
    this.$setTitle(this.$route.meta.title)
  },
}
</script>
<style scoped>

</style>