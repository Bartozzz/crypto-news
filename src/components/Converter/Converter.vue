<template>
  <b-row>
    <b-col class="mb-3" xs="12" sm="6">
      <CoinCard
        id="coinA"
        :coin.sync="coinA"
        :coins.sync="coins"
        @onCoinSelect="changeSelectedCoin"
        @onAmountChange="changeCoinAmount"
      />
    </b-col>

    <b-col class="mb-3" xs="12" sm="6">
      <CoinCard
        id="coinB"
        :coin.sync="coinB"
        :coins.sync="coins"
        @onCoinSelect="changeSelectedCoin"
        @onAmountChange="changeCoinAmount"
      />
    </b-col>
  </b-row>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import CoinCard from "./CoinCard.vue";

export default {
  name: "Converter",

  components: {
    CoinCard
  },

  data: () => ({
    coinA: { amount: 0 },
    coinB: { amount: 0 },
  }),

  computed: {
    ...mapState({
      coins: state => state.coins.coins,
      error: state => state.coins.error,
      prices: state => state.coins.prices
    }),

    ...mapGetters({
      getCoinBySymbol: "coins/getCoinBySymbol",
    }),

    conversionRate() {
      const { BTC: BTCa } = this.prices[this.coinA.Symbol];
      const { BTC: BTCb } = this.prices[this.coinB.Symbol];

      return BTCa / BTCb;
    }
  },

  methods: {
    fetchSelectedCoinsPrices() {
      const { Symbol: symbolA } = this.coinA;
      const { Symbol: symbolB } = this.coinB;

      if (!symbolA || !symbolB) {
        return;
      }

      this.$store.dispatch("coins/getCoinsPrices", {
        coins: [symbolA, symbolB],
        currencies: [symbolA, symbolB, "USD", "BTC"]
      });
    },

    changeSelectedCoin({ index, value }) {
      this[index] = {
        ...this.getCoinBySymbol(value),
        amount: 0
      }

      this.fetchSelectedCoinsPrices();
    },

    changeCoinAmount({ index, amount }) {
      amount = Math.max(amount, 0);

      switch(index) {
        case "coinA":
          this.coinA.amount = amount;
          this.coinB.amount = (amount * this.conversionRate).toFixed(8);
          break;

        default:
          this.coinA.amount = (amount / this.conversionRate).toFixed(8);
          this.coinB.amount = amount;
      }

      console.log(this.coinA.amount, this.coinB.amount);
    }
  }
}
</script>

<style scoped>
.row {
  max-width: 610px;
}
</style>
