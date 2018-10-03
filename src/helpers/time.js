import * as R from "ramda";

export const timeToTimestamp = R.evolve({
  time: R.multiply(1000)
});
