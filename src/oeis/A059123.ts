import A001678 from './A001678'

// Number of homeomorphically irreducible rooted trees (also known as series-reduced rooted trees, or rooted trees without nodes of degree 2) with n >= 1 nodes.
// G.f.: G(x) = 1 + ((1 + x)/x)*F[x] - (F[x]^2 + F[x^2])/(2*x)
// where F(x) is G.f. for A001678.
// Note: OEIS formula for A059123 says it equals A001679(n) for n>0.
// Also G(x) - 1 is the generating function for A059123 (if A059123(0)=0).
export default function* A059123(): Generator<bigint> {
  const Fgen = A001678()
  const F: bigint[] = [] // 0-based, F[n]
  
  // We need to compute G[n].
  // G(x) = 1 + (1/x + 1) F(x) - (1/2x) F(x)^2 - (1/2x) F(x^2)
  // G(x) = 1 + F(x)/x + F(x) - (F(x)^2)/(2x) - F(x^2)/(2x)
  // Multiply by 2x:
  // 2x G(x) = 2x + 2 F(x) + 2x F(x) - F(x)^2 - F(x^2)
  // 2 G_{n-1} = 2 F_n + 2 F_{n-1} - [x^n] F^2 - [x^n] F(x^2)
  // (Assuming G starts at n=0 with 0, but formula has "1 + ...")
  // Actually, A059123 starts 0, 1, 1, 2...
  // So G(x) = sum a_n x^n. a_0 = 0.
  // The formula gives 1 + ... so maybe a_0=1?
  // OEIS says: "a(n) = A001679(n) if n>0". A001679 starts 1, 1, 2...
  // The mathematica code says `CoefficientList[G[x] - 1, x]`.
  // So G(x) constant term is 1. The sequence values are G_n for n>=1?
  // Or the sequence is coefficients of (G(x)-1).
  // Yes, a(0)=0.
  // So we compute G_n, and yield it.
  
  // Let's iterate n (power of x).
  // 2 G_{n-1} = 2 F_n + 2 F_{n-1} - (F^2)_n - (F(x^2))_n.
  // We need G_{n-1}, so for target N, we use equation for power x^N?
  // Let target power be m = n+1?
  // 2 G_n = 2 F_{n+1} + 2 F_n - (F^2)_{n+1} - (F(x^2))_{n+1}.
  
  // F starts 0, 0, 1... (F_0=0, F_1=0, F_2=1).
  // We need F up to n+1.
  
  yield 0n // a(0)
  
  let n = 1
  for (;;) {
    // Ensure F has enough terms (up to n+1)
    while (F.length <= n + 1) {
      F.push(Fgen.next().value)
    }
    
    // Term (F^2)_{n+1}
    let F2_n1 = 0n
    for (let k = 0; k <= n + 1; k++) {
      F2_n1 += F[k] * F[n + 1 - k]
    }
    
    // Term (F(x^2))_{n+1}
    let Fx2_n1 = 0n
    if ((n + 1) % 2 === 0) {
      Fx2_n1 = F[(n + 1) / 2]
    }
    
    // 2 G_n = 2 F_{n+1} + 2 F_n - F2_n1 - Fx2_n1
    const num = 2n * F[n + 1] + 2n * F[n] - F2_n1 - Fx2_n1
    
    if (num % 2n !== 0n) {
      throw new Error(`Integrity check failed: G[${n}] not integer`)
    }
    
    yield num / 2n
    n++
  }
}