// Golomb's sequence
const Deque = require('collections/deque')
export default function* A001462() {
    for (let n of [1, 2, 2]) {
        yield n
    }
    let q = new Deque([2])
    let n = 3
    while (true) {
        for (let i=0; i<q[0]; i++) {
            yield n
            q.push(n)
        }
        n++
        q.popleft()
    }
}
