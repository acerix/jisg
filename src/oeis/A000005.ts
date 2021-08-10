// The number of divisors of n
export default function* A000005(): Generator<bigint> {
  yield 1n
  let n = 2n
  for (;;) {
    let c = 2n
    for (let i=2n; i<n; i++) {
      if (n%i === 0n) {
        c++
      }
    }
    yield c
    n++
  }
}
