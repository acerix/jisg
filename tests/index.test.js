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

  test('A000330', () => {
    expect(sliceGenerator(jisg.A000330(), 0, 5)).toEqual([0, 1, 5, 14, 30])
  })

  test('A000668', () => {
    expect(sliceGenerator(jisg.A000668(), 0, 5)).toEqual([3, 7, 31, 127, 8191])
  })

  test('A001223', () => {
    expect(sliceGenerator(jisg.A001223(), 0, 5)).toEqual([1, 2, 2, 4, 2])
  })

  test('A001462', () => {
    expect(sliceGenerator(jisg.A001462(), 0, 5)).toEqual([1, 2, 2, 3, 3])
  })

  /*
    test('A002024', () => {
      expect(sliceGenerator(jisg.A002024(), 0, 5)).toEqual([1, 2, 2, 3, 3])
    })

    test('A005408', () => {
      expect(sliceGenerator(jisg.A005408(), 0, 5)).toEqual([1, 3, 5, 7, 9])
    })

    test('A005843', () => {
      expect(sliceGenerator(jisg.A005843(), 0, 5)).toEqual([0, 2, 4, 6, 8])
    })

    test('A006530', () => {
      expect(sliceGenerator(jisg.A006530(), 0, 5)).toEqual([1, 2, 3, 2, 5])
    })

    test('A006753', () => {
      expect(sliceGenerator(jisg.A006753(), 0, 5)).toEqual([4, 22, 27, 58, 85])
    })

    test('A007953', () => {
      expect(sliceGenerator(jisg.A007953(), 0, 5)).toEqual([0, 1, 2, 3, 4])
    })

    test('A007954', () => {
      expect(sliceGenerator(jisg.A007954(), 0, 5)).toEqual([0, 1, 2, 3, 4])
    })

    test('A010051', () => {
      expect(sliceGenerator(jisg.A010051(), 0, 5)).toEqual([0, 1, 1, 0, 1])
    })

    test('A010054', () => {
      expect(sliceGenerator(jisg.A010054(), 0, 5)).toEqual([1, 1, 0, 1, 0])
    })

    test('A019506', () => {
      expect(sliceGenerator(jisg.A019506(), 0, 5)).toEqual([22, 58, 84, 85, 94])
    })

    test('A063737', () => {
      expect(sliceGenerator(jisg.A063737(), 0, 5)).toEqual([2, 3, 4, 5, 7])
    })
  */
})