# jisg - JavaScript Integer Sequence Generators

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][build-image]][build-url]
[![Code Coverage][coverage-image]][coverage-url]
[![Scrutinizer Code Quality][scrutinizer-image]][scrutinizer-url]
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
  () => {
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

[npm-image]: https://img.shields.io/npm/v/jisg.svg
[npm-url]: https://npmjs.org/package/jisg
[downloads-image]: https://img.shields.io/npm/dm/jisg.svg
[downloads-url]: https://npmjs.org/package/jisg
[build-image]: https://github.com/acerix/jisg/workflows/Test/badge.svg
[build-url]: https://github.com/acerix/jisg/actions?query=workflow%2ATest
[coverage-image]: https://scrutinizer-ci.com/g/acerix/jisg/badges/coverage.png?b=main
[coverage-url]: https://scrutinizer-ci.com/g/acerix/jisg/?branch=main
[scrutinizer-image]: https://scrutinizer-ci.com/g/acerix/jisg/badges/quality-score.png?b=main
[scrutinizer-url]: https://scrutinizer-ci.com/g/acerix/jisg/?branch=main
[license-image]: https://img.shields.io/npm/l/jisg.svg

