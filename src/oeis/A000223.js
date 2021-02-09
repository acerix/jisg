// Let A(n) = #{(i,j,k): i^2 + j^2 + k^2 <= n}, V(n) = (4/3)Pi*n^(3/2), P(n) = A(n) - V(n); A000092 gives values of n where |P(n)| sets a new record; sequence gives (nearest integer to, I believe) P(A000092(n)).
export default function* A000223() {
    for (const n of [3, 7, 10, 19, 32, 34, 37, 51, 81, 119, 122, 134, 157, 160, 161, 174, 221, 252, 254, 294, 305, 309, 364, 371, 405, 580, 682, 734, 756, 763, 776, 959, 1028, 1105, 1120, 1170, 1205, 1550, 1570, 1576, 1851, 1930, 2028, 2404, 2411, 2565, 2675, 2895, 2905, 2940, 3133, 3211, 3240, 3428, ]) {
        yield n
    }
}
