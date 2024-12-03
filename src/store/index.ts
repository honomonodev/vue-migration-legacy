import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import tasks from './modules/tasks'
import timeTracker from './modules/timeTracker'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    tasks,
    timeTracker
  }
})