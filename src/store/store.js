import Vue from 'vue'
import Vuex from 'vuex'
/* modules */

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    placeholder: 'todo info',
    inputValue: '',
    list: ['吃饭', '睡觉', '打豆豆'],
    todolist: []
  },

  // 计算state状态生成新的状态
  getters: {},

  // 这里修改状态
  mutations: {
    handleAdd (state) {
      state.list.push(state.inputValue)
      state.inputValue = ''
    },
    handleDel (state, index) {
      state.list.splice(index, 1)
    }
  },

  // 这里触发mutations方法
  actions: {
    handleAdd (context) {
      context.commit('handleAdd')
    },
    handleDel (context, index) {
      context.commit('handleDel', index)
    }
  }
})
