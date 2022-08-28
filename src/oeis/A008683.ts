import A000040 from './A000040'

// Möbius (or Moebius) function mu(n). mu(1) = 1; mu(n) = (-1)^k if n is the product of k different primes; otherwise mu(n) = 0.
export default function* A008683(): Generator<bigint> {
  yield 1n
  for (let n = 2n; ; n++) {
    let t = n
    let k = 0n
    search: for (const p of A000040()) {
      let dividedBy = false
      while (t % p === 0n) {
        if (dividedBy) {
          yield 0n
          break search
        }
        t /= p
        dividedBy = true
        k++
      }
      if (t === 1n) {
        yield BigInt((-1) ** Number(k))
        break search
      }
    }
  }
}
