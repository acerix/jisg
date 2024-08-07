// One-half the number of permutations of length n with exactly 1 rising or falling successions.
export default function* A000130(): Generator<bigint> {
  for (const n of [
    0n,
    0n,
    1n,
    2n,
    5n,
    20n,
    115n,
    790n,
    6217n,
    55160n,
    545135n,
    5938490n,
    70686805n,
    912660508n,
    12702694075n,
    189579135710n,
    3019908731105n,
    51139445487680n,
    917345570926087n,
    17376071107513090n,
    346563420097249645n,
    7259714390232227300n,
    159352909727731210835n,
    3657569576966074846118n,
  ]) {
    yield n
  }
}
