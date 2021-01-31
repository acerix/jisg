// Square pyramidal numbers
export default function* A000330() {
    let n = 0, sum = 0
    while (true) {
        sum += Math.pow(n, 2)
        yield sum
        n++
    }
}
