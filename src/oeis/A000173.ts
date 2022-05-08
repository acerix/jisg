// Unitary-sociable numbers (smallest member of each cycle).
export default function* A000173(): Generator<bigint> {
  for (const n of [
    30n,
    1482n,
    2418n,
    24180n,
    35238n,
    263820n,
    395730n,
    473298n,
    698130n,
    763620n,
    2212026n,
    2233554n,
    172459210n,
    209524210n,
    341354790n,
    384121920n,
    525150234n,
    530946330n,
    582129630n,
    1799281330n,
    2069510520n,
    2514290520n,
    3344596854n,
    5251502340n,
  ]) {
    yield n
  }
}
