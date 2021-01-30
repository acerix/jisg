# JavaScript Integer Sequence Generators

[![npm version](https://badge.fury.io/js/jisg.svg)](https://badge.fury.io/js/jisg)
[![npm](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/jisg)
[![Build Status](https://travis-ci.org/acerix/jisg.svg?branch=master)](https://travis-ci.org/acerix/jisg)

Implementations of select [OEIS](http://oeis.org/) integer sequences in JavaScript, portially inspired by [intseq](https://github.com/nicross/intseq).

## How to use

1. Install
   - `yarn add jisg`
1. Use
   - `import JISG from 'jisg'`
   - `for (const n in JISG.A000045) console.log(n)`

## Commands

- `yarn run check` : Checking the updates of all your dependencies
- `yarn run lint` : linting via ESLint
- `yarn run clean` : Clean the `./dist` folder
- `yarn run build`: Clean and build `src` to `dist`
- `yarn run test`: Run tests via `Jest`
- `yarn run test -- --coverage`: Generates test coverage report via `Jest`
- `yarn run example`: Run example to see if the transpiled code works or not.
- `yarn run prepare`: Clean, lint, test then build,
- `yarn run publish`: Interactive way to checking, clean, test, bumping version, tag commits, push repo and publish

## Badges

We currently have 3 badges here:

- Version: Generate your own at [https://badge.fury.io/](https://badge.fury.io/)
- Licence: Generate your own at [http://shields.io/](http://shields.io/)
- Building status: If you travis, open your project there, there should be badge at the top part, click it to get your own.

## About travis

Instead of running the default `test` command, we will run the `yarn run prepare` since it including all the phases for the final release.

And in the readme.md, we have a status icon which shows how to add that building status from Travis. Do remember to modify its URL after forking your repo.
