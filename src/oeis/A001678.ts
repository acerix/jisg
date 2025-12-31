// Number of series-reduced planted trees with n nodes.
// G.f.: A(x) satisfies A(x) = (x^2/(1+x))*exp( Sum_{k>=1} A(x^k)/(k*x^k) )
export default function* A001678(): Generator<bigint> {
  yield 0n
  yield 0n
  const g = [0n, 0n] // coefficients of g(x), g[n] = a(n)
  
  // Helper to compute E_m = [x^m] exp(S)
  // We need to maintain E array?
  // We can recompute or optimize.
  // Since we yield one by one, we can maintain state.
  
  // D[k] = sum_{q|k} q * g[q+1]
  // E[n] = (1/n) * sum_{k=1}^n D[k] * E[n-k]
  
  const D = [0n] // 1-based index
  const E = [1n] // 0-based index. E[0] = 1.
  
  let n = 2 // Next index to compute is g[2]
  
  for (;;) {
    if (n === 2) {
      g.push(1n)
      yield 1n
      n++
      continue
    }
    
    // We need g[n].
    // g[n] = E[n-2] - g[n-1]
    
    // We need E[n-2]. E is currently up to index...
    // To compute E[m], we need D[1..m].
    // D[k] needs g[q+1].
    // Max k needed is n-2.
    // Max q+1 needed? q|k => q <= k. q+1 <= k+1 = n-1.
    // So we need g up to n-1. We have it!
    
    // Update D up to size n-2
    // We only added g[n-1]. We need to update D for k where (q+1) = n-1 => q = n-2.
    // So if q = n-2 is a divisor of k, we add term.
    // But D is used for E.
    // Let's compute iteratively.
    
    // Ensure D is filled up to n-2
    while (D.length <= n - 2) {
      const k = D.length
      // Calculate D[k]
      let sum = 0n
      for (let q = 1; q <= k; q++) {
        if (k % q === 0) {
          sum += BigInt(q) * g[q + 1]
        }
      }
      D.push(sum)
    }
    
    // Ensure E is filled up to n-2
    while (E.length <= n - 2) {
      const m = E.length
      // Calculate E[m]
      let sum = 0n
      for (let k = 1; k <= m; k++) {
        sum += D[k] * E[m - k]
      }
      if (sum % BigInt(m) !== 0n) {
        throw new Error(`Integrity check failed: E[${m}] not integer`)
      }
      E.push(sum / BigInt(m))
    }
    
    const val = E[n - 2] - g[n - 1]
    g.push(val)
    yield val
    n++
  }
}