// Number of ways of making change for n cents using coins of 1, 2, 5, and 10 cents
export default function* A000008(): Generator<bigint> {
  const f2: bigint[] = []
  const f3: bigint[] = []
  const f4: bigint[] = []

  for (let n = 0; ; n++) {
    const valF2 = 1n + (n >= 2 ? f2[n - 2] : 0n)
    f2.push(valF2)

    const valF3 = valF2 + (n >= 5 ? f3[n - 5] : 0n)
    f3.push(valF3)

    const valF4 = valF3 + (n >= 10 ? f4[n - 10] : 0n)
    f4.push(valF4)

    yield valF4
  }
}
