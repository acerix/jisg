// Cake numbers: maximal number of pieces resulting from n planar cuts through a cube (or cake): C(n+1,3)+n+1.
export default function* A000125() {
    for (const n of [1, 2, 4, 8, 15, 26, 42, 64, 93, 130, 176, 232, 299, 378, 470, 576, 697, 834, 988, 1160, 1351, 1562, 1794, 2048, 2325, 2626, 2952, 3304, 3683, 4090, 4526, 4992, 5489, 6018, 6580, 7176, 7807, 8474, 9178, 9920, 10701, 11522, 12384, 13288, 14235, 15226, ]) {
        yield n
    }
}
