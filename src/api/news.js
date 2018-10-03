import axios from "axios";

export function getLatestNews() {
  return axios.get("https://min-api.cryptocompare.com/data/v2/news/", {
    params: {
      lang: "EN",
      extraParams: "crypto-news"
    }
  });
}
