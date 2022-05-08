// Number of ways of writing n as a sum of 10 squares.
export default function* A000144(): Generator<bigint> {
  for (const n of [
    1n,
    20n,
    180n,
    960n,
    3380n,
    8424n,
    16320n,
    28800n,
    52020n,
    88660n,
    129064n,
    175680n,
    262080n,
    386920n,
    489600n,
    600960n,
    840500n,
    1137960n,
    1330420n,
    1563840n,
    2050344n,
    2611200n,
    2986560n,
    3358080n,
    4194240n,
    5318268n,
    5878440n,
    6299520n,
    7862400n,
    9619560n,
  ]) {
    yield n
  }
}
