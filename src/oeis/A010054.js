// n is triangular
export default function* A010054() {
    let n = 0
    while (true) {
        yield 1
        for (let i=0; i<n; i++) {
            yield 0
        }
        n++
    }
}
