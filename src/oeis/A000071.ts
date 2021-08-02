// a(n) = Fibonacci(n) - 1.
export default function* A000071(): Generator<bigint> {
  for (const n of [0n, 0n, 1n, 2n, 4n, 7n, 12n, 20n, 33n, 54n, 88n, 143n, 232n, 376n, 609n, 986n, 1596n, 2583n, 4180n, 6764n, 10945n, 17710n, 28656n, 46367n, 75024n, 121392n, 196417n, 317810n, 514228n, 832039n, 1346268n, 2178308n, 3524577n, 5702886n, 9227464n, 14930351n, 24157816n, 39088168n, ]) {
    yield n
  }
}
