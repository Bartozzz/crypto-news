<template>
  <div class="footer fixed-bottom w-100 px-3 py-3 text-right">
    <p class="text-muted my-0">Powered by <b-link class="text-light" href="https://min-api.cryptocompare.com/">CryptoCurrency API</b-link>.</p>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background-image: linear-gradient(transparent 5%, #323639 100%);
  font-size: 0.85em;
}
</style>
