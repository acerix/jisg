// Superfactorials: product of first n factorials.
export default function* A000178(): Generator<bigint> {
  for (const n of [
    1n,
    1n,
    2n,
    12n,
    288n,
    34560n,
    24883200n,
    125411328000n,
    5056584744960000n,
    1834933472251084800000n,
    6658606584104736522240000000n,
    265790267296391946810949632000000000n,
    127313963299399416749559771247411200000000000n,
  ]) {
    yield n
  }
}
