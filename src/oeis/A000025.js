// Coefficients of the 3rd order mock theta function f(q).
export default function* A000025() {
    for (const n of [1, 1, -2, 3, -3, 3, -5, 7, -6, 6, -10, 12, -11, 13, -17, 20, -21, 21, -27, 34, -33, 36, -46, 51, -53, 58, -68, 78, -82, 89, -104, 118, -123, 131, -154, 171, -179, 197, -221, 245, -262, 279, -314, 349, -369, 398, -446, 486, -515, 557, -614, 671, -715, 767, -845, 920, -977, 1046, -1148, 1244, ]) {
        yield n
    }
}
