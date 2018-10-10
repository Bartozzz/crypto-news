<template>
  <b-card bg-variant="card" border-variant="transparent">
    <VueSelect
      dir="ltr"
      label="coinName"
      placeholder="Select coin"
      class="form-control"
      :options="coins"
      :onChange="changeSelectedCoin"
    />

    <b-form-group class="my-1" description="Price actualized each 10 sec.">
      <b-form-input
        placeholder="Amount"
        :value="value"
        @input="$emit('input', $event)"
      />
    </b-form-group>
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
    coins: Array,
    value: Number
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

<style>
.v-select {
}

.v-select.dropdown .dropdown-toggle::after {
  content: normal;
}

.v-select.dropdown .form-control {
  height: inherit;
}
</style>
