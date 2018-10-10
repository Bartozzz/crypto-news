<template>
  <div class="app">
    <transition-group name="fade">
      <Loader key="app-loader" v-if="!isStateReady" />
      <Header key="app-header" v-if="isStateReady" />
      <Content key="app-content" v-if="isStateReady" />
      <Footer key="app-footer"  v-if="isStateReady" />
    </transition-group>
  </div>
</template>

<script>
import Content from "./components/Content.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Loader from "./components/Loader.vue";

export default {
  name: "App",

  data: () => ({
    isStateReady: false
  }),

  components: {
    Content,
    Footer,
    Header,
    Loader
  },

  created() {
    this.$store._vm.$root.$on("storageReady", () => {
      this.isStateReady = true;

      this.$store.dispatch("coins/getAllCoins");
    });
  }
};
</script>

<style lang="scss">
.app {
  position: relative;

  min-height: 100vh;
  height: 100%;
  width: 100vw;

  background-image: url("/images/bg.svg");
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 700px;
  background-attachment: local;

  @media screen and (max-width: 600px) {
    background-image: none;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
