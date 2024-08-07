# jisg

Implementations of select [OEIS](http://oeis.org/) integer sequences in JavaScript, portially inspired by [intseq](https://github.com/nicross/intseq).

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][build-image]][build-url]
[![Build Size][size-image]][size-url]
[![Code Coverage][coverage-image]][coverage-url]
[![Scrutinizer Code Quality][scrutinizer-image]][scrutinizer-url]
[![GPL 3.0][license-image]](LICENSE)

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
for (const i of A000045()) {
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

#### Demos on CodePen

[Fibonacci Sequence (A000045)](https://codepen.io/acerix/pen/MWmXbrO?editors=0010)

[Chart of A000045 with ECharts](https://codepen.io/acerix/pen/OJQQBGa?editors=0010)

[Pascal's Triangle (A007318)](https://codepen.io/acerix/pen/GRQoabJ?editors=0010)

### In Your Browser

[Try with RunKit](https://npm.runkit.com/jisg)

## Read the Docs

[Documentation](https://acerix.github.io/jisg/)

## CLI Commands

*   `yarn install`: Install dependencies
*   `yarn dev`: Run tests when source files are changed
*   `yarn lint --fix`: Lint with ESLint
*   `yarn test`: Run tests
*   `yarn doc`: Build documentation
*   `yarn build`: Production build
*   `yarn prepublish`: Prepare for publishing
*   `yarn publish`: Publish to npm

## Feedback

* Report bug and feature requests as [GitHub Issues](https://github.com/acerix/jisg/issues)

## Contributing

### Adding a Sequence Generator

1. [Fork](https://github.com/acerix/jisg/fork) and clone your repo locally.
1. Create the source file in "src/oeis/" using the OEIS number (eg. "A000001.ts") and add an entry in [index.ts](src/index.ts).
1. Implement the generator so that the test case passes (eg. `yarn test -t A000001`).  If the test takes longer than 10 seconds, optimize or remove integers from the end of the sample until it takes less than 10 seconds.
1. Check code style and test coverage with `yarn prepublish` and fix any issues.
1. Push to GitHub and submit a [pull request](https://github.com/acerix/jisg/compare).

## Sponsorship

* [Sponsor jisg](https://github.com/sponsors/acerix)

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
[license-image]: https://img.shields.io/npm/l/jisg.svg
