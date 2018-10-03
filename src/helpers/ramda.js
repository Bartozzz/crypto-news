import * as R from "ramda";

export const prependProp = R.curry((property, value) =>
  R.converge(R.assoc(property), [
    R.pipe(
      R.prop(property),
      R.concat(value)
    ),
    R.identity
  ])
);
