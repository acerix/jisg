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
import jisg from 'jisg'
const generator = jisg.A000045()
for (let i=0; i<43; i++) {
   console.log(generator.next().value)
}
```

## Commands

- `yarn check` : Checking the updates of all your dependencies
- `yarn lint` : Linting via ESLint
- `yarn clean` : Clean the `./dist` folder
- `yarn build`: Clean and build `src` to `dist`
- `yarn test`: Run tests via `Jest`
- `yarn test --coverage`: Generates test coverage report via `Jest`
- `yarn example`: Run example to test transpiled code
- `yarn prepare`: Clean, lint, test then build
- `yarn publish`: Interactive check, clean, test, bumping version, tag commits, push repo and publish
