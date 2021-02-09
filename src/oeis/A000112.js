// Number of partially ordered sets ("posets") with n unlabeled elements.
export default function* A000112() {
    for (const n of [1, 1, 2, 5, 16, 63, 318, 2045, 16999, 183231, 2567284, 46749427, 1104891746, 33823827452, 1338193159771, 68275077901156, 4483130665195087, ]) {
        yield n
    }
}
