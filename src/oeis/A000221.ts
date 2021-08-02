// Take sum of squares of digits of previous term; start with 5.
export default function* A000221(): Generator<bigint> {
  for (const n of [5n, 25n, 29n, 85n, 89n, 145n, 42n, 20n, 4n, 16n, 37n, 58n, 89n, 145n, 42n, 20n, 4n, 16n, 37n, 58n, 89n, 145n, 42n, 20n, 4n, 16n, 37n, 58n, 89n, 145n, 42n, 20n, 4n, 16n, 37n, 58n, 89n, 145n, 42n, 20n, 4n, 16n, 37n, 58n, 89n, 145n, 42n, 20n, 4n, 16n, 37n, 58n, 89n, 145n, 42n, 20n, 4n, 16n, 37n, 58n, 89n, 145n, 42n, 20n, 4n, 16n, 37n, 58n, 89n, 145n, ]) {
    yield n
  }
}
