// Greatest prime factorization of n
import is_prime from 'is-prime'
import yield_prime from './A000040'
function prime_factorization(n) {
    if (n <= 1) {
        return []
    }
    if (is_prime(n)) {
        return [n]
    }
    const result = []
    for (let i of yield_prime()) {
        while (n % i === 0) {
            n /= i
        }
        if (n === 1) {
            return result
        }
    }
}
export default function* A006530() {
    yield 1
    let n = 2
    while (true) {
        yield prime_factorization(n)[-1]
        n++
    }
}
