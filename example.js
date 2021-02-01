'use strict'

const regeneratorRuntime = require('regenerator-runtime')
const JISG = require('./dist/index').default
const jisg = new JISG()

/*
for (const n of jisg.A000045()) {
    console.log(n)
}
*/

const generator = jisg.A000142()
//const generator = jisg.randint()

for (let i=0; i<43; i++) {
    console.log(generator.next().value)
}
