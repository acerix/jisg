// Number of centered hydrocarbons with n atoms.
export default function* A000022(): Generator<bigint> {
  for (const n of [0n, 1n, 0n, 1n, 1n, 2n, 2n, 6n, 9n, 20n, 37n, 86n, 181n, 422n, 943n, 2223n, 5225n, 12613n, 30513n, 74883n, 184484n, 458561n, 1145406n, 2879870n, 7274983n, 18471060n, 47089144n, 120528657n, 309576725n, 797790928n, 2062142876n, 5345531935n, 13893615154n, 36201693122n, ]) {
    yield n
  }
}
