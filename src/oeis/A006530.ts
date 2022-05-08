// Greatest prime factorization of n
import { primeFactorization } from '../utils'
export default function* A006530(): Generator<bigint> {
  yield 1n
  for (let n = 2n; n; n++) {
    const pf = primeFactorization(n)
    const p = pf.length - 1
    yield pf[p] as bigint
  }
}
