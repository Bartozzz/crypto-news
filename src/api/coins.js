import axios from "axios";

export function getAllCoins() {
  return axios.get("https://min-api.cryptocompare.com/data/all/coinlist", {
    params: {
      lang: "EN",
      extraParams: "crypto-news"
    }
  });
}

export function getCoinsPrices(coins = [], currencies = ["BTC", "USD", "EUR"]) {
  return axios.get("https://min-api.cryptocompare.com/data/pricemulti", {
    params: {
      fsyms: coins.join(","),
      tsyms: currencies.join(","),
      extraParams: "crypto-news"
    }
  });
}
