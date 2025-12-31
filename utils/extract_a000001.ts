import fs from 'fs'
import A000001 from '../src/oeis/A000001'
import { primeFactorization } from '../src/utils'

function isSquareFree(n: bigint): boolean {
  if (n === 0n) return false // 0 is not square free in this context (or we handle it separately)
  if (n === 1n) return true
  const factors = primeFactorization(n, true)
  const unique = new Set(factors)
  return factors.length === unique.size
}

const g = A000001()
let n = 0n
const exceptions = []

for (const val of g) {
  if (!isSquareFree(n)) {
    // We only care about n >= 1, but A000001 usually starts at n=1.
    // The existing file starts at n=0 with value 0n, which is technically A000001(0)=0.
    // For n=0, isSquareFree is false, so it will be added.
    exceptions.push(`[${n}n, ${val}n]`)
  }
  n++
  if (n > 2048n) break 
}

console.log('const EXCEPTIONS = new Map<bigint, bigint>([
')
console.log(exceptions.join(',\n'))
console.log('])

'}