import 'regenerator-runtime/runtime'
import JISG from '../src/'

function sliceGenerator(generator, start, end) {
  let i = 0
  const r = []
  while (i++<start) {
    generator.next()
  }
  while (i++<=end) {
    r.push(generator.next().value)
  }
  return r
}

describe('test beginning of sequences', () => {
  const jisg = new JISG()

  test('A000004', () => {
    expect(sliceGenerator(jisg.A000004(), 0, 5)).toEqual([0, 0, 0, 0, 0])
  })

  test('A000012', () => {
    expect(sliceGenerator(jisg.A000012(), 0, 5)).toEqual([1, 1, 1, 1, 1])
  })

  test('A000027', () => {
    expect(sliceGenerator(jisg.A000027(), 0, 5)).toEqual([1, 2, 3, 4, 5])
  })

  test('A000035', () => {
    expect(sliceGenerator(jisg.A000035(), 0, 5)).toEqual([0, 1, 0, 1, 0])
  })

  test('A000040', () => {
    expect(sliceGenerator(jisg.A000040(), 0, 5)).toEqual([2, 3, 5, 7, 11])
  })

  test('A000043', () => {
    expect(sliceGenerator(jisg.A000043(), 0, 5)).toEqual([2, 3, 5, 7, 13])
  })

  test('A000045', () => {
    expect(sliceGenerator(jisg.A000045(), 0, 5)).toEqual([0, 1, 1, 2, 3])
  })

  test('A000079', () => {
    expect(sliceGenerator(jisg.A000079(), 0, 5)).toEqual([1, 2, 4, 8, 16])
  })

  test('A000217', () => {
    expect(sliceGenerator(jisg.A000217(), 0, 5)).toEqual([0, 1, 3, 6, 10])
  })

  test('A000290', () => {
    expect(sliceGenerator(jisg.A000290(), 0, 5)).toEqual([0, 1, 4, 9, 16])
  })

})
