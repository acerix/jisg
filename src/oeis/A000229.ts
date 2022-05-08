// a(n) is the least number m such that the n-th prime is the least quadratic nonresidue modulo m.
export default function* A000229(): Generator<bigint> {
  for (const n of [
    3n,
    7n,
    23n,
    71n,
    311n,
    479n,
    1559n,
    5711n,
    10559n,
    18191n,
    31391n,
    422231n,
    701399n,
    366791n,
    3818929n,
    9257329n,
    22000801n,
    36415991n,
    48473881n,
    175244281n,
    120293879n,
    427733329n,
    131486759n,
    3389934071n,
    2929911599n,
    7979490791n,
    36504256799n,
    23616331489n,
    89206899239n,
    121560956039n,
  ]) {
    yield n
  }
}
