import aos from "aos";
import Vue from "vue";
import VueBootstrap from "bootstrap-vue";

import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

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
