// Busy Beaver problem: a(n) = maximal number of steps that an n-state Turing machine can make on an initially blank tape before eventually halting.
export default function* A123456(): Generator<bigint> {
  for (const n of [1n, 6n, 21n, 107n]) {
    yield n
  }
}
