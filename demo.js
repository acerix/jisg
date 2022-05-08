#!/usr/bin/env node
const jisg = require('./dist/index.js')

for (const n of jisg.A000045()) {
    console.log(n)
}
