// Number of primitive polynomials of degree n over GF(2).
export default function* A000020(): Generator<bigint> {
  for (const n of [2n, 1n, 2n, 2n, 6n, 6n, 18n, 16n, 48n, 60n, 176n, 144n, 630n, 756n, 1800n, 2048n, 7710n, 7776n, 27594n, 24000n, 84672n, 120032n, 356960n, 276480n, 1296000n, 1719900n, 4202496n, 4741632n, 18407808n, 17820000n, 69273666n, 67108864n, 211016256n, 336849900n, 929275200n, 725594112n, 3697909056n, ]) {
    yield n
  }
}
