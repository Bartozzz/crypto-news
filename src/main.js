import aos from "aos";
import Vue from "vue";
import VueBootstrap from "bootstrap-vue";

import "./styles/_index.scss";

import App from "./App.vue";
import store from "./store";
import router from "./router";
import registerServiceWorker from "./workers/registerServiceWorker";

Vue.use(VueBootstrap);
Vue.config.productionTip = false;

registerServiceWorker();

new Vue({
  created() {
    aos.init();
  },

  store,
  router,
  render: h => h(App)
}).$mount("#app");
