<template>
  <b-card bg-variant="card" border-variant="transparent">
    <b-form-select
      variant="transparent"
      placeholder="Select coin"
      :options="coins"
      value-field="Symbol"
      text-field="FullName"
      @input="changeSelectedCoin($event)"
    />

    <b-form-group class="my-1" description="Price actualized each 10 sec.">
      <b-form-input
        placeholder="Amount"
        :value="coin.amount"
        @input="changeCoinAmount($event)"
      />
    </b-form-group>
  </b-card>
</template>

<script>
export default {
  name: "CoinCard",

  props: {
    id: String,
    coin: Object,
    coins: Array
  },

  methods: {
    changeSelectedCoin(value) {
      this.$emit("onCoinSelect", {
        index: this.id,
        value
      });
    },

    changeCoinAmount(amount) {
      this.$emit("onAmountChange", {
        index: this.id,
        amount: Number(amount)
      });
    }
  }
}
</script>

<style>
</style>
