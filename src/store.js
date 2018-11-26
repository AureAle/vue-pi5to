import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    arrBusqueda: null,
  },
  mutations: {
    updateUser(state, data) {
      // eslint-disable-next-line
      state.user = data;
    },
    updateBusqueda(state, data) {
      // eslint-disable-next-line
      state.arrBusqueda = data;
    },
  },
  actions: {

  },
});
