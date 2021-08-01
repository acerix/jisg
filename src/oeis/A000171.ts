// Number of self-complementary graphs with n nodes.
export default function* A000171(): Generator<number> {
  for (const n of [1, 0, 0, 1, 2, 0, 0, 10, 36, 0, 0, 720, 5600, 0, 0, 703760, 11220000, 0, 0, 9168331776, 293293716992, 0, 0, 1601371799340544, 102484848265030656, 0, 0, 3837878966366932639744, 491247277315343649710080, 0, 0, ]) {
    yield n
  }
}
