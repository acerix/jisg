// Greatest prime factorization of n
import {prime_factorization} from '../utils'
export default function* A006530() {
    yield 1
    let n = 2
    while (true) {
        let pf = prime_factorization(n)
        if (pf.length) {
            yield pf.pop()
        }
        n++
    }
}
