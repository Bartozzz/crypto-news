import * as R from "ramda";
import * as newsAPI from "../../api/news";

const state = {
  news: [],
  error: null
};

const getters = {};

const actions = {
  getLatestNews({ commit }) {
    newsAPI
      .getLatestNews()
      .then(data => commit("setNews", data))
      .catch(error => commit("setError", error));
  }
};

const mutations = {
  setNews(state, data) {
    state.news = R.prop("data", data);
    state.fetchedAt = R.prop("fetchedAt", data);
  },

  setError(state, error) {
    state.error = error;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
