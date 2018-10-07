import * as R from "ramda";
import axios from "axios";
import { camelCase } from "change-case";
import { recursiveMapKeys, prependProp } from "../helpers/ramda";

export function getAllCoins() {
  return axios
    .get("https://min-api.cryptocompare.com/data/all/coinlist", {
      params: {
        lang: "EN",
        extraParams: "crypto-news"
      }
    })
    .then(response => {
      const baseLinkUrl = R.prop("BaseLinkUrl", response.data);
      const baseImageUrl = R.prop("BaseImageUrl", response.data);

      const requiredProps = [
        "id",
        "symbol",
        "coinName",
        "fullName",
        "url",
        "imageUrl"
      ];

      const data = R.pipe(
        // Normalize keys:
        recursiveMapKeys(camelCase),

        // Filter illegal coins:
        R.filter(R.allPass(R.map(R.has, requiredProps))),

        // Remove redundant props & map absolute paths:
        R.map(
          R.compose(
            R.pickAll(requiredProps),
            prependProp("url", baseLinkUrl),
            prependProp("imageUrl", baseImageUrl)
          )
        ),

        // Convert to Array:
        R.values
      )(response.data.Data);

      return {
        fetchedAt: +new Date(),
        data
      };
    });
}

export function getCoinsPrices(coins = [], currencies = ["BTC", "USD", "EUR"]) {
  return axios
    .get("https://min-api.cryptocompare.com/data/pricemulti", {
      params: {
        fsyms: coins.join(","),
        tsyms: currencies.join(","),
        extraParams: "crypto-news"
      }
    })
    .then(response => {
      return response.data;
    });
}
