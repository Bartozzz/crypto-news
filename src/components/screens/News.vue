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

    <Articles />
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
.jumbotron-lead {
  max-width: 600px;
}
</style>
