// E.g.f. exp(-x^4/4)/(1-x).
export default function* A000138(): Generator<number> {
  for (const n of [1, 1, 2, 6, 18, 90, 540, 3780, 31500, 283500, 2835000, 31185000, 372972600, 4848643800, 67881013200, 1018215198000, 16294848570000, 277012425690000, 4986223662420000, 94738249585980000, 1894745192712372000, ]) {
    yield n
  }
}
