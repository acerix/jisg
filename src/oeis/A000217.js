// Triangular numbers
export default function* A000217() {
    let n = 0, sum = 0
    while (true) {
        sum += n
        yield sum
        n++
    }
}
