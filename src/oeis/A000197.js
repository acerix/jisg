// a(n) = (n!)!.
export default function* A000197() {
    for (const n of [1, 1, 2, 720, 620448401733239439360000, ]) {
        yield n
    }
}
