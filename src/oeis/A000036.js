// Let A(n) = #{(i,j): i^2 + j^2 <= n}, V(n) = Pi*n, P(n) = A(n) - V(n); A000099 gives values of n where |P(n)| sets a new record; sequence gives closest integer to P(A000099(n)).
export default function* A000036() {
    for (const n of [2, 3, 5, 6, 6, -6, 7, 8, 10, 13, 13, 13, 14, -17, 17, 17, 18, -19, 20, -22, 23, 27, -29, -29, 29, -31, -32, -35, 36, -37, -40, -43, -46, -48, -50, -53, -55, -57, -60, -60, -61, -63, -66, -66, -68, -71, -74, -77, -79, -82, -85, -88, -89, -92, -95, -96, -97, -97, -100, ]) {
        yield n
    }
}
