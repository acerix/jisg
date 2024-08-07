// a(n) = n*a(n-1) + (n-2)*a(n-2), with a(0) = 0, a(1) = 1.
export default function* A000153(): Generator<bigint> {
  for (const n of [
    0n,
    1n,
    2n,
    7n,
    32n,
    181n,
    1214n,
    9403n,
    82508n,
    808393n,
    8743994n,
    103459471n,
    1328953592n,
    18414450877n,
    273749755382n,
    4345634192131n,
    73362643649444n,
    1312349454922513n,
    24796092486996338n,
    493435697986613143n,
    10315043624498196944n,
  ]) {
    yield n
  }
}
