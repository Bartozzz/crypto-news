import * as R from "ramda";
import axios from "axios";
import { camelCase } from "change-case";
import { recursiveMapKeys } from "../helpers/ramda";

export function getLatestNews() {
  return axios
    .get("https://min-api.cryptocompare.com/data/v2/news/", {
      params: {
        lang: "EN",
        extraParams: "crypto-news"
      }
    })
    .then(response =>
      R.pipe(
        // Normalize response keys:
        recursiveMapKeys(camelCase),

        // Remove useless props from response:
        R.omit(["message", "promoted", "type"]),
        R.assoc("fetchedAt", +new Date()),

        // Remove useless props from news:
        R.evolve({
          data: R.pipe(
            R.map(
              R.omit([
                "upvotes",
                "downvotes",
                "lang",
                "tags",
                "guid",
                "source",
                "categories"
              ])
            ),
            R.values
          )
        })
      )(response.data)
    );
}
