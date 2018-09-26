import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import HomeScreen from "./components/screens/Home.vue";
import NewsScreen from "./components/screens/News.vue";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: "/", component: HomeScreen },
    { path: "/news", component: NewsScreen }
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
