#!/usr/bin/env ts-node
const jisg = require('./src/main.ts')
const oeis = process.argv.length > 2 ? process.argv[2] : 'A000045'
const limit = process.argv.length > 3 ? parseInt(process.argv[3], 10) : 32
const generator = jisg[oeis]()

// print the first n integers
if (limit) {
    for (let i=0; i<limit; i++) {
        const v = generator.next().value
        if (typeof v === 'undefined') break
        console.log(i, v)
    }
}

// forever print
else {
    let c = 0
    for (const n of generator) {
        console.log(c++, n)
    }
}
