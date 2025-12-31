import { sigma } from '../utils'

// Number of partitions of n into distinct parts
export default function* A000009(): Generator<bigint> {
  const history = [1n]
  yield 1n // a(0)
  for (let n = 1n; ; n++) {
    let sum = 0n
    for (let k = 1n; k <= n; k++) {
      let m = k
      while (m % 2n === 0n) {
        m /= 2n
      }
      const s = sigma(m)
      sum += s * history[Number(n - k)]
    }
    const an = sum / n
    history.push(an)
    yield an
  }
}
