import A236454 from './A236454'
import A053669 from './A053669'

// Numbers n such that smallest number not dividing n^2 (A236454) is different from smallest prime not dividing n (A053669). 
export default function* A235921(): Generator<bigint> {
  const g = A236454()
  const h = A053669()
  for (let n = 0n; /*∞*/; n++) {
    if (g.next().value !== h.next().value) {
      yield n
    }
  }
}
