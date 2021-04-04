import { SET_DATA } from "./mutation-types";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: null,
    lists: [],
  },

  getters: {
    getData: (state) => {
      return state.lists;
    },
    getCountData: (state) => {
      return state.lists.length;
    },
  },

  mutations: {
    [SET_DATA](state, data) {
      state.lists = data;
    },
  },

  actions: {
    setDatas(context, data) {
      context.commit("SET_DATA", data);
    },
  },
});
