import Vue from 'vue'
import Vuex from 'vuex'
import * as user from '@/store/modules/user'; //importing all public items
import * as menu from '@/store/modules/menu';
import * as order from '@/store/modules/order';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {  },
  mutations: {  },
  actions: { },
  modules: {
    menu,
    user,
    order,
  }
})
