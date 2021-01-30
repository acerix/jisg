import 'regenerator-runtime/runtime'
import JISG from '../src/'

function sliceGenerator(generator, start, end) {
  let i = 0, r = []
  while (i++<start) {
    generator.next()
  }
  while (i++<=end) {
    r.push(generator.next().value)
  }
  return r
}

describe('test beginning of sequences', () => {
  let jisg

  beforeEach(() => {
    jisg = new JISG()
  })

  afterEach(() => {
    jisg = undefined
  })

  test('A000004', () => {
    expect(sliceGenerator(jisg.A000004(), 0, 5)).toEqual([0, 0, 0, 0, 0])
  })

})
