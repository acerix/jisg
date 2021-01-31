# JavaScript Integer Sequence Generators

[![npm version](https://badge.fury.io/js/jisg.svg)](https://badge.fury.io/js/jisg)
[![npm](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/jisg)
[![Build Status](https://travis-ci.org/acerix/jisg.svg?branch=master)](https://travis-ci.org/acerix/jisg)

Implementations of select [OEIS](http://oeis.org/) integer sequences in JavaScript, portially inspired by [intseq](https://github.com/nicross/intseq).

## How to use

1. Install
   - `yarn add jisg`
1. Use
```js
import JISG from 'jisg'
const jisg = new JISG()
for (const n of jisg.A000045()) {
   console.log(n)
}
```

## Commands

- `yarn run check` : Checking the updates of all your dependencies
- `yarn run lint` : Linting via ESLint
- `yarn run clean` : Clean the `./dist` folder
- `yarn run build`: Clean and build `src` to `dist`
- `yarn run test`: Run tests via `Jest`
- `yarn run test -- --coverage`: Generates test coverage report via `Jest`
- `yarn run example`: Run example to test transpiled code
- `yarn run prepare`: Clean, lint, test then build
- `yarn run publish`: Interactive check, clean, test, bumping version, tag commits, push repo and publish
