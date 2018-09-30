import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";

import news from "./modules/news";

// Disable logs & strict mode in production:
const debug = process.env.NODE_ENV !== "production";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: debug,
  plugins: debug ? [createLogger()] : [],

  modules: {
    news
  }
});
