import Vue from "vue";
import VueRouter from "vue-router";
import HomeScreen from "../screens/Home.vue";
import NewsScreen from "../screens/News.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/home", component: HomeScreen, alias: "/" },
    { path: "/news", component: NewsScreen }
  ]
});

export default router;
