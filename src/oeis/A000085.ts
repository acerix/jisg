// Number of self-inverse permutations on n letters, also known as involutions; number of standard Young tableaux with n cells.
export default function* A000085(): Generator<bigint> {
  let previous = 1n,
    current = 1n
  yield previous
  yield current
  for (let n = 1n; /*∞*/; n++) {
    const next = current + previous * n
    previous = current
    current = next
    yield current
  }
}
