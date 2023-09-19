// a(n) = sigma(n), the sum of the divisors of n. Also called sigma_1(n).
export default function* A000203(): Generator<bigint> {
  let c = 1
  for (let n = 1; /*∞*/; n++) {
    const sigma: bigint[] = []
    for (let i = 1; i <= n; i++) {
      for (let j = i; j <= n; j += i) {
        sigma[j] = (sigma[j] || 0n) + BigInt(i)
      }
    }
    if (n > c) {
      yield sigma[c] as bigint
      c++
    }
  }
}
