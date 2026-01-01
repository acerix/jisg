import { factorial, gcd } from '../utils'

function* partitions(n: number, min: number = 1): Generator<number[]> {
  if (n === 0) {
    yield []
    return
  }
  for (let i = min; i <= n; i++) {
    for (const p of partitions(n - i, i)) {
      yield [i, ...p]
    }
  }
}

function permcount(v: number[], n: bigint): bigint {
  let m = 1n
  let k = 0n
  for (let i = 0; i < v.length; i++) {
    const t = BigInt(v[i])
    if (i > 0 && v[i] === v[i - 1]) {
      k += 1n
    } else {
      k = 1n
    }
    m *= t * k
  }
  return factorial(n) / m
}

function edges(v: number[]): bigint {
  let sum1 = 0n
  for (let i = 1; i < v.length; i++) {
    for (let j = 0; j < i; j++) {
      sum1 += gcd(BigInt(v[i]), BigInt(v[j]))
    }
  }
  
  let sum2 = 0n
  for (let i = 0; i < v.length; i++) {
    sum2 += BigInt(Math.floor(v[i] / 2) + 1)
  }
  
  return sum1 + sum2
}

export default function* A000666(): Generator<bigint> {
  for (let n = 0; ; n++) {
    const nBig = BigInt(n)
    let s = 0n
    for (const p of partitions(n)) {
      s += permcount(p, nBig) * (2n ** edges(p))
    }
    yield s / factorial(nBig)
  }
}