function isCarmichael(n: number): boolean {
  const max = Math.ceil(Math.sqrt(n))
  let cn = n
  for (let i = 3; i < max; i += 2) {
    if (cn % i === 0) {
      cn /= i
      if (cn % i === 0 || (n - 1) % (i - 1)) {
        return false
      }
    }
  }
  return cn === 1
}

// Carmichael numbers: composite numbers n such that a^(n-1) == 1 (mod n) for every a coprime to n.
export default function* A002997(): Generator<bigint> {
  for (let n = 3; /*∞*/; n += 2) {
    if (isCarmichael(n)) {
      yield BigInt(n)
    }
  }
}
