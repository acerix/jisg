// Nearest integer to modified Bessel function K_n(1).
export default function* A000155(): Generator<bigint> {
  for (const n of [
    0n,
    1n,
    2n,
    7n,
    44n,
    361n,
    3654n,
    44207n,
    622552n,
    10005041n,
    180713290n,
    3624270839n,
    79914671748n,
    1921576392793n,
    50040900884366n,
    1403066801155039n,
    42142044935535536n,
    1349948504738292193n,
    45940391206037470098n,
  ]) {
    yield n
  }
}
