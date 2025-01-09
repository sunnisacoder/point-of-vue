import { createStore } from 'vuex'

export default createStore({
  state: {
    count:0,
  },
  getters: {
    doubleCount(state){
      return state.count * 2;
    }
  },
  // pinia doesn't have mutation
  mutations: {
    increment(state){
      state.count++;
    },
    decrement(state){
      state.count--;
    }
  },
  actions: {
    asycIncrement({commit}){
      setTimeout(()=>{
        commit('increment');
      },1000);
    },
  },
  modules: {
  }
})
