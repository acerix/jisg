// The nonnegative even numbers
export default function* A005843() {
    let n = 0
    while (true) {
        yield n
        n += 2
    }
}