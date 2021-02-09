// Multiplicative with a(2^e) = 2 for k >= 1; a(3) = 2, a(3^e) = 0 for k >= 2; a(p^e) = 0 if p > 3 and p == -1 (mod 3); a(p^e) = 2 if p > 3 and p == 1 (mod 3).
export default function* A000091() {
    for (const n of [1, 2, 2, 2, 0, 4, 2, 2, 0, 0, 0, 4, 2, 4, 0, 2, 0, 0, 2, 0, 4, 0, 0, 4, 0, 4, 0, 4, 0, 0, 2, 2, 0, 0, 0, 0, 2, 4, 4, 0, 0, 8, 2, 0, 0, 0, 0, 4, 2, 0, 0, 4, 0, 0, 0, 4, 4, 0, 0, 0, 2, 4, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 4, 0, 4, 0, 8, 2, 0, 0, 0, 0, 8, 0, 4, 0, 0, 0, 0, 4, 0, 4, 0, 0, 4, 2, 4, 0, 0, 0, 0, 2, 4, 0, ]) {
        yield n
    }
}
