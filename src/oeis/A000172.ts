// Franel number a(n) = Sum_{k = 0..n} binomial(n,k)^3.
export default function* A000172(): Generator<bigint> {
  for (const n of [
    1n,
    2n,
    10n,
    56n,
    346n,
    2252n,
    15184n,
    104960n,
    739162n,
    5280932n,
    38165260n,
    278415920n,
    2046924400n,
    15148345760n,
    112738423360n,
    843126957056n,
    6332299624282n,
    47737325577620n,
    361077477684436n,
    2739270870994736n,
    20836827035351596n,
  ]) {
    yield n
  }
}
