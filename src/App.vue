<template>
  <div class="app">
    <Header />

    <div class="app-content">
      <router-view></router-view>
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Footer,
    Header,
  }
}
</script>

<style>
.app {
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  background-color: #323639;
  color: #ffffff;

  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app-content {
  flex: 1;

  overflow-x: hidden;
  overflow-y: auto;
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
</style>
