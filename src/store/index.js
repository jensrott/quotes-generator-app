import Vue from 'vue';
import Vuex from 'vuex';
import quotes from './modules/quotes/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    quotes
  }
});
