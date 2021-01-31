// Fibonacci numbers
export default function* A000045() {
    let previous = 0, current = 1
    yield previous
    yield current
    while (true) {
        let sum = current + previous
        previous = current
        current = sum
        yield current
    }
}
