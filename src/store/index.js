import * as R from "ramda";
import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";
import createPersistedState from "vuex-persistedstate";

import coins from "./modules/coins";
import news from "./modules/news";
import trends from "./modules/trends";

Vue.use(Vuex);

// Disable logs & strict mode in production:
const debug = process.env.NODE_ENV !== "production";

const allPlugins = [createPersistedState()];
const devPlugins = [createLogger()];
const prodPlugins = [];

export default new Vuex.Store({
  strict: debug,
  plugins: debug
    ? R.concat(allPlugins, devPlugins)
    : R.concat(allPlugins, prodPlugins),

  modules: {
    coins,
    news,
    trends
  }
});
