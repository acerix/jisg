'use strict'

import jisg from './dist/jisg.js'

const generator = jisg.A000045()

for (let i=0; i<43; i++) {
    console.log(generator.next().value)
}

/*
for (const n of jisg.A000045()) {
    console.log(n)
}
*/
