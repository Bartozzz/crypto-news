<template>
  <div class="app">
    <Header></Header>

    <div class="app-content">
      <router-view></router-view>
    </div>

    <Footer></Footer>
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

  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app-content {
  flex: 1;

  overflow-x: hidden;
  overflow-y: auto;
}
</style>
