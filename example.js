'use strict'

const regeneratorRuntime = require('regenerator-runtime')
const JISG = require('./dist/index').default

const jisg = new JISG()

/*
for (const n of jisg.A000045()) {
    console.log(n)
}
*/

function slice_generator(generator, start, end) {
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

for (const n of slice_generator(jisg.A000002(),0,20)) {
    console.log(n)
}