import * as fs from 'fs'
import { jisg } from '../src/'
import * as oies from '../src/index'

describe('version number', () => {
  it('matches semver format', () => {
    // regex from https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
    const serverRegex =
      /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/
    expect(jisg.version).toEqual(expect.stringMatching(serverRegex))
  })
})

function sliceGenerator(
  generator: Generator<bigint>,
  start: bigint,
  end: bigint
): bigint[] {
  let i = 0
  const r: bigint[] = []
  while (i++ < start) {
    generator.next()
  }
  while (i++ <= end) {
    r.push(generator.next().value as bigint)
  }
  return r
}

describe('beginning of OEIS sequence', () => {
  for (const oies_id in oies) if (oies_id[0] === 'A') {
    test(`${oies_id} is as expected`, () => {
      fs.readFile(`tests/samples/${oies_id}.csv`, 'utf8', (read_error, data) => {
        if (read_error) console.error(read_error)
        else {
          const samples = data.split(',').map(n => BigInt(n))
          //const generator = oies[oies_id]()
          const generator = eval(`oies['${oies_id}']()`) as Generator<bigint>
          expect(
            sliceGenerator(
              generator,
              0n,
              BigInt(samples.length)
            )
          ).toEqual(
            samples
          )
        }
      })
    })
  }
})

describe('randint', () => {
  test('should not be deterministic', () => {
    expect(oies.randint().next().value === oies.randint().next().value).toEqual(
      false
    )
  })
})
