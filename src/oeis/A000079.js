// Powers of 2
export default function* A000079() {
    let n = 0
    while (true) {
        yield Math.pow(2, n)
        n++
    }
}
