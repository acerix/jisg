// The primes
import is_prime from 'is-prime'
export default function* A000040() {
    let n = 2
    while (true) {
        if (is_prime(n)) {
            yield n
        }
        n++
    }
}
