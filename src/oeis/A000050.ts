// Number of positive integers <= 2^n of form x^2 + y^2.
export default function* A000050(): Generator<bigint> {
  for (const n of [1n, 2n, 3n, 5n, 9n, 16n, 29n, 54n, 97n, 180n, 337n, 633n, 1197n, 2280n, 4357n, 8363n, 16096n, 31064n, 60108n, 116555n, 226419n, 440616n, 858696n, 1675603n, 3273643n, 6402706n, 12534812n, 24561934n, 48168461n, 94534626n, 185661958n, 364869032n, 717484560n, 1411667114n, 2778945873n, 5473203125n, ]) {
    yield n
  }
}
