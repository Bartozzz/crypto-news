<template>
  <b-card class="coin-card">
    <VueSelect
      dir="ltr"
      label="fullName"
      class="custom-v-select"
      placeholder="Select coin to compare"
      :options="coins"
      :onChange="changeSelectedCoin"
    />

    <b-form-group class="my-1" v-if="canCompare">
      <b-form-input
        placeholder="Amount"
        :value="value"
        @input="$emit('input', $event)"
      />
    </b-form-group>

    <div v-if="coin.imageUrl" class="coin-card-logo">
      <img :src="coin.imageUrl" class="coin-card-logo-img" />
    </div>

    <div v-if="price" class="d-flex">
      <p class="my-0 flex-fill text-muted">
        <small>$ {{ price.USD }}</small>
      </p>

      <p class="my-0 flex-fill text-muted text-right">
        <small>Ƀ {{ price.BTC }}</small>
      </p>
    </div>
  </b-card>
</template>

<script>
import { VueSelect } from "vue-select";

export default {
  name: "CoinCard",

  components: {
    VueSelect
  },

  props: {
    id: String,
    coin: Object,
    price: Object,
    coins: Array,
    value: Number,
    canCompare: Boolean
  },

  methods: {
    changeSelectedCoin(coin) {
      this.$emit("onCoinSelect", {
        index: this.id,
        value: coin.symbol
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.coin-card {
  position: relative;

  &-logo {
    position: absolute;
    top: 24px;
    left: 7px;

    background-color: #282b2e;
    border-color: #282b2e;
    border-style: solid;
    border-width: 2px;
    border-radius: 100%;

    &-img {
      width: 26px;
      height: 26px;

      border-radius: 100%;
    }
  }
}
</style>
