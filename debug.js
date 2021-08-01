#!/usr/bin/env node
'use strict'

import generator from './src/oeis/A059252.js'

// limited run
const COUNT = 64
const sequence = generator()
const result = []
for (let i=0; i<COUNT; i++) {
    result.push(sequence.next().value)
}
console.log(result.join())

// run forever
// let c = 0
// for (const n of generator()) {
//     console.log(c++, n)
// }

