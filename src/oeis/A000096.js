// a(n) = n*(n+3)/2.
export default function* A000096() {
    for (const n of [0, 2, 5, 9, 14, 20, 27, 35, 44, 54, 65, 77, 90, 104, 119, 135, 152, 170, 189, 209, 230, 252, 275, 299, 324, 350, 377, 405, 434, 464, 495, 527, 560, 594, 629, 665, 702, 740, 779, 819, 860, 902, 945, 989, 1034, 1080, 1127, 1175, 1224, 1274, 1325, 1377, 1430, 1484, 1539, 1595, 1652, 1710, 1769, ]) {
        yield n
    }
}
