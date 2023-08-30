import A000108 from './A000108'

// a(n) = (n+2)*Catalan(n) - 1
export default function* A000777(): Generator<bigint> {
  let c = 0n
  for (const n of A000108()) {
    yield ((c + 2n) * n) - 1n
    c++
  }
}
