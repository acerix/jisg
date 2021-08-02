// Number of ways of writing n as a sum of 12 squares.
export default function* A000145(): Generator<bigint> {
  for (const n of [1n, 24n, 264n, 1760n, 7944n, 25872n, 64416n, 133056n, 253704n, 472760n, 825264n, 1297056n, 1938336n, 2963664n, 4437312n, 6091584n, 8118024n, 11368368n, 15653352n, 19822176n, 24832944n, 32826112n, 42517728n, 51425088n, 61903776n, 78146664n, 98021616n, ]) {
    yield n
  }
}
