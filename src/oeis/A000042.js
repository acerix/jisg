//	Unary representation of natural numbers
export default function* A000042() {
    let s = ''
    while (true) {
        s += '1'
        yield Number(s)
    }
}