// Characteristic function of primes
import is_prime from 'is-prime'
export default function* A010051() {
    let n = 1
    while (true) {
        yield +is_prime(n)
        n++
    }
}