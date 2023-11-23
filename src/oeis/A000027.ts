// The positive integers. Also called the natural numbers, the whole numbers or the counting numbers.
export default function* A000027(): Generator<bigint> {
  for (let n = 1n; /*∞*/; n++) {
    yield n
  }
}
