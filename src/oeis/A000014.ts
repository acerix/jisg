import A059123 from './A059123'
import A001678 from './A001678'

// Number of series-reduced trees with n nodes.
// Unrooted series-reduced trees.
// Formula: A(x) = ((x-1)/x)*f(x) + ((1+x)/x^2)*g(x) - (1/x^2)*g(x)^2
// where f(x) is G.f. for A059123 and g(x) is G.f. for A001678.
//
// A059123 starts 0, 1, 1, 2... so f(x) = x + x^2 + 2x^3... (order x)
// A001678 starts 0, 0, 1, 0, 1... so g(x) = x^2 + ... (order x^2)
//
// Let's align coefficients:
// A(x) = f(x) - f(x)/x + g(x)/x^2 + g(x)/x - (g(x)/x)^2
//      = f(x) - f(x)/x + g(x)/x^2 + g(x)/x - (g(x)^2)/x^2
//
// n-th coefficient a_n = [x^n] A(x)
// a_n = f_n - f_{n+1} + g_{n+2} + g_{n+1} - [x^n] (g^2 / x^2)
// [x^n] (g^2/x^2) = [x^{n+2}] g^2
// Let H = g^2. H_k = sum g_i g_{k-i}.
// a_n = f_n - f_{n+1} + g_{n+2} + g_{n+1} - H_{n+2}
//
// Note: sequence starts at n=0?
// A000014: 0, 1, 1, 0, 1...
// n=0: 0.
// n=1: 1.
// Formula uses division by x, x^2.
// f(x)/x requires f_0=0. (True).
// g(x)/x^2 requires g_0=0, g_1=0. (True, g starts 0,0,1...).
// So all divisions are exact.
//
// We need f_{n+1}, g_{n+2}.
// So to compute a_n, we need future terms of f and g.
// But f and g are infinite generators. We can fetch them.
// Note: We need to buffer f and g.

export default function* A000014(): Generator<bigint> {
  const fGen = A059123()
  const gGen = A001678()
  
  const f: bigint[] = []
  const g: bigint[] = []
  
  // Fill initial buffer
  // We need f_{n+1} and g_{n+2}. For n=0, we need f_1, g_2.
  
  // Yield 0 for n=0?
  // a_0 = f_0 - f_1 + g_2 + g_1 - H_2
  // f: 0, 1...
  // g: 0, 0, 1...
  // f_0=0, f_1=1.
  // g_1=0, g_2=1.
  // H_2 = g_0 g_2 + g_1 g_1 + g_2 g_0 = 0.
  // a_0 = 0 - 1 + 1 + 0 - 0 = 0. Correct.
  
  let n = 0
  for (;;) {
    // Ensure we have f up to n+1
    while (f.length <= n + 1) {
      f.push(fGen.next().value)
    }
    // Ensure we have g up to n+2
    while (g.length <= n + 2) {
      g.push(gGen.next().value)
    }
    
    // H_{n+2} = coefficient of x^{n+2} in g(x)^2
    // H_k = sum_{i=0}^k g_i g_{k-i}
    const k = n + 2
    let H_k = 0n
    for (let i = 0; i <= k; i++) {
      H_k += g[i] * g[k - i]
    }
    
    const val = f[n] - f[n + 1] + g[n + 2] + g[n + 1] - H_k
    
    yield val
    n++
  }
}