// a(n) = number of distinct (infinite) output sequences from binary n-stage shift register which feeds back the complement of the last stage. E.g., for n=6 there are 6 such sequences.
export default function* A000016(): Generator<bigint> {
  for (const n of [1n, 1n, 1n, 2n, 2n, 4n, 6n, 10n, 16n, 30n, 52n, 94n, 172n, 316n, 586n, 1096n, 2048n, 3856n, 7286n, 13798n, 26216n, 49940n, 95326n, 182362n, 349536n, 671092n, 1290556n, 2485534n, 4793492n, 9256396n, 17895736n, 34636834n, 67108864n, 130150588n, 252645136n, 490853416n, ]) {
    yield n
  }
}
