// Number of ways of writing n as a sum of 8 squares.
export default function* A000143(): Generator<bigint> {
  for (const n of [1n, 16n, 112n, 448n, 1136n, 2016n, 3136n, 5504n, 9328n, 12112n, 14112n, 21312n, 31808n, 35168n, 38528n, 56448n, 74864n, 78624n, 84784n, 109760n, 143136n, 154112n, 149184n, 194688n, 261184n, 252016n, 246176n, 327040n, 390784n, 390240n, 395136n, 476672n, 599152n, 596736n, 550368n, 693504n, 859952n, ]) {
    yield n
  }
}
