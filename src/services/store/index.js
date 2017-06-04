import Vue from 'vue'
import Vuex from 'vuex'

import tools from 'services/store/tools'

// Track all state mutation erros
// - https://vuex.vuejs.org/en/strict.html
const debug = process.env.NODE_ENV === 'development'

Vue.use(Vuex)

export const storeOptions = {
  modules: {
    tools
  },
  strict: debug
}

export default new Vuex.Store(storeOptions)
