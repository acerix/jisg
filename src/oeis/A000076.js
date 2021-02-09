// Number of integers <= 2^n of form 4 x^2 + 4 x y + 5 y^2.
export default function* A000076() {
    for (const n of [0, 0, 1, 2, 4, 7, 14, 24, 43, 82, 149, 284, 534, 1015, 1937, 3713, 7136, 13759, 26597, 51537, 100045, 194586, 378987, 739161, 1443465, 2821923, 5522689, 10818037, 21208747, 41612533, 81704494, 160531078, 315602635, 620831732, 1221915127, 2406177404, 4740454046, 9343415302, 18423548106, 36342329321, ]) {
        yield n
    }
}
