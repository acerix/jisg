// Smallest number not dividing n^2.
export default function* A236454(): Generator<bigint> {
  for (let n = 1n; /*∞*/; n++) {
    for (let i = 1n; /*∞*/; i++) {
      if (n**2n % i !== 0n) {
        yield i
        break
      }
    }
  }
}
