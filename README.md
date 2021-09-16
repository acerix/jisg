# jisg - JavaScript Integer Sequence Generators

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][build-image]][build-url]
[![Build Size][size-image]][size-url]
[![Code Coverage][coverage-image]][coverage-url]
[![Scrutinizer Code Quality][scrutinizer-image]][scrutinizer-url]
[![Language Grade][lgtm-image]][lgtm-url]
[![GPL 3.0][license-image]](LICENSE)

Implementations of select [OEIS](http://oeis.org/) integer sequences in JavaScript, portially inspired by [intseq](https://github.com/nicross/intseq).

## Install

```bash
yarn add jisg
```

## Usage

### Build System

```typescript
import {A000045} from 'jisg'
const generator = A000045()
for (let i=0; i<43; i++) {
   console.log(generator.next().value)
}
```

### Node

```js
const {A000045} = require('jisg')
for (let i of A000045()) {
  console.log(i)
}
```

### Script Tags

```html
<script src="https://unpkg.com/jisg"></script>
<script>
const generator = jisg.A000045()
setInterval(
  function() => {
    document.write(
      generator.next().value,
      ', '
    )
  },
  666
)
</script>
```

[CodePen Demo](https://codepen.io/acerix/pen/MWmXbrO?editors=0010)

### In Your Browser

[Try with RunKit](https://npm.runkit.com/jisg)

## Read the Docs

[Documentation](https://acerix.github.io/jisg/)

## CLI Commands

*   `yarn install`: Install dependencies
*   `yarn dev`: Run tests when source files are changed
*   `yarn cli`: Start a command line interface
*   `yarn lint`: Lint with ESLint
*   `yarn test`: Run Jest and Enzyme tests
*   `yarn clean`: Delete previous build
*   `yarn docs`: Build documentation
*   `yarn build`: Production build
*   `yarn build-all`: Production build all the things
*   `yarn prepublish`: Prepare for publishing
*   `yarn publish`: Publish to npm

## Feedback

* Please report bug and feature requests as [GitHub Issues](https://github.com/acerix/jisg/issues)

## Contributing

### Adding a Sequence Generator

1. [Fork me](https://github.com/acerix/jisg/fork) and clone your repo locally.
1. Copy the beginning of the sequence from [The On-line Encyclopedia of Integer Sequences](https://oeis.org/) into a new entry in `OEIS_START_SAMPLES` in [main.test.ts](src/__tests__/main.test.ts).  Append an "n" to each integer to make them `BigInt`s (`/(\d+)/\1n/`).
1. Create the source file in [src/oeis/](src/oeis/) using the OEIS number (eg. "A000001.ts") and add an entry in [main.ts](src/main.ts).
1. Implement the generator so that the test case passes (eg. `yarn test -t A000001`).  If the test takes longer than 10 seconds, remove integers from the end of the sample until it takes less than 10 seconds.
1. Check code style and test coverage with `yarn prepublish` and fix any issues.
1. Push to GitHub and submit a [pull request](https://github.com/acerix/jisg/compare).
1. Wait. 🙂

[npm-image]: https://img.shields.io/npm/v/jisg.svg
[npm-url]: https://npmjs.org/package/jisg
[downloads-image]: https://img.shields.io/npm/dm/jisg.svg
[downloads-url]: https://npmjs.org/package/jisg
[build-image]: https://github.com/acerix/jisg/workflows/Test/badge.svg
[build-url]: https://github.com/acerix/jisg/actions?query=workflow%2ATest
[size-image]: https://badgen.net/bundlephobia/min/jisg
[size-url]: https://bundlephobia.com/result?p=jisg
[coverage-image]: https://scrutinizer-ci.com/g/acerix/jisg/badges/coverage.png?b=main
[coverage-url]: https://scrutinizer-ci.com/g/acerix/jisg/?branch=main
[scrutinizer-image]: https://scrutinizer-ci.com/g/acerix/jisg/badges/quality-score.png?b=main
[scrutinizer-url]: https://scrutinizer-ci.com/g/acerix/jisg/?branch=main
[lgtm-image]: https://img.shields.io/lgtm/alerts/g/acerix/jisg.svg
[lgtm-url]: https://lgtm.com/projects/g/acerix/jisg/
[license-image]: https://img.shields.io/npm/l/jisg.svg
