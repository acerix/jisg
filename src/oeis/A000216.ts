// Take sum of squares of digits of previous term, starting with 2.
export default function* A000216(): Generator<bigint> {
  for (const n of [2n, 4n, 16n, 37n, 58n, 89n, 145n, 42n, 20n, 4n, 16n, 37n, 58n, 89n, 145n, 42n, 20n, 4n, 16n, 37n, 58n, 89n, 145n, 42n, 20n, 4n, 16n, 37n, 58n, 89n, 145n, 42n, 20n, 4n, 16n, 37n, 58n, 89n, 145n, 42n, 20n, 4n, 16n, 37n, 58n, 89n, 145n, 42n, 20n, 4n, 16n, 37n, 58n, 89n, 145n, 42n, 20n, 4n, 16n, 37n, 58n, 89n, 145n, 42n, 20n, 4n, 16n, 37n, ]) {
    yield n
  }
}
