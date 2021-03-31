'use strict'

import generator from './src/oeis/A090822.js'

const COUNT = 2000

const sequence = generator()
const result = []

for (let i=0; i<COUNT; i++) {
    result.push(sequence.next().value)
}

console.log(result.join())
