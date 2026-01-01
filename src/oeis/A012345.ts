// Coefficients in the expansion sinh(arcsin(x)*arcsin(x)) = 2*x^2/2!+8*x^4/4!+248*x^6/6!+11328*x^8/8!+...

const FACTORIALS: bigint[] = [1n]
function factorial(n: number): bigint {
  while (FACTORIALS.length <= n) {
    FACTORIALS.push(FACTORIALS[FACTORIALS.length - 1] * BigInt(FACTORIALS.length))
  }
  return FACTORIALS[n]
}

function nCr(n: number, r: number): bigint {
  return factorial(n) / (factorial(r) * factorial(n - r))
}

export default function* A012345(): Generator<bigint> {
  // y_coeffs[i] corresponds to the coefficient of x^(2i)/(2i)! in (arcsin x)^2
  // We know y_coeffs[0] = 0 (constant term is 0)
  // y_coeffs[1] = 2
  const y_coeffs: bigint[] = [0n, 2n]
  
  // y_powers[k] is an array of coefficients for [(arcsin x)^2]^k
  // y_powers[k][i] corresponds to x^(2i)/(2i)!
  // y_powers[1] is just y_coeffs
  const y_powers: bigint[][] = [
    [1n],       // Y^0 = 1 (constant 1, all other coeffs 0, but we handle index 0 specifically)
    [0n, 2n]    // Y^1
  ]

  // We start yielding from the first non-zero term which corresponds to index 1 (x^2)
  // The user wants the sequence 2, 8, ...
  yield 2n

  let m = 1 // current max index in y_coeffs (x^(2m))
  
  while (true) {
    m++ // Calculate for x^(2m)
    
    // 1. Calculate next term for Y (arcsin x)^2
    // B_{2m} = (2m-2)^2 * B_{2m-2}
    const prevB = y_coeffs[m - 1]
    const nextB = BigInt(2 * m - 2) ** 2n * prevB
    y_coeffs.push(nextB)
    
    // Update Y^1
    y_powers[1].push(nextB)
    
    // 2. Update powers Y^k for k = 2, 3, ... m
    // We only need up to k=m because Y starts at x^2, so Y^k starts at x^(2k).
    // If k > m, the coefficient for x^(2m) is 0.
    
    // We also need to extend the previous power arrays if they don't have this index?
    // Actually we are building them incrementally.
    
    for (let k = 2; k <= m; k++) {
      if (y_powers.length <= k) {
        y_powers.push(new Array(m).fill(0n)) // Fill 0s up to m-1
      }
      
      // Compute coefficient for x^(2m) in Y^k = Y * Y^(k-1)
      // C_m = sum_{j=0 to m} nCr(2m, 2j) * A_j * B_{m-j}
      // Here A = Y, B = Y^(k-1)
      let term = 0n
      for (let j = 0; j <= m; j++) {
        const coeffY = y_coeffs[j] // A_j
        const coeffPrev = y_powers[k - 1][m - j] // B_{m-j}
        
        // Optimization: y_coeffs[0] is 0. coeffPrev[0] is 0 (for k-1 >= 1).
        if (coeffY === 0n || coeffPrev === 0n) continue
        
        term += nCr(2 * m, 2 * j) * coeffY * coeffPrev
      }
      y_powers[k].push(term)
    }
    
    // 3. Compute S_m = coefficient of x^(2m)/(2m)! in sinh(Y)
    // S = sum_{k odd} Y^k / k!
    let total = 0n
    for (let k = 1; k <= m; k += 2) {
      const val = y_powers[k][m]
      total += val / factorial(k)
    }
    
    yield total
  }
}