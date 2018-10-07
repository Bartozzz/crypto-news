import * as R from "ramda";
import axios from "axios";
import { camelCase } from "change-case";
import { recursiveMapKeys, prependProp } from "../helpers/ramda";

export const INTERVAL_DAILY = 60 * 60 * 24;
export const INTERVAL_HOURLY = 60 * 60;
export const INTERVAL_MINUTE = 60;

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

export function getExchangeRateLink(period = INTERVAL_DAILY) {
  switch (period) {
    case INTERVAL_HOURLY:
      return "https://min-api.cryptocompare.com/data/histohour";
    case INTERVAL_DAILY:
      return "https://min-api.cryptocompare.com/data/histoday";
    default:
      return "https://min-api.cryptocompare.com/data/histominute";
  }
}

export function getDailyExchangeRate(fsym, tsym = "USD", limit = 55) {
  const apiLink = getExchangeRateLink(INTERVAL_DAILY);

  return axios
    .get(apiLink, {
      params: {
        extraParams: "crypto-news",
        fsym,
        tsym,
        limit
      }
    })
    .then(response => ({
      interval: INTERVAL_DAILY,
      response: response.data.Data,
      timestamp: response.data.TimeTo,
      fsym,
      tsym
    }));
}

export function getHourlyExchangeRate(fsym, tsym = "USD", limit = 55) {
  const apiLink = getExchangeRateLink(INTERVAL_HOURLY);

  return axios
    .get(apiLink, {
      params: {
        extraParams: "crypto-news",
        fsym,
        tsym,
        limit
      }
    })
    .then(response => ({
      interval: INTERVAL_HOURLY,
      response: response.data.Data,
      timestamp: response.data.TimeTo,
      fsym,
      tsym
    }));
}

export function getMinuteExchangeRate(fsym, tsym = "USD", limit = 55) {
  const apiLink = getExchangeRateLink(INTERVAL_MINUTE);

  return axios
    .get(apiLink, {
      params: {
        extraParams: "crypto-news",
        fsym,
        tsym,
        limit
      }
    })
    .then(response => ({
      interval: INTERVAL_MINUTE,
      response: response.data.Data,
      timestamp: response.data.TimeTo,
      fsym,
      tsym
    }));
}
