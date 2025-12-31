
// Verify A001678 recurrence
// g(x) = x^2 / (1+x) * exp( sum_{k>=1} g(x^k)/(k*x^k) )
// g(x) * (1+x) = x^2 * exp( sum ... )

const MAX_N = 20
const g = new Array(MAX_N + 1).fill(0n)

// We know g starts with 0, 0
// g[2] should be 1
// Let's iterate
// n corresponds to x^n coeff

// g(x) = sum(g[i]x^i)
// RHS involves g[i] for i < n?
// g(x^k) has terms x^{k*i}.
// g(x^k)/(k*x^k) = sum(g[i] x^{ki - k}) / k
// Lowest power: i=2 -> x^{2k-k} = x^k.
// So for k=1: sum g[i] x^{i-1}. Lowest x^1.
// For k=2: sum g[i] x^{2i-2}. Lowest x^2.
// So exp arg has terms x^1, x^2...
// x^2 * exp(...) has terms x^3, x^4...
// LHS: g(x) + x g(x) = g_n + g_{n-1}
// RHS starts at x^3?
// If RHS starts at x^3, then g_2 + g_1 = 0 => g_2 = 0?
// But we expect g_2 = 1.
// Maybe the formula has a different term?
// The formula might be g(x) = x + ...?
// Or A001678 is n=1..
// Let's print the calculation.

function solve() {
  // Base case?
  // If we assume g[2]=1.
  g[2] = 1n
  
  for (let n = 3; n <= MAX_N; n++) {
    // We need coefficient of x^n in RHS - g[n-1]
    // RHS = x^2 * exp(S)
    // S = sum_{k>=1} (1/k) * sum_{j>=2} g[j] x^{j*k - k}
    
    // We need coeff of x^{n-2} in exp(S)
    // Let E = exp(S).
    // E[m] depends on S[1..m]
    // S[m] depends on g[j]
    
    // S[m]: coeff of x^m in S
    // S(x) = sum_{k>=1} sum_{j>=2} (g[j]/k) x^{k(j-1)}
    // Let p = k(j-1). We want p=m.
    // m = k(j-1).
    // For a given m, iterate k divisors of m?
    // k | m. Let j-1 = m/k => j = m/k + 1.
    // So S[m] = sum_{k|m} g[m/k + 1] / k.
    // Note: g[j] is integer, but division by k?
    // The formula usually works with integers.
    // Maybe use BigInt everywhere and hope it divides?
    // Or solve for g[n] iteratively.
    
    // S[m] involves g[j].
    // Max j? m = k(j-1) => j-1 = m/k => j = m/k + 1.
    // If k=1, j = m+1.
    // So S[m] involves g[m+1].
    // Wait. To find g[n], we need S[n-2].
    // S[n-2] involves g[n-2+1] = g[n-1].
    // So S[n-2] is known!
    // So we can compute E[n-2].
    
    // Let's compute S up to m = n-2.
    // Then exp(S) up to n-2.
    
    // S array
    const S = new Array(n).fill(0n) // coeffs 0..n-1
    // Fill S[1..n-2]
    // actually we need S up to n-2.
    for (let m = 1; m <= n - 2; m++) {
      let sum = 0n
      // Divisors of m
      for (let k = 1; k <= m; k++) {
        if (m % k === 0) {
          const j = Math.floor(m / k) + 1
          // We need g[j]. Since j = m/k + 1 <= m + 1 = n - 2 + 1 = n - 1.
          // g[j] is known (since we are calculating g[n], and j < n).
          // Check divisibility
          // g[j] might not be divisible by k individually?
          // Usually in these formulas, the sum is divisible.
          // But here we're summing BigInts.
          // Let's assume it works.
          // Wait, division by k in integer arithmetic?
          // sum += g[j] / BigInt(k) ??
          // Better: multiply everything by something?
          // No, these recurrences usually yield integers.
          // Let's store scaled S?
          // Actually, standard Exp formula:
          // n a_n = sum_{k=1}^n k s_k a_{n-k} ?
          // E' = E * S' ?
          // Let's use the recurrence for Exp.
          // If E = exp(S), then E' = E * S'.
          // n e_n = sum_{i=1}^n i s_i e_{n-i}.
          // Here S is known.
          // We can compute e_n.
        }
      }
    }
    
    // Okay, simpler approach for Exp:
    // E[0] = 1
    // E[m] = (1/m) * sum_{k=1}^m k * S[k] * E[m-k]
    // We need S[k].
    // S[k] = sum_{d|k} g[k/d + 1] / d ?
    // Let's re-verify the S formula.
    // sum_{k>=1} g(x^k)/(k x^k)
    // coeff of x^m:
    // sum_{k|m} g(x^k)/(k x^k) | at x^m ?
    // term k: g(x^k) has powers x^{kj}.
    // term is g_j x^{kj} / (k x^k) = (g_j/k) x^{k(j-1)}.
    // let k(j-1) = m.
    // So for each divisor k of m, let target power be m.
    // j-1 = m/k => j = m/k + 1.
    // coeff is g[m/k+1] / k.
    
    // So S[m] = sum_{k|m} g[m/k + 1] / k.
    
    // Now compute E[n-2].
    const E = new Array(n).fill(0n)
    E[0] = 1n
    
    // We need E up to index target = n-2
    const target = n - 2
    for (let i = 1; i <= target; i++) {
        let sum = 0n
        for (let k = 1; k <= i; k++) {
            // Compute S[k]
            let Sk = 0n
            // divisors of k
            for (let d = 1; d <= k; d++) {
                if (k % d === 0) {
                    const j = k/d + 1
                    // g[j] must be divisible by d?
                    // Or the whole sum S[k] is?
                    // We'll do division at the end?
                    // Actually, if we use the derivative trick for exp:
                    // n e_n = sum k S_k e_{n-k}
                    // The derivative of S is S' = sum k S_k x^{k-1}.
                    // Actually simpler:
                    // log E = S
                    // E' / E = S'
                    // E' = E S'
                    // n e_n = sum_{k=1}^n (k s_k) e_{n-k}
                    // Let T_k = k s_k.
                    // T_k = k * sum_{d|k} g[k/d+1]/d = sum_{d|k} (k/d) g[k/d+1].
                    // Let q = k/d.
                    // T_k = sum_{q|k} q g[q+1].
                    // This is strictly integers!
                }
            }
            // sum += T_k * E[i-k]
            let Tk = 0n
            for (let d = 1; d <= k; d++) {
                if (k % d === 0) {
                    const q = k / d
                    Tk += BigInt(q) * g[q+1]
                }
            }
            sum += Tk * E[i-k]
        }
        if (sum % BigInt(i) !== 0n) {
            console.log(`Error: E[${i}] not integer`)
        }
        E[i] = sum / BigInt(i)
    }
    
    // RHS coeff of x^n is E[n-2]
    // LHS coeff of x^n is g[n] + g[n-1]
    // g[n] = E[n-2] - g[n-1]
    
    g[n] = E[target] - g[n-1]
  }
  
  console.log(g.join(', '))
}

solve()
