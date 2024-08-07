// Number of Boolean functions of n variables.
export default function* A000157(): Generator<bigint> {
  for (const n of [
    1n,
    2n,
    7n,
    111n,
    308063n,
    100126976263592n,
    131867858014413288241233435594064n,
    2804519150441879896741320496043335469582478995067528608051651559815168n,
  ]) {
    yield n
  }
}
