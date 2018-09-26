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
    </b-jumbotron>
  </b-container>
</template>

<script>
export default {
  name: 'HomeScreen'
}
</script>
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
