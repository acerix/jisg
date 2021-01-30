'use strict'

const regeneratorRuntime = require('regenerator-runtime')
const JISG = require('./dist/index').default

for (let n of new JISG().A000004()) {
    console.log(n)
}
