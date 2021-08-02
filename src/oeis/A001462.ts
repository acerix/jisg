// Golomb's sequence
export default function* A001462(): Generator<bigint> {
  for (const n of [1n, 2n, 2n]) {
    yield n
  }
  const q: bigint[] = [2n]
  let n = 3n
  for (;;) {
    for (let i=0; i<q[0]; i++) {
      yield n
      q.push(n)
    }
    n++
    q.shift()
  }
}
