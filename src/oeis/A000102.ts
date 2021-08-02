// a(n) = number of compositions of n in which the maximum part size is 4.
export default function* A000102(): Generator<bigint> {
  for (const n of [0n, 0n, 0n, 0n, 1n, 2n, 5n, 12n, 27n, 59n, 127n, 269n, 563n, 1167n, 2400n, 4903n, 9960n, 20135n, 40534n, 81300n, 162538n, 324020n, 644282n, 1278152n, 2530407n, 5000178n, 9863763n, 19427976n, 38211861n, 75059535n, 147263905n, 288609341n, 565047233n, 1105229439n, 2159947998n, ]) {
    yield n
  }
}
