// a(n) = number of distinct (infinite) output sequences from binary n-stage shift register which feeds back the complement of the last stage. E.g., for n=6 there are 6 such sequences.
export default function* A000016() {
    for (const n of [1, 1, 1, 2, 2, 4, 6, 10, 16, 30, 52, 94, 172, 316, 586, 1096, 2048, 3856, 7286, 13798, 26216, 49940, 95326, 182362, 349536, 671092, 1290556, 2485534, 4793492, 9256396, 17895736, 34636834, 67108864, 130150588, 252645136, 490853416, ]) {
        yield n
    }
}
