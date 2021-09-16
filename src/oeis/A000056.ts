// Order of the group SL(2,Z_n).
export default function* A000056(): Generator<bigint> {
  for (const n of [1n, 6n, 24n, 48n, 120n, 144n, 336n, 384n, 648n, 720n, 1320n, 1152n, 2184n, 2016n, 2880n, 3072n, 4896n, 3888n, 6840n, 5760n, 8064n, 7920n, 12144n, 9216n, 15000n, 13104n, 17496n, 16128n, 24360n, 17280n, 29760n, 24576n, 31680n, 29376n, 40320n, 31104n, 50616n, 41040n, 52416n, 46080n, 68880n, 48384n, 79464n, ]) {
    yield n
  }
}
