// The number of divisors of n
export default function* A000005() {
    yield 1
    let n = 2
    while (true) {
        let c = 2
        for (let i=2; i<n; i++) {
            if (n % i === 0) {
                c++
            }
        }
        yield c
        n++
    }
}