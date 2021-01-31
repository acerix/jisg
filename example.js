'use strict'

const regeneratorRuntime = require('regenerator-runtime')
const JISG = require('./dist/index').default

const jisg = new JISG()

for (let n of jisg.A000045()) {
    console.log(n)
}
