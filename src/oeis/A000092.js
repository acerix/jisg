// Let A(n) = #{(i,j,k): i^2 + j^2 + k^2 <= n}, V(n) = (4/3)Pi*n^(3/2), P(n) = A(n) - V(n); sequence gives values of n where |P(n)| sets a new record.
export default function* A000092() {
    for (const n of [1, 2, 5, 6, 14, 21, 29, 30, 54, 90, 134, 155, 174, 230, 234, 251, 270, 342, 374, 461, 494, 550, 666, 750, 810, 990, 1890, 2070, 2486, 2757, 2966, 3150, 3566, 3630, 4554, 4829, 5670, 5750, 8154, 8382, 8774, 8910, 10350, 10710, 15734, 15750, 16302, 17550, ]) {
        yield n
    }
}
