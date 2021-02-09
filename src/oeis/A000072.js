// Number of positive integers <= 2^n of form x^2 + 4 y^2.
export default function* A000072() {
    for (const n of [1, 1, 2, 4, 7, 12, 22, 41, 72, 137, 254, 476, 901, 1716, 3274, 6286, 12090, 23331, 45140, 87511, 169972, 330752, 644499, 1257523, 2456736, 4804666, 9405749, 18429828, 36141339, 70928099, 139295793, 273741700, 538277486, 1059051586, 2084763319, 4105924366, ]) {
        yield n
    }
}
