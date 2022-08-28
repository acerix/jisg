import A000040 from './A000040'

// Prime powers: numbers of the form p^k where p is a prime and k >= 1.
export default function* A246655(): Generator<bigint> {
  const primes: bigint[] = []
  const primesCurrentExponent: bigint[] = []
  const r = new Set<bigint>()
  for (const n of A000040()) {
    for (const v of [...r].sort((a, b) => Number(a - b))) {
      if (v > n) {
        break
      }
      yield v
      r.delete(v)
    }
    yield n
    primes.push(n)
    primesCurrentExponent.push(2n)
    Object.keys(primes).forEach((i) => {
      const j = parseInt(i, 10)
      let value = -1n
      for (
        let exponent = primesCurrentExponent[j] as bigint;
        value < n;
        exponent++
      ) {
        value = BigInt(Number(primes[j] as bigint) ** Number(exponent))
        r.add(value)
        primesCurrentExponent[j]++
      }
    })
  }
}
