import Vue from 'vue'
import Vuex from 'vuex'
import config from './modules/config'
import status from './modules/status'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    config,
    status
  }
})
