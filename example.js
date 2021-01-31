'use strict'

const regeneratorRuntime = require('regenerator-runtime')
const JISG = require('./dist/index').default

const jisg = new JISG()

for (const n of jisg.A000040()) {
    console.log(n)
}