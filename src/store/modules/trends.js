import * as R from "ramda";
import * as coinsAPI from "../../api/coins";
import { timeToTimestamp } from "../../helpers/time";

const state = {
  exchangeRates: [],
  error: null
};

const getters = {
  getExchangeRataBySymbol: state => symbol => {
    return R.find(R.propEq("fsym", symbol))(state.exchangeRates);
  },

  generateChartData: state => (symbol, criterium = "high") => {
    const exchangeRate = getters.getExchangeRataBySymbol(state)(symbol);

    const labels = R.map(R.prop("time"))(exchangeRate.previous);
    const data = R.map(R.prop(criterium))(exchangeRate.previous);

    return {
      labels: labels,
      datasets: [
        {
          label: symbol,
          data: data
        }
      ]
    };
  }
};

const actions = {
  getCoinExchangeRate({ commit }, { coin, currency = "USD", limit = 55 }) {
    coinsAPI
      .getMinuteExchangeRate(coin, currency, limit)
      .then(response => {
        commit("saveExchangeRate", response);
      })
      .catch(error => {
        commit("setError", error);
      });
  }
};

const mutations = {
  saveExchangeRate(state, data) {
    // Get old exchange data or generate a new, empty one:
    const actualExchangeRate = R.defaultTo({
      fsym: data.fsym,
      tsym: data.tsym,
      interval: data.interval,
      current: {},
      previous: [],
      // Vue Bootstrap specific:
      _rowVariant: "row-entered"
    })(getters.getExchangeRataBySymbol(state)(data.fsym));

    // Populate old exchange data with new data:
    const updatedExchangeRate = R.evolve({
      // The most recent exchange rate:
      current: R.always(R.head(data.response)),
      // Precedent exchange rates:
      previous: R.pipe(
        R.concat(data.response),
        R.uniq,
        // TODO move it to `processResponse` or something like that:
        R.map(timeToTimestamp)
      )
    })(actualExchangeRate);

    state.exchangeRates = R.pipe(
      // Merge exchange rates:
      R.concat([updatedExchangeRate]),
      // Remove old exchange data for symbol:
      R.uniqBy(R.prop("fsym")),
      // Sort by symbol:
      R.sortBy(
        R.compose(
          R.toLower,
          R.prop("fsym")
        )
      )
    )(state.exchangeRates);
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
