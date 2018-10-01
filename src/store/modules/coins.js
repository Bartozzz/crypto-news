import * as R from "ramda";
import * as coinsAPI from "../../api/coins";
import { prependProp } from "../../helpers/ramda";

const state = {
  coins: [],
  prices: {},
  error: null
};

const getters = {
  getCoinBySymbol: state => symbol => {
    return R.pipe(
      R.filter(R.propEq("Symbol", symbol)),
      R.head
    )(state.coins);
  }
};

const actions = {
  getAllCoins({ commit }) {
    coinsAPI
      .getAllCoins()
      .then(response => {
        commit("setCoins", response.data);
      })
      .catch(error => {
        commit("setError", error);
      });
  },

  getCoinsPrices({ commit }, { coins, currencies }) {
    coinsAPI
      .getCoinsPrices(coins, currencies)
      .then(response => {
        commit("savePrices", response.data);
      })
      .catch(error => {
        commit("setError", error);
      });
  }
};

const mutations = {
  setCoins(state, { Data, BaseImageUrl, BaseLinkUrl }) {
    const requiredProps = [
      "Id",
      "Symbol",
      "CoinName",
      "FullName",
      "Url",
      "ImageUrl"
    ];

    state.coins = R.pipe(
      // Filter illegal coins:
      R.filter(R.allPass(R.map(R.has, requiredProps))),
      // Remove redundant props & map absolute paths:
      R.map(
        R.compose(
          R.pickAll(requiredProps),
          prependProp("Url", BaseLinkUrl),
          prependProp("ImageUrl", BaseImageUrl)
        )
      ),
      // Convert to Array:
      R.values
    )(Data);
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
