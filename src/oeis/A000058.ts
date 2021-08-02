// Sylvester's sequence: a(n+1) = a(n)^2 - a(n) + 1n, with a(0) = 2.
export default function* A000058(): Generator<bigint> {
  for (const n of [2n, 3n, 7n, 43n, 1807n, 3263443n, 10650056950807n, 113423713055421844361000443n, 12864938683278671740537145998360961546653259485195807n, ]) {
    yield n
  }
}
