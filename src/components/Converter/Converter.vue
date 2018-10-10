<template>
  <b-row>
    <b-col class="mb-3" xs="12" sm="6">
      <CoinCard
        id="coinA"
        v-model="coinA.amount"
        :coin.sync="coinA"
        :coins.sync="coins"
        @onCoinSelect="changeSelectedCoin"
      />
    </b-col>

    <b-col class="mb-3" xs="12" sm="6">
      <CoinCard
        id="coinB"
        v-model="coinB.amount"
        :coin.sync="coinB"
        :coins.sync="coins"
        @onCoinSelect="changeSelectedCoin"
      />
    </b-col>
  </b-row>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import CoinCard from "./CoinCard.vue";

const processAmount = amount => {
  // Casts to number & sets min val to 0:
  return Math.max(Number(amount) || 0, 0);
};

export default {
  name: "Converter",

  components: {
    CoinCard
  },

  data: () => ({
    coinA: { amount: 0 },
    coinB: { amount: 0 }
  }),

  computed: {
    ...mapState({
      coins: state => state.coins.coins,
      error: state => state.coins.error,
      prices: state => state.coins.prices
    }),

    ...mapGetters({
      getCoinBySymbol: "coins/getCoinBySymbol"
    }),

    conversionRate() {
      const { symbol: symbolA } = this.coinA;
      const { symbol: symbolB } = this.coinB;

      if (!(symbolA in this.prices) || !(symbolB in this.prices)) {
        return 0;
      }

      const { BTC: BTCa } = this.prices[this.coinA.symbol];
      const { BTC: BTCb } = this.prices[this.coinB.symbol];

      return BTCa / BTCb;
    }
  },

  watch: {
    ["coinA.amount"](amount) {
      const legalAmount = processAmount(amount);

      // Simple cross product, ref. computed conversionRate:
      this.coinB.amount = legalAmount * this.conversionRate;
      this.coinA.amount = legalAmount;
    },

    ["coinB.amount"](amount) {
      const legalAmount = processAmount(amount);

      // Simple cross product, ref. computed conversionRate:
      this.coinA.amount = legalAmount / this.conversionRate;
      this.coinB.amount = legalAmount;
    }
  },

  methods: {
    fetchSelectedCoinsPrices() {
      const { symbol: symbolA } = this.coinA;
      const { symbol: symbolB } = this.coinB;

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
      };

      this.fetchSelectedCoinsPrices();
    }
  }
};
</script>

<style lang="scss" scoped>
.row {
  max-width: 610px;
}
</style>
