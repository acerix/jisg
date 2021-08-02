// Number of positive integers <= 2^n of form 2 x^2 + 3 y^2.
export default function* A000075(): Generator<bigint> {
  for (const n of [0n, 1n, 2n, 4n, 7n, 14n, 23n, 42n, 76n, 139n, 258n, 482n, 907n, 1717n, 3269n, 6257n, 12020n, 23171n, 44762n, 86683n, 168233n, 327053n, 636837n, 1241723n, 2424228n, 4738426n, 9271299n, 18157441n, 35591647n, 69820626n, 137068908n, 269270450n, 529312241n, 1041093048n, 2048825748n, 4034059456n, ]) {
    yield n
  }
}
