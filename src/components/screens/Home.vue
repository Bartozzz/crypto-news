<template>
  <b-container>
    <b-jumbotron bg-variant="transparent" text-variant="white">
      <template slot="header">
        <span class="d-none d-md-block">Crypto conversion</span>
      </template>

      <template slot="lead">
        <p class="jumbotron-lead">
          This tool allows you to quickly compare two cryptocurrencies. We use
          latest pricing data from <b-link class="text-secondary" href="https://min-api.cryptocompare.com/">CryptoCurrency API</b-link>.
        </p>
      </template>

      <Converter class="mt-5" />
    </b-jumbotron>
  </b-container>
</template>

<script>
import Converter from "../Converter/Converter.vue"

export default {
  name: 'HomeScreen',
  components: {
    Converter
  }
}
</script>

<style scoped>
.jumbotron-lead {
  max-width: 600px;
}
</style>
