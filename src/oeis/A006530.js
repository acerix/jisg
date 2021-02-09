// Greatest prime factorization of n
import {prime_factorization} from '../utils'
export default function* A006530() {
    yield 1
    let n = 2
    while (true) {
        const pf = prime_factorization(n)
        yield pf.pop()
        n++
    }
}
