// Number of representations of n as a sum of distinct Fibonacci numbers.
export default function* A000119(): Generator<number> {
  for (const n of [1, 1, 1, 2, 1, 2, 2, 1, 3, 2, 2, 3, 1, 3, 3, 2, 4, 2, 3, 3, 1, 4, 3, 3, 5, 2, 4, 4, 2, 5, 3, 3, 4, 1, 4, 4, 3, 6, 3, 5, 5, 2, 6, 4, 4, 6, 2, 5, 5, 3, 6, 3, 4, 4, 1, 5, 4, 4, 7, 3, 6, 6, 3, 8, 5, 5, 7, 2, 6, 6, 4, 8, 4, 6, 6, 2, 7, 5, 5, 8, 3, 6, 6, 3, 7, 4, 4, 5, 1, 5, 5, 4, 8, 4, 7, 7, 3, 9, 6, 6, 9, 3, 8, 8, 5, ]) {
    yield n
  }
}
