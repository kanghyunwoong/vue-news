import  Vuex from 'vuex'
import Vue from 'vue'
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

/* Vuex 상태 관리 도구*/
/* 상태 : 여러 컴포넌트간의 공유되는 데이터 속성(Property)*/
export const store = new Vuex.Store({
  state :{
    user:{},
    item:{},
    list:[]
  },
  getters: { // = computed
    fetchedUser(state) {
      return state.user;
    },
    fetchedItem(state) {
      return state.item;
    }
  },
  mutations, //state의 저장,변경,
  actions //비동기 호출만
});