import { default as yield_prime } from './oeis/A000040'

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

export function primeFactorization(n: bigint, multiplicity = false): bigint[] {
  if (isPrime(n)) {
    return [n]
  }
  const result = []
  const primer = yield_prime()
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

function isCoprime(a: bigint, b: bigint): boolean {
  const pfa = primeFactorization(a)
  const pfb = primeFactorization(b)
  for (const n of pfa) {
    if (pfb.indexOf(n) !== -1) {
      return false
    }
  }
  return true
}

export function eulerPhi(n: bigint): bigint {
  if (n < 2n) {
    return n
  }
  let x = 0n
  for (let i = 1n; i < n; i++) {
    if (isCoprime(n, i)) {
      x++
    }
  }
  return x
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
