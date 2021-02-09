// Partial sums of (unordered) ways of making change for n cents using coins of 1, 2, 5, 10 cents.
export default function* A000064() {
    for (const n of [1, 2, 4, 6, 9, 13, 18, 24, 31, 39, 50, 62, 77, 93, 112, 134, 159, 187, 218, 252, 292, 335, 384, 436, 494, 558, 628, 704, 786, 874, 972, 1076, 1190, 1310, 1440, 1580, 1730, 1890, 2060, 2240, 2435, 2640, 2860, 3090, 3335, 3595, 3870, 4160, 4465, 4785, 5126, ]) {
        yield n
    }
}
