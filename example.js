#!/usr/bin/env node
const jisg = require('./dist/tsc/main.js')

for (const n of jisg.A000045()) {
    console.log(n)
}
