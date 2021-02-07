// The cubes: a(n) = n^3.
export default function* A000578() {
    let n = 0
    while (true) {
        yield Math.pow(n, 3)
        n++
    }
}