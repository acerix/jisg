// Mersenne exponents
import is_prime from 'is-prime'
export default function* A000043() {
    let n = 2
    while (true) {
        if (is_prime(n) && is_prime(Math.pow(2, n) - 1)) {
            yield n
        }
        n++
    }
}
