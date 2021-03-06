// Smith numbers
import is_prime from 'is-prime'
import {digit_sum, prime_factorization} from '../utils'
export default function* A006753() {
    let n = 2
    while (true) {
        if (!is_prime(n)) {
            const dsum = digit_sum(n)
            let fsum = 0
            for (const i of prime_factorization(n, true)) {
                fsum += digit_sum(i)
            }
            if (dsum === fsum) {
                yield n
            }
        }
        n++
    }
}