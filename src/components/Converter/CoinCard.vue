<template>
  <b-card bg-variant="card" border-variant="transparent">
    <b-form-select
      variant="transparent"
      placeholder="Select coin"
      value-field="Symbol"
      text-field="FullName"
      :options="coins"
      @input="changeSelectedCoin($event)"
    />

    <b-form-group class="my-1" description="Price actualized each 10 sec.">
      <b-form-input
        placeholder="Amount"
        :value="value"
        :disabled="!('Symbol' in coin)"
        @input="$emit('input', $event)"
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
    coins: Array,
    value: Number
  },

  methods: {
    changeSelectedCoin(value) {
      this.$emit("onCoinSelect", {
        index: this.id,
        value
      });
    }
  }
}
</script>

<style>
</style>
