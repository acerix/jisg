// Powers of 7
export default function* A000420() {
    let n = 1
    while (true) {
        yield n
        n *= 7
    }
}
