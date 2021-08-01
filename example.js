'use strict'

import jisg from './dist/tsc/main.js'

const generator = jisg.A000045()

for (let i=0; i<43; i++) {
    document.write(generator.next().value + ' ')
}
