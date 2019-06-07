import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './views/auth/store/user'
import message from './views/home/store/message'

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    message,
    user,
  },
  strict: debug
})
