// Powers of 6
export default function* A000400() {
    let n = 1
    while (true) {
        yield n
        n *= 6
    }
}
