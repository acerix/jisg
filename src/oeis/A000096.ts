// a(n) = n*(n+3)/2
export default function* A000096(): Generator<bigint> {
  for (let n = 0n; /*∞*/; n++) {
    yield (n * (n + 3n)) / 2n
  }
}
