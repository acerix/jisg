// Number of inequivalent Boolean functions of n variables under action of complementing group.
export default function* A000231(): Generator<number> {
  for (const n of [3, 7, 46, 4336, 134281216, 288230380379570176, 2658455991569831764110243006194384896, 452312848583266388373324160190187140390789016525312000869601987902398529536, ]) {
    yield n
  }
}
