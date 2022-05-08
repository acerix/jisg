// Erroneous version of A003713.
export default function* A000154(): Generator<bigint> {
  for (const n of [
    1n,
    1n,
    2n,
    7n,
    35n,
    228n,
    1834n,
    17382n,
    195866n,
    2487832n,
    35499576n,
    562356672n,
    9794156448n,
    186025364016n,
    3826961710272n,
    84775065603888n,
    2011929826983504n,
  ]) {
    yield n
  }
}
