// Number of ways of writing n as a sum of 24 squares.
export default function* A000156(): Generator<number> {
  for (const n of [1, 48, 1104, 16192, 170064, 1362336, 8662720, 44981376, 195082320, 721175536, 2319457632, 6631997376, 17231109824, 41469483552, 93703589760, 200343312768, 407488018512, 793229226336, 1487286966928, 2697825744960, 4744779429216, ]) {
    yield n
  }
}
