// Number of ways of writing n as a sum of 24 squares.
export default function* A000156(): Generator<bigint> {
  for (const n of [
    1n,
    48n,
    1104n,
    16192n,
    170064n,
    1362336n,
    8662720n,
    44981376n,
    195082320n,
    721175536n,
    2319457632n,
    6631997376n,
    17231109824n,
    41469483552n,
    93703589760n,
    200343312768n,
    407488018512n,
    793229226336n,
    1487286966928n,
    2697825744960n,
    4744779429216n,
  ]) {
    yield n
  }
}
