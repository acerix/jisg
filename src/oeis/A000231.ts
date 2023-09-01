// Number of inequivalent Boolean functions of n variables under action of complementing group.
export default function* A000231(): Generator<bigint> {
  for (const n of [
    2n,
    3n,
    7n,
    46n,
    4336n,
    134281216n,
    288230380379570176n,
    2658455991569831764110243006194384896n,
    452312848583266388373324160190187140390789016525312000869601987902398529536n
  ]) {
    yield n
  }
}
