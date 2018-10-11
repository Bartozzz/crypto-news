<template>
  <transition-group name="fade" class="app">
    <Loader key="app-loader" v-if="!isStateReady" />
    <Header key="app-header" v-if="isStateReady" />
    <Content key="app-content" v-if="isStateReady" />
    <Footer key="app-footer"  v-if="isStateReady" />
  </transition-group>
</template>

<script>
import Content from "./components/Content.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Loader from "./components/Loader.vue";

export default {
  name: "App",

  components: {
    Content,
    Footer,
    Header,
    Loader
  },

  data: () => ({
    isStateReady: false
  }),

  created() {
    // This event is fired by "persistent" Vuex plugin when state is loaded from
    // local storage (i.e. IndexedDB). All CryptoCompare API requests should be
    // optionally dispatched once the local state is restored.
    this.$store._vm.$root.$on("storageReady", () => {
      this.isStateReady = true;
    });
  }
};
</script>

<style lang="scss" scoped>
.app {
  display: block;

  min-height: 100vh;
  height: 100%;
}
</style>
