// Number of positive integers <= 2^n of form x^2 + 16y^2.
export default function* A000018(): Generator<bigint> {
  for (const n of [1n, 1n, 2n, 2n, 4n, 8n, 13n, 25n, 44n, 83n, 152n, 286n, 538n, 1020n, 1942n, 3725n, 7145n, 13781n, 26627n, 51572n, 100099n, 194633n, 379037n, 739250n, 1443573n, 2822186n, 5522889n, 10818417n, 21209278n, 41613288n, 81705516n, 160532194n, 315604479n, 620834222n, 1221918604n, 2406183020n, 4740461247n, ]) {
    yield n
  }
}
