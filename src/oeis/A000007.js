// The characteristic function of {0}: a(n) = 0^n.
export default function* A000007() {
    yield 1
    while (true) {
        yield 0
    }
}