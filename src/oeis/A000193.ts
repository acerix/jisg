// Nearest integer to log n.
export default function* A000193(): Generator<bigint> {
  for (let n=1n; ; n++) {
    yield BigInt(Math.round(Math.log(Number(n))))
  }
}