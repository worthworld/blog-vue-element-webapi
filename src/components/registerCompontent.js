// 全局注册组件
import Vue from 'vue'
import Loading from "./Loading";
import BackTop from "./element/Backtop.vue";
import Sidebar from "./Sidebar";
import PublishMessage from "./PublishMessage";

Vue.component('blog-loading', Loading)
Vue.component('blog-backtop', BackTop)
Vue.component('blog-sidebar', Sidebar)
Vue.component('blog-publishmessage', PublishMessage)
