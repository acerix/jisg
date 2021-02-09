// Number of n-node triangulations of sphere in which every node has degree >= 4.
export default function* A000103() {
    for (const n of [0, 0, 1, 1, 2, 5, 12, 34, 130, 525, 2472, 12400, 65619, 357504, 1992985, 11284042, 64719885, 375126827, 2194439398, 12941995397, 76890024027, 459873914230, 2767364341936, 16747182732792, ]) {
        yield n
    }
}
