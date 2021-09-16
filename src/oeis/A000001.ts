// Number of groups of order n
export default function* A000001(): Generator<bigint> {
  for (const n of [0n, 1n, 1n, 1n, 2n, 1n, 2n, 1n, 5n, 2n, 2n, 1n, 5n, 1n, 2n, 1n, 14n, 1n, 5n, 1n, 5n, 2n, 2n, 1n, 15n, 2n, 2n, 5n, 4n, 1n, 4n, 1n, 51n, 1n, 2n, 1n, 14n, 1n, 2n, 2n, 14n, 1n, 6n, 1n, 4n, 2n, 2n, 1n, 52n, 2n, 5n, 1n, 5n, 1n, 15n, 2n, 13n, 2n, 2n, 1n, 13n, 1n, 2n, 4n, 267n, 1n, 4n, 1n, 5n, 1n, 4n, 1n, 50n, 1n, 2n, 3n, 4n, 1n, 6n, 1n, 52n, 15n, 2n, 1n, 15n, 1n, 2n, 1n, 12n, 1n, 10n, 1n, 4n, 2n, ]) {
    yield n
  }
}

// https://en.wikipedia.org/wiki/Finite_group#Number_of_groups_of_a_given_order
// For p, q, r primes:
// a(p) = 1, a(p^2) = 2, a(p^3) = 5, a(p^4) = 14, if p = 2, otherwise 15.
// a(p^5) = 61 + 2*p + 2*gcd(p-1,3) + gcd(p-1,4), p >= 5, a(2^5)=51, a(3^5)=67.
// a(p^e) ~ p^((2/27)e^3 + O(e^(8/3)))
// a(pq) = 1 if gcd(p,q-1) = 1, 2 if gcd(p,q-1) = p. (p < q)
// a(pq^2) = one of the following:
// * 5, p=2, q odd,
// * (p+9)/2, q=1 mod p, p odd,
// * 5, p=3, q=2,
// * 3, q = -1 mod p, p and q odd.
// * 4, p=1 mod q, p > 3, p != 1 mod q^2
// * 5, p=1 mod q^2
// * 2, q != +/-1 mod p and p != 1 mod q,
// a(pqr) (p < q < r) = one of the following:
// * q==1 mod p r==1 mod p r==1 mod q a(pqr) 
