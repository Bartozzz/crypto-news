import * as R from "ramda";
import * as newsAPI from "../../api/news";

const state = {
  news: [],
  error: null,
  fetchedAt: 0
};

const getters = {};

const actions = {
  getLatestNews({ commit }) {
    newsAPI
      .getLatestNews()
      .then(data => commit("setNews", data))
      .catch(err => commit("setError", err));
  }
};

const mutations = {
  setNews(state, response) {
    state.news = R.pipe(
      R.concat(R.prop("data", response)),
      R.uniqBy(R.prop("id"))
    )(state.news);

    state.fetchedAt = R.prop("fetchedAt", response);
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
