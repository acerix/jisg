// Number of partitions into non-integral powers.
export default function* A000158(): Generator<bigint> {
  for (const n of [1n, 2n, 8n, 19n, 41n, 78n, 134n, 218n, 339n, 506n, 730n, 1023n, 1397n, 1884n, 2477n, 3218n, 4118n, 5192n, 6486n, 8010n, 9795n, 11888n, 14302n, 17066n, 20256n, 23889n, 27999n, 32637n, 37863n, 43695n, 50218n, 57495n, 65545n, 74431n, 84257n, 95030n, 106840n, 119799n, 133941n, 149311n, 166071n, ]) {
    yield n
  }
}
