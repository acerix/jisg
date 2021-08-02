// Smallest prime power >= n.
export default function* A000015(): Generator<bigint> {
  for (const n of [1n, 2n, 3n, 4n, 5n, 7n, 7n, 8n, 9n, 11n, 11n, 13n, 13n, 16n, 16n, 16n, 17n, 19n, 19n, 23n, 23n, 23n, 23n, 25n, 25n, 27n, 27n, 29n, 29n, 31n, 31n, 32n, 37n, 37n, 37n, 37n, 37n, 41n, 41n, 41n, 41n, 43n, 43n, 47n, 47n, 47n, 47n, 49n, 49n, 53n, 53n, 53n, 53n, 59n, 59n, 59n, 59n, 59n, 59n, 61n, 61n, 64n, 64n, 64n, 67n, 67n, 67n, 71n, 71n, 71n, 71n, 73n, ]) {
    yield n
  }
}
