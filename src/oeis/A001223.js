// Prime gaps
import yield_prime from './A000040'
export default function* A001223() {
    const primes = yield_prime()
    let p = primes.next().value
    for (let n of primes) {
        yield n - p
        p = n
    }
}