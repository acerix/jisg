// Number of oriented trees with n nodes.
export default function* A000238(): Generator<bigint> {
  for (const n of [
    1n,
    1n,
    3n,
    8n,
    27n,
    91n,
    350n,
    1376n,
    5743n,
    24635n,
    108968n,
    492180n,
    2266502n,
    10598452n,
    50235931n,
    240872654n,
    1166732814n,
    5702001435n,
    28088787314n,
    139354922608n,
    695808554300n,
    3494390057212n,
    17641695461662n,
    89495023510876n,
    456009893224285n,
    2332997330210440n,
  ]) {
    yield n
  }
}
