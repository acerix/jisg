// a(n) = (n!)!.
export default function* A000197(): Generator<bigint> {
  for (const n of [1n, 1n, 2n, 720n, 620448401733239439360000n, ]) {
    yield n
  }
}
