import axios from "axios";

export const INTERVAL_DAILY = 60 * 60 * 24;
export const INTERVAL_HOURLY = 60 * 60;
export const INTERVAL_MINUTE = 60;

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

export function getExchangeRateL(period, fsym, tsym = "USD", limit = 55) {
  const apiLink = getExchangeRateLink(period);

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
      interval: period,
      response: response.data.Data,
      timestamp: response.data.TimeTo,
      fsym,
      tsym
    }));
}

export function getDailyExchangeRate(fsym, tsym = "USD", limit = 55) {
  return getExchangeRateL(INTERVAL_DAILY, fsym, tsym, limit);
}

export function getHourlyExchangeRate(fsym, tsym = "USD", limit = 55) {
  return getExchangeRateL(INTERVAL_HOURLY, fsym, tsym, limit);
}

export function getMinuteExchangeRate(fsym, tsym = "USD", limit = 55) {
  return getExchangeRateL(INTERVAL_MINUTE, fsym, tsym, limit);
}
