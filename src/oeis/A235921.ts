// Numbers n such that smallest number not dividing n^2 (A236454) is different from smallest prime not dividing n (A053669). 
const f = 210n
export default function* A236432(): Generator<bigint> {
  for (let n = f; /*∞*/; n += 2n*f) {
    yield n
  }
}
