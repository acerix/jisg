// Number of partitions of n if there are two kinds of 1's and two kinds of 2's.
export default function* A000097(): Generator<bigint> {
  for (const n of [1n, 2n, 5n, 9n, 17n, 28n, 47n, 73n, 114n, 170n, 253n, 365n, 525n, 738n, 1033n, 1422n, 1948n, 2634n, 3545n, 4721n, 6259n, 8227n, 10767n, 13990n, 18105n, 23286n, 29837n, 38028n, 48297n, 61053n, 76926n, 96524n, 120746n, 150487n, 187019n, 231643n, 286152n, 352413n, 432937n, 530383n, 648245n, ]) {
    yield n
  }
}
