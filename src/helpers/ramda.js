import * as R from "ramda";

/**
 * Prepends a value to the indicated property of the supplied object object, if
 * it exists.
 *
 * prependProp :: String → String → Object → Object
 */
export const prependProp = R.curry((property, value) =>
  R.converge(R.assoc(property), [
    R.pipe(
      R.prop(property),
      R.concat(value)
    ),
    R.identity
  ])
);

/**
 * Takes a function and a functor, applies the function to each of the functor's
 * keys, and returns a functor of the same shape.
 *
 * mapKeys :: (String → String) → Object → Object
 */
export const mapKeys = R.curry((fn, obj) =>
  R.fromPairs(R.map(R.adjust(fn, 0), R.toPairs(obj)))
);

/**
 * Takes a function and a functor, applies the function to each of the functor's
 * values recursively, and returns a functor of the same shape. Must be written
 * as arrow `x => recursiveMapValues(x)` due to recursion.
 *
 * recursiveMapValues :: (String → String) → Object → Object
 */
export const recursiveMapValues = R.curry((fn, obj) =>
  R.ifElse(R.is(Object), R.map(x => recursiveMapValues(fn, x)), fn)(obj)
);

/**
 * Takes a function and a functor, applies the function to each of the functor's
 * keys recursively, and returns a functor of the same shape. Must be written as
 * arrow `x => recursiveMapKeys(x)` due to recursion.
 *
 * recursiveMapKeys :: (String → String) → Object → Object
 */
export const recursiveMapKeys = R.curry((fn, obj) =>
  R.when(
    R.is(Object),
    R.compose(
      R.fromPairs,
      R.map(
        R.juxt([R.o(fn, R.head), R.o(x => recursiveMapKeys(fn, x), R.last)])
      ),
      R.toPairs
    )
  )(obj)
);
