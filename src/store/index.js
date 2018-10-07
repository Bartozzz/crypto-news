import * as R from "ramda";
import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";
import createPersistedState from "./plugins/persistent";

import coins from "./modules/coins";
import news from "./modules/news";
import trends from "./modules/trends";

Vue.use(Vuex);

// Disable logs & strict mode in production:
const debug = process.env.NODE_ENV !== "production";

// Plugins for both `development` & `production` modes:
const plugins = [
  createPersistedState({
    strictMode: debug,
    modules: ["coins", "news"]
  })
];

// Plugins for `development` mode:
const devPlugins = [
  // Integrates with Vue Devtools:
  createLogger()
];

// Plugins for `production` mode:
const prodPlugins = [];

export default new Vuex.Store({
  strict: debug,
  plugins: debug
    ? R.concat(plugins, devPlugins)
    : R.concat(plugins, prodPlugins),

  modules: {
    coins,
    news,
    trends
  }
});
