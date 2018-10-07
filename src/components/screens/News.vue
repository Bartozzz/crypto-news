<template>
  <b-container>
    <b-jumbotron bg-variant="transparent" text-variant="white">
      <template slot="header">
        <span class="d-none d-md-block">Crypto news</span>
      </template>

      <template slot="lead">
        <p class="jumbotron-lead">
          Latest articles from the world of cryptocurrencies. Read what is
          happening with <em>Bitcoin</em>, <em>Ethereum</em> and other altcoins.
        </p>
      </template>
    </b-jumbotron>

    <Articles class="mb-5" />
  </b-container>
</template>

<script>
import Articles from "../Articles/Articles.vue";

export default {
  name: 'NewsScreen',
  components: {
    Articles
  }
}
</script>

<style scoped>
.jumbotron {
  position: relative;
}

.jumbotron::before {
  position: absolute;
  left: 15px;
  top: 0px;

  background-image: url("/images/map.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center left;

  width: 450px;
  height: 300px;

  content: "";
}

.jumbotron-lead {
  max-width: 600px;
}

@media screen and (max-width: 820px) {
  .jumbotron .display-3,
  .jumbotron .lead {
    text-align: center;
  }
}

@media screen and (max-width: 480px) {
  .jumbotron::before {
    left: 0;

    width: 100%;
    height: 200px;
  }
}
</style>
