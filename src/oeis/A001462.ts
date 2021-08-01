// Golomb's sequence
export default function* A001462(): Generator<number> {
  for (const n of [1, 2, 2]) {
    yield n
  }
  const q = [2]
  let n = 3
  for (;;) {
    for (let i=0; i<q[0]; i++) {
      yield n
      q.push(n)
    }
    n++
    q.shift()
  }
}
