import { polyAdd, polyMul } from '../src/polynomial'
import { decimalToBinaryDigits, combinations } from '../src/utils'
import A000001 from '../src/oeis/A000001'
import * as utils from '../src/utils'

jest.mock('../src/utils', () => {
  const actual = jest.requireActual('../src/utils')
  return {
    ...actual,
    isSquareFree: jest.fn((n) => actual.isSquareFree(n))
  }
})

describe('coverage', () => {
  it('polyAdd works', () => {
    expect(polyAdd([1n], [2n])).toEqual([3n])
    expect(polyAdd([1n], [2n, 3n])).toEqual([3n, 3n])
    expect(polyAdd([1n, 2n], [3n])).toEqual([4n, 2n])
  })

  it('polyMul works with limits and breaks', () => {
    // limit < a.length to hit outer break
    expect(polyMul([1n, 1n, 1n], [1n], 2)).toEqual([1n, 1n])
    
    // i + j >= len to hit inner break
    expect(polyMul([1n, 1n], [1n, 1n], 2)).toEqual([1n, 2n])

    // No limit
    expect(polyMul([1n, 1n], [1n, 1n])).toEqual([1n, 2n, 1n])
  })

  it('combinations works with r > n/2', () => {
    // 5 choose 3 == 5 choose 2 = 10
    expect(combinations(5n, 3n)).toBe(10n)
    // 5 choose 2
    expect(combinations(5n, 2n)).toBe(10n)
    // Edge cases
    expect(combinations(5n, 0n)).toBe(1n)
    expect(combinations(5n, 5n)).toBe(1n)
    expect(combinations(5n, 6n)).toBe(0n)
    expect(combinations(5n, -1n)).toBe(0n)
  })

  it('decimalToBinaryDigits works', () => {
    expect(decimalToBinaryDigits(0n)).toBe('')
    expect(decimalToBinaryDigits(1n)).toBe('1')
    expect(decimalToBinaryDigits(2n)).toBe('10')
    expect(decimalToBinaryDigits(5n)).toBe('101')
  })

  it('A000001 yields 0n for non-square-free not in exceptions', () => {
    const mockIsSquareFree = utils.isSquareFree as jest.Mock
    // n=1 is not in EXCEPTIONS.
    // Force isSquareFree(1) to be false to hit the else block
    mockIsSquareFree.mockReturnValueOnce(false)
    
    const gen = A000001()
    expect(gen.next().value).toBe(0n) // n=0 (handled by yield 0n before loop)
    expect(gen.next().value).toBe(0n) // n=1 (mocked to hit else)
  })
})
