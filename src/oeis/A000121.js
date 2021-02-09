// Number of representations of n as a sum of Fibonacci numbers (1 is allowed twice as a part).
export default function* A000121() {
    for (const n of [1, 2, 2, 3, 3, 3, 4, 3, 4, 5, 4, 5, 4, 4, 6, 5, 6, 6, 5, 6, 4, 5, 7, 6, 8, 7, 6, 8, 6, 7, 8, 6, 7, 5, 5, 8, 7, 9, 9, 8, 10, 7, 8, 10, 8, 10, 8, 7, 10, 8, 9, 9, 7, 8, 5, 6, 9, 8, 11, 10, 9, 12, 9, 11, 13, 10, 12, 9, 8, 12, 10, 12, 12, 10, 12, 8, 9, 12, 10, 13, 11, 9, 12, 9, 10, 11, 8, 9, 6, 6, 10, 9, ]) {
        yield n
    }
}
