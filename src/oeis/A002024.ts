// n appears n times
export default function* A002024(): Generator<bigint> {  
  for (let n = 1n; /*∞*/; n++) {
    for (let x = 0; x < n; x++) {
      yield n
    }    
  }
}
