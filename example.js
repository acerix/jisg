'use strict'

const regeneratorRuntime = require('regenerator-runtime')
const JISG = require('./dist/index').default
const jisg = new JISG()

/*
for (const n of jisg.A000045()) {
    console.log(n)
}
*/

/*
const generator = jisg.A000005()
for (let i=0; i<70; i++) {
    console.log('\nn =', i)
    console.log('v =', generator.next().value)
}
*/

const generator = jisg.randint()
for (let i=0; i<70; i++) {
    console.log(generator.next().value)
}

console.log('')
