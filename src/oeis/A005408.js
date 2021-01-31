// The odd numbers
export default function* A005408() {
    let n = 1
    while (true) {
        yield n
        n += 2
    }
}