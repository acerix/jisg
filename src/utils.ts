
export function digitSum(n: bigint): bigint {
  return String(n)
    .split('')
    .map(BigInt)
    .reduce((a, b) => a + b, 0n)
}

export function digitProduct(n: bigint): bigint {
  return String(n)
    .split('')
    .map(BigInt)
    .reduce((a, b) => a * b, 1n)
}

export function isPrime(n: bigint): boolean {
  if (n === 1n) return false
  for (let i = 2n; i * i <= n; i++) {
    if (n % i === 0n) return false
  }
  return true
}

// This is a copy of A000040, it's not imported directly to prevent circular dependency
// import { default as yieldPrime } from './oeis/A000040'
export function* yieldPrime(): Generator<bigint> {
  for (let n = 2n; /*∞*/; n++) {
    if (isPrime(n)) {
      yield n
    }
  }
}

export function primeFactorization(n: bigint, multiplicity = false): bigint[] {
  if (isPrime(n)) {
    return [n]
  }
  const result = []
  const primer = yieldPrime()
  for (;;) {
    const i = primer.next().value as bigint
    let appended = false
    while (n % i === 0n) {
      if (multiplicity || !appended) {
        result.push(i)
        appended = true
      }
      n /= i
    }
    if (n === 1n) {
      return result
    }
  }
}

export function gcd(a: bigint, b: bigint): bigint {
  while (b > 0n) {
    a %= b
    ;[a, b] = [b, a]
  }
  return a
}

export function eulerPhi(n: bigint): bigint {
  if (n < 2n) {
    return n
  }
  let result = n
  let temp = n
  for (let i = 2n; i * i <= temp; i++) {
    if (temp % i === 0n) {
      while (temp % i === 0n) {
        temp /= i
      }
      result -= result / i
    }
  }
  if (temp > 1n) {
    result -= result / temp
  }
  return result
}

export function isSquareFree(n: bigint): boolean {
  if (n <= 1n) return true
  const factors = primeFactorization(n, true)
  const unique = new Set(factors)
  return factors.length === unique.size
}

export function isPrimePower(n: bigint): boolean {
  if (n === 1n) return true
  const factors = primeFactorization(n)
  return factors.length === 1
}

export function sigma(n: bigint): bigint {
  if (n === 1n) return 1n
  let result = 1n
  let temp = n
  for (let i = 2n; i * i <= temp; i++) {
    if (temp % i === 0n) {
      let pSum = 1n
      let pTerm = 1n
      while (temp % i === 0n) {
        temp /= i
        pTerm *= i
        pSum += pTerm
      }
      result *= pSum
    }
  }
  if (temp > 1n) {
    result *= (temp + 1n)
  }
  return result
}

export function factorial(n: bigint): bigint {
  if (n === 0n) {
    return 1n
  }
  for (let i = n - 1n; i > 1n; i--) {
    n *= i
  }
  return n
}

export function decimalToBinaryDigits(n: bigint): string {
  const r = []
  while (n > 0n) {
    r.unshift(n % 2n)
    n >>= 1n
  }
  return r.join('')
}
