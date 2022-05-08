// Number of 3-dimensional polyominoes (or polycubes) with n cells.
export default function* A000162(): Generator<bigint> {
  for (const n of [
    1n,
    1n,
    2n,
    8n,
    29n,
    166n,
    1023n,
    6922n,
    48311n,
    346543n,
    2522522n,
    18598427n,
    138462649n,
    1039496297n,
    7859514470n,
    59795121480n,
  ]) {
    yield n
  }
}
