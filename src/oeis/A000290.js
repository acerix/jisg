// The squares
export default function* A000290() {
    let n = 0
    while (true) {
        yield Math.pow(n, 2)
        n++
    }
}
