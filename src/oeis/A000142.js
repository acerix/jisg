// Factorial numbers
export default function* A000142() {
    let n = 1, r = 1
    while (true) {
        yield r
        r *= n
        n++
    }
}