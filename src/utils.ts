import {default as yield_prime} from './oeis/A000040'

export function digit_sum(n: number): number {
  return String(n).split('').map(Number).reduce((a, b) => a + b, 0)
}

export function digit_product(n: number): number {
  return String(n).split('').map(Number).reduce((a, b) => a * b, 1)
}

export function is_prime(n: number): boolean {
  if (n === 1) return false
  for (let i = 2; i*i <= n; i++) {
    if (n%i === 0) return false
  }
  return true
}

export function prime_factorization(n: number, multiplicity=false): number[] {
  if (is_prime(n)) {
    return [n]
  }
  const result = []
  const primer = yield_prime()
  for (;;) {
    const i = primer.next().value as number
    let appended = false
    while (n % i === 0) {
      if (multiplicity || !appended) {
        result.push(i)
        appended = true
      }
      n /= i
    }
    if (n === 1) {
      return result
    }
  }
}

function is_coprime(a: number, b: number): boolean {
  const pfa = prime_factorization(a)
  const pfb = prime_factorization(b)
  for (const n of pfa) {
    if (pfb.indexOf(n) !== -1) {
      return false
    }
  }
  return true
}

export function euler_phi(n: number): number {
  if (n < 2) {
    return n
  }
  let x = 0
  for (let i=1; i<n; i++) {
    if (is_coprime(n, i)) {
      x++
    }
  }
  return x
}

export function factorial(n: number): number {
  if (n === 0) {
    return 1
  }
  for (let i=n-1; i>1; i--) {
    n *= i
  }
  return n
}

export function decimal_to_binary_digits(n: number): string {
  const r = []
  while (n > 0) {
    r.unshift(n % 2)
    n = Math.floor(n / 2)
  }
  return r.join('')
}
