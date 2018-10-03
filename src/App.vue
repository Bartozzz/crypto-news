<template>
  <div class="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",

  components: {
    Footer,
    Header,
  },

  created () {
    this.$store.dispatch("coins/getAllCoins");
  }
}
</script>

<style>
.app {
  position: relative;

  min-height: 100vh;
  max-width: 100vw;

  background-image: url("./assets/bg.svg");
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 700px;
  background-attachment: local;
  background-color: #323639;

  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
}

@media screen and (max-width: 600px) {
  .app {
    background-image: none;
  }
}

.border-transparent {
  border-color: transparent;
}

.btn-transparent {
  background-color: transparent;
  color: #ffffff;

  padding: 0;
  padding-bottom: 0.375rem;

  font-size: inherit;
  line-height: 1.5;
}

.bg-card {
  background-color: #41464a;
}

.bg-dark {
  background-color: #323639 !important;
}
</style>
