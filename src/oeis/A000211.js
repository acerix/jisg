// a(n) = a(n-1) + a(n-2) - 2, a(0) = 4, a(1) = 3.
export default function* A000211() {
    for (const n of [4, 3, 5, 6, 9, 13, 20, 31, 49, 78, 125, 201, 324, 523, 845, 1366, 2209, 3573, 5780, 9351, 15129, 24478, 39605, 64081, 103684, 167763, 271445, 439206, 710649, 1149853, 1860500, 3010351, 4870849, 7881198, ]) {
        yield n
    }
}
