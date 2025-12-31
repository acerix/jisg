import { polySub, polyMul } from '../polynomial'

/**
 * Number of centered hydrocarbons with n atoms.
 * Also the number of rooted trees with n nodes and max degree 4, where the root is the unique center.
 * @see https://oeis.org/A000022
 */
export default function* A000022(): Generator<bigint> {
  const limit = 100
  const B: bigint[][] = [] // B[i] is poly for rooted trees height <= i, root degree <= 3
  const Q: bigint[][] = [] // Q[i] is poly for rooted trees height <= i, root degree <= 4
  const q2: bigint[][] = [] // q2[i] is poly for height i with exactly one branch of height i-1

  // B_{-1} = 0
  B[-1 as any] = new Array(limit).fill(0n)

  const polySubstitute = (p: bigint[], k: number): bigint[] => {
    const res = new Array(limit).fill(0n)
    for (let i = 0; i * k < limit && i < p.length; i++) {
      res[i * k] = p[i]
    }
    return res
  }

  const getZ_le3 = (A: bigint[]): bigint[] => {
    const A2 = polySubstitute(A, 2)
    const A3 = polySubstitute(A, 3)

    const AA = polyMul(A, A, limit)
    const AAA = polyMul(AA, A, limit)
    const AA2 = polyMul(A, A2, limit)

    // Z0 = 1
    // Z1 = A
    // Z2 = (A^2 + A(x^2))/2
    // Z3 = (A^3 + 3AA(x^2) + 2A(x^3))/6
    const res = new Array(limit).fill(0n)
    res[0] = 1n

    // Z1
    for (let i = 0; i < limit; i++) res[i] += A[i]

    // Z2
    for (let i = 0; i < limit; i++) {
      res[i] += (AA[i] + A2[i]) / 2n
    }

    // Z3
    for (let i = 0; i < limit; i++) {
      res[i] += (AAA[i] + 3n * AA2[i] + 2n * A3[i]) / 6n
    }

    return res
  }

  const getZ_le4 = (A: bigint[]): bigint[] => {
    const A2 = polySubstitute(A, 2)
    const A3 = polySubstitute(A, 3)
    const A4 = polySubstitute(A, 4)

    const AA = polyMul(A, A, limit)
    const AAA = polyMul(AA, A, limit)
    const AAAA = polyMul(AAA, A, limit)
    const AAA2 = polyMul(AA, A2, limit)
    const A2A2 = polyMul(A2, A2, limit)
    const AA3 = polyMul(A, A3, limit)

    // Z4 = (A^4 + 6A^2 A(x^2) + 3A(x^2)^2 + 8A A(x^3) + 6A(x^4))/24
    const Z4 = new Array(limit).fill(0n)
    for (let i = 0; i < limit; i++) {
      Z4[i] = (AAAA[i] + 6n * AAA2[i] + 3n * A2A2[i] + 8n * AA3[i] + 6n * A4[i]) / 24n
    }

    const res = getZ_le3(A)
    for (let i = 0; i < limit; i++) res[i] += Z4[i]
    return res
  }

  const totalC = new Array(limit).fill(0n)

  for (let i = 0; i < 50; i++) {
    const prevB = B[i - 1] || B[-1 as any]
    const prevPrevB = B[i - 2] || B[-1 as any]

    // B[i] = x * Z_le3(B[i-1])
    const Z3_prev = getZ_le3(prevB)
    B[i] = new Array(limit).fill(0n)
    for (let j = 0; j + 1 < limit; j++) B[i][j + 1] = Z3_prev[j]

    // Q[i] = x * Z_le4(B[i-1])
    const Z4_prev = getZ_le4(prevB)
    Q[i] = new Array(limit).fill(0n)
    for (let j = 0; j + 1 < limit; j++) Q[i][j + 1] = Z4_prev[j]

    // q2[i] = x * (B[i-1] - B[i-2]) * Z_le3(B[i-2])
    const H = polySub(prevB, prevPrevB)
    const Z3_prevPrev = getZ_le3(prevPrevB)
    const HZ3 = polyMul(H, Z3_prevPrev, limit)
    q2[i] = new Array(limit).fill(0n)
    for (let j = 0; j + 1 < limit; j++) q2[i][j + 1] = HZ3[j]

    // C[i] = Q[i] - Q[i-1] - q2[i]
    const prevQ = Q[i - 1] || B[-1 as any]
    const Ci = polySub(polySub(Q[i], prevQ), q2[i])

    for (let j = 0; j < limit; j++) totalC[j] += Ci[j]
  }

  for (let n = 0; n < limit; n++) {
    yield totalC[n]
  }
}