# assert-npm-version
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

Assert that `npm` is at least a certain version.

## Installation
```bash
$ npm install assert-npm-version
```

## Usage
### cli
```sh
$ assert-npm-version 2.0.0
```

### package.json
```json
{
  "scripts": {
    "prepublish": "assert-npm-version 2.0.0"
  }
}
```

## Why?
When working with multiple people and / or node versions, it can quickly become
confusing what features `npm` has, or doesn't have. By asserting that `npm` is
at least a certain version, at least some `npm` related issues can be caught
early.

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/assert-npm-version.svg?style=flat-square
[npm-url]: https://npmjs.org/package/assert-npm-version
[travis-image]: https://img.shields.io/travis/yoshuawuyts/assert-npm-version/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/assert-npm-version
[downloads-image]: http://img.shields.io/npm/dm/assert-npm-version.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/assert-npm-version
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
