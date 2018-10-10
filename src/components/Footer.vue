<template>
  <div class="footer fixed-bottom w-100">
    <p class="text-muted my-0 mx-0">Powered by <b-link class="text-light" href="https://min-api.cryptocompare.com/">CryptoCurrency API</b-link>.</p>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
.footer {
  background-image: linear-gradient(transparent 0, #323639 95%);
  font-size: 0.85em;

  padding-top: 1.65rem;
  padding-bottom: 0.35rem;
  padding-left: 1rem;
  padding-right: 1rem;

  text-align: right;

  @media screen and (max-width: 1300px) {
    text-align: center;
  }
}
</style>
