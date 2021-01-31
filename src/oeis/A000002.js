// Kolakoski sequence
export default function* A000002() {
    for (const n of [1, 2, 2]) {
        yield n
    }
    let p = true
    const g = A000002()
    g.next()
    g.next()
    for (const r of g) {
        p = !p
        for (let i=0; i<r; i++) {
            yield p + 1
        }
    }
}