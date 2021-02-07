// Mersenne primes
import is_prime from 'is-prime'
import A000040 from './A000040'
export default function* A000668() {
    for (const n of A000040()) {
        const x = Math.pow(2, n) - 1
        if (is_prime(x)) {
            yield x
        }
    }
}
