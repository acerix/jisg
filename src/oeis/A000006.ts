// Integer part of square root of n-th prime
import A000040 from './A000040'
export default function* A000006(): Generator<bigint> {
  for (const n of A000040()) {
    yield BigInt(Math.sqrt(Number(n)) | 0)
  }
}
