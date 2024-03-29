// Number of 3 X n Latin rectangles in which the first row is in order.
export default function* A000186(): Generator<bigint> {
  for (const n of [
    1n,
    0n,
    0n,
    2n,
    24n,
    552n,
    21280n,
    1073760n,
    70299264n,
    5792853248n,
    587159944704n,
    71822743499520n,
    10435273503677440n,
    1776780700509416448n,
    350461958856515690496n,
    79284041282622163140608n,
    20392765404792755583221760n,
    5917934230798104348783083520n,
    1924427226324694427836833857536n,
  ]) {
    yield n
  }
}
