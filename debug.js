'use strict'

import generator from './src/oeis/A090822.js'

// limited run
/*
const COUNT = 1771
const sequence = generator()
const result = []
for (let i=0; i<COUNT; i++) {
    result.push(sequence.next().value)
}
console.log(result.join())
*/

// run forever
let c = 0
for (const n of generator()) {
    console.log(c++, n)
}

