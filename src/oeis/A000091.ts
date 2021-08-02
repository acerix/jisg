// Multiplicative with a(2^e) = 2 for k >= 1; a(3) = 2n, a(3^e) = 0 for k >= 2; a(p^e) = 0 if p > 3 and p == -1 (mod 3); a(p^e) = 2 if p > 3 and p == 1 (mod 3).
export default function* A000091(): Generator<bigint> {
  for (const n of [1n, 2n, 2n, 2n, 0n, 4n, 2n, 2n, 0n, 0n, 0n, 4n, 2n, 4n, 0n, 2n, 0n, 0n, 2n, 0n, 4n, 0n, 0n, 4n, 0n, 4n, 0n, 4n, 0n, 0n, 2n, 2n, 0n, 0n, 0n, 0n, 2n, 4n, 4n, 0n, 0n, 8n, 2n, 0n, 0n, 0n, 0n, 4n, 2n, 0n, 0n, 4n, 0n, 0n, 0n, 4n, 4n, 0n, 0n, 0n, 2n, 4n, 0n, 2n, 0n, 0n, 2n, 0n, 0n, 0n, 0n, 0n, 2n, 4n, 0n, 4n, 0n, 8n, 2n, 0n, 0n, 0n, 0n, 8n, 0n, 4n, 0n, 0n, 0n, 0n, 4n, 0n, 4n, 0n, 0n, 4n, 2n, 4n, 0n, 0n, 0n, 0n, 2n, 4n, 0n, ]) {
    yield n
  }
}
