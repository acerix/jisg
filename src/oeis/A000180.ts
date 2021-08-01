// E.g.f. exp(-x)/(1-3x).
export default function* A000180(): Generator<number> {
  for (const n of [1, 2, 13, 116, 1393, 20894, 376093, 7897952, 189550849, 5117872922, 153536187661, 5066694192812, 182400990941233, 7113638646708086, 298772823161739613, 13444777042278282584, 645349298029357564033, 32912814199497235765682, ]) {
    yield n
  }
}
