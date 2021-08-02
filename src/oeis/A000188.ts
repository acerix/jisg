// (1) Number of solutions to x^2 == 0 (mod n). (2) Also square root of largest square dividing n. (3) Also max_{ d divides n } gcd(d, n/d).
export default function* A000188(): Generator<bigint> {
  for (const n of [1n, 1n, 1n, 2n, 1n, 1n, 1n, 2n, 3n, 1n, 1n, 2n, 1n, 1n, 1n, 4n, 1n, 3n, 1n, 2n, 1n, 1n, 1n, 2n, 5n, 1n, 3n, 2n, 1n, 1n, 1n, 4n, 1n, 1n, 1n, 6n, 1n, 1n, 1n, 2n, 1n, 1n, 1n, 2n, 3n, 1n, 1n, 4n, 7n, 5n, 1n, 2n, 1n, 3n, 1n, 2n, 1n, 1n, 1n, 2n, 1n, 1n, 3n, 8n, 1n, 1n, 1n, 2n, 1n, 1n, 1n, 6n, 1n, 1n, 5n, 2n, 1n, 1n, 1n, 4n, 9n, 1n, 1n, 2n, 1n, 1n, 1n, 2n, 1n, 3n, ]) {
    yield n
  }
}
