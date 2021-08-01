// Greatest prime factorization of n
import {prime_factorization} from '../utils'
export default function* A006530(): Generator<number> {
  yield 1
  for (let n=2; n; n++) {
    const pf = prime_factorization(n)
    yield pf[pf.length-1]
  }
}
