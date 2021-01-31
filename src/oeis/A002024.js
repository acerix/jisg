// n appears n times
export default function* A002024() {
    let n = 1
    while (true) {
        for (let x=0; x<n; x++) {
            yield n
        }
        n++
    }
}
