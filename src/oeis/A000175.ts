// Related to zeros of Bessel function.
export default function* A000175(): Generator<bigint> {
  for (const n of [
    1n,
    1n,
    2n,
    11n,
    38n,
    946n,
    4580n,
    202738n,
    3786092n,
    261868876n,
    1992367192n,
    2381255244240n,
    21411255538848n,
    2902625722978656n,
    451716954504285504n,
    319933105641374465472n,
    3761845343198709705600n,
  ]) {
    yield n
  }
}
