
// Helper to get prime factors of n (without multiplicity)
function getPrimeFactors(n: bigint): bigint[] {
  const factors = primeFactorization(n, true)
  const unique = new Set(factors)
  return Array.from(unique)
}

// Generate all divisors of n from prime factors (for square-free n)
function getDivisors(primes: bigint[]): bigint[] {
  const divs = [1n]
  for (const p of primes) {
    const len = divs.length
    for (let i = 0; i < len; i++) {
      divs.push(divs[i] * p)
    }
  }
  return divs
}

// Count primes q in list 'primes' such that q = 1 mod p
function countCp(primes: bigint[], p: bigint): bigint {
  let count = 0n
  for (const q of primes) {
    if ((q - 1n) % p === 0n) {
      count++
    }
  }
  return count
}

function countGroupsSquareFree(n: bigint): bigint {
  const primes = getPrimeFactors(n) // primes of n
  const divisors = getDivisors(primes)
  
  let total = 0n
  
  for (const m of divisors) {
    const n_m = n / m
    const primes_n_m = getPrimeFactors(n_m)
    const primes_m = getPrimeFactors(m)
    
    let product = 1n
    for (const p of primes_n_m) {
      const c = countCp(primes_m, p)
      const num = p ** c - 1n
      const den = p - 1n
      product *= (num / den)
    }
    total += product
  }
  
  return total
}

// Number of groups of order n
export default function* A000001(): Generator<bigint> {
  yield 0n // n=0
  for (let n = 1n; ; n++) {
    if (EXCEPTIONS.has(n)) {
      yield EXCEPTIONS.get(n)!
    } else if (isSquareFree(n)) {
      yield countGroupsSquareFree(n)
    } else {
      yield 0n 
    }
  }
}
