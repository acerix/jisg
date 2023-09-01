import { primeFactorization } from '../utils'

// Greatest prime factorization of n
export default function* A006530(): Generator<bigint> {
  yield 1n
  for (let n = 2n; n; n++) {
    const pf = primeFactorization(n)
    yield pf[pf.length - 1] as bigint
  }
}
