// Sylvester's sequence: a(n+1) = a(n)^2 - a(n) + 1, with a(0) = 2.
export default function* A000058(): Generator<number> {
  for (const n of [2, 3, 7, 43, 1807, 3263443, 10650056950807, 113423713055421844361000443, 12864938683278671740537145998360961546653259485195807, ]) {
    yield n
  }
}
