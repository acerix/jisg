// Number of positive integers <= 2^n of form x^2 + 12 y^2.
export default function* A000021(): Generator<bigint> {
  for (const n of [1n, 1n, 2n, 2n, 6n, 9n, 17n, 30n, 54n, 98n, 183n, 341n, 645n, 1220n, 2327n, 4451n, 8555n, 16489n, 31859n, 61717n, 119779n, 232919n, 453584n, 884544n, 1727213n, 3376505n, 6607371n, 12942012n, 25371540n, 49777187n, 97731027n, 192010355n, 377475336n, 742512992n, 1461352025n, 2877572478n, 5668965407n, ]) {
    yield n
  }
}
