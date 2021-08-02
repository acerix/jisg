// Padovan's spiral numbers
export default function* A134816(): Generator<bigint> {
  for (const n of [1n, 1n, 1n, 2n, 2n, 3n, 4n, 5n, 7n, 9n, 12n, 16n, 21n, 28n, 37n, 49n, 65n, 86n, 114n, 151n, 200n, 265n, 351n, 465n, 616n, 816n, 1081n, 1432n, 1897n, 2513n, 3329n, 4410n, 5842n, 7739n, 10252n, 13581n, 17991n, 23833n, 31572n, 41824n, 55405n, 73396n, 97229n, 128801n, 170625n, 226030n, 299426n, 396655n, ]) {
    yield n
  }
}
