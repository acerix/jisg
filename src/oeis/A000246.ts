// Number of permutations in the symmetric group S_n that have odd order.
export default function* A000246(): Generator<bigint> {
  for (const n of [
    1n,
    1n,
    1n,
    3n,
    9n,
    45n,
    225n,
    1575n,
    11025n,
    99225n,
    893025n,
    9823275n,
    108056025n,
    1404728325n,
    18261468225n,
    273922023375n,
    4108830350625n,
    69850115960625n,
    1187451971330625n,
    22561587455281875n,
    428670161650355625n,
    9002073394657468125n,
    189043541287806830625n,
  ]) {
    yield n
  }
}
