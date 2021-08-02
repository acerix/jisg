// a(n) = Sum_{k=0..n} p(k) where p(k) = number of partitions of k (A000041).
export default function* A000070(): Generator<bigint> {
  for (const n of [1n, 2n, 4n, 7n, 12n, 19n, 30n, 45n, 67n, 97n, 139n, 195n, 272n, 373n, 508n, 684n, 915n, 1212n, 1597n, 2087n, 2714n, 3506n, 4508n, 5763n, 7338n, 9296n, 11732n, 14742n, 18460n, 23025n, 28629n, 35471n, 43820n, 53963n, 66273n, 81156n, 99133n, 120770n, 146785n, 177970n, 215308n, 259891n, 313065n, 376326n, 451501n, ]) {
    yield n
  }
}
