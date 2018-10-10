import * as R from "ramda";
import * as coinsAPI from "../../api/coins";

const state = {
  coins: [],
  prices: {},
  error: null,
  fetchedAt: 0
};

const getters = {
  getCoinBySymbol: state => symbol => {
    return R.pipe(
      R.filter(R.propEq("symbol", symbol)),
      R.head
    )(state.coins);
  },

  getPricesBySymbol: state => symbol => {
    console.log(symbol);
    return R.prop(symbol)(state.prices);
  }
};

const actions = {
  getAllCoins({ commit }) {
    coinsAPI
      .getAllCoins()
      .then(data => commit("setCoins", data))
      .catch(err => commit("setError", err));
  },

  getCoinsPrices({ commit }, { coins, currencies }) {
    coinsAPI
      .getCoinsPrices(coins, currencies)
      .then(data => commit("savePrices", data))
      .catch(err => commit("setError", err));
  }
};

const mutations = {
  setCoins(state, response) {
    state.coins = R.pipe(
      R.concat(R.prop("data", response)),
      R.uniqBy(R.prop("id"))
    )(state.coins);

    state.fetchedAt = R.prop("fetchedAt", response);
  },

  savePrices(state, response) {
    state.prices = R.merge(state.prices, response);
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
