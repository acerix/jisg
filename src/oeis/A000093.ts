// a(n) = floor(n^(3/2)).
export default function* A000093(): Generator<bigint> {
  for (const n of [0n, 1n, 2n, 5n, 8n, 11n, 14n, 18n, 22n, 27n, 31n, 36n, 41n, 46n, 52n, 58n, 64n, 70n, 76n, 82n, 89n, 96n, 103n, 110n, 117n, 125n, 132n, 140n, 148n, 156n, 164n, 172n, 181n, 189n, 198n, 207n, 216n, 225n, 234n, 243n, 252n, 262n, 272n, 281n, 291n, 301n, 311n, 322n, 332n, 343n, 353n, 364n, 374n, 385n, 396n, 407n, 419n, 430n, ]) {
    yield n
  }
}
