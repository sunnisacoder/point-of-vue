import {createStore} from 'vuex';

import {user} from "./user";
import {post} from "./post";
import {comment} from "./comment";

export const store = createStore({
  modules:{
    user,
    post,
    comment,
  },
  state() {},
  mutations: {},
  actions: {},
});

export default store;
// export default createStore({
//   state: {
//     count:0,
//   },
//   getters: {
//     doubleCount(state){
//       return state.count * 2;
//     }
//   },
//   // pinia doesn't have mutation
//   mutations: {
//     increment(state){
//       state.count++;
//     },
//     decrement(state){
//       state.count--;
//     }
//   },
//   actions: {
//     asycIncrement({commit}){
//       setTimeout(()=>{
//         commit('increment');
//       },1000);
//     },
//   },
//   modules: {
//   }
// })