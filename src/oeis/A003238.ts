// Number of rooted trees with n vertices in which vertices at the same level have the same degree
export default function* A003238(): Generator<bigint> {
  const r: number[] = [1]
  for (let i = 1; /*∞*/; i++) {
    r.push(1)
    for (let j = 2; j < i; j++) {
      if (i % j === 1) {
        r[i] += r[j] as number
      }
    }
    yield BigInt(r[i] as number)
  }
}
