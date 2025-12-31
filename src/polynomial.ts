
export function polyAdd(a: bigint[], b: bigint[]): bigint[] {
  const len = Math.max(a.length, b.length)
  const res = new Array(len).fill(0n)
  for (let i = 0; i < len; i++) {
    if (i < a.length) res[i] += a[i]
    if (i < b.length) res[i] += b[i]
  }
  return res
}

export function polySub(a: bigint[], b: bigint[]): bigint[] {
  const len = Math.max(a.length, b.length)
  const res = new Array(len).fill(0n)
  for (let i = 0; i < len; i++) {
    if (i < a.length) res[i] += a[i]
    if (i < b.length) res[i] -= b[i]
  }
  return res
}

export function polyMul(a: bigint[], b: bigint[], limit?: number): bigint[] {
  const len = limit ? limit : a.length + b.length - 1
  const res = new Array(len).fill(0n)
  for (let i = 0; i < a.length; i++) {
    if (limit && i >= limit) break
    for (let j = 0; j < b.length; j++) {
      if (i + j >= len) break
      res[i + j] += a[i] * b[j]
    }
  }
  return res
}

// Computes exp(S) where S is the log derivative numerator sequence?
// No, specialized for A001678.
