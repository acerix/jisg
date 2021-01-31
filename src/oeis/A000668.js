// Mersenne primes
import is_prime from 'is-prime'
export default function* A000668() {
    let n = 2
    while (true) {
        if (is_prime(n)) {
            let x = Math.pow(2, n) - 1
            if (is_prime(x)) {
                yield x
            }
        }
        n++
    }
}
