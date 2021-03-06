# explode-vampire-number

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

Explode a [vampire number](https://en.wikipedia.org/wiki/Vampire_number). See [here](http://interview-algorithm.github.io/explode-vampire-number/) for details.

# Usage

```js
var vampire = require('explode-vampire-number');

vampire.isVampirePair(204, 615);// true
vampire.explodeVampireNumber(125460); // [204, 615],[246, 510]
vampire.isVampireNumber(125460);// true

```

# Author

 - <yanni4night@gmail.com>

[npm-url]: https://npmjs.org/package/explode-vampire-number
[downloads-image]: http://img.shields.io/npm/dm/explode-vampire-number.svg
[npm-image]: http://img.shields.io/npm/v/explode-vampire-number.svg
[travis-url]: https://travis-ci.org/interview-algorithm/explode-vampire-number
[travis-image]: http://img.shields.io/travis/interview-algorithm/explode-vampire-number.svg
[david-dm-url]:https://david-dm.org/interview-algorithm/explode-vampire-number
[david-dm-image]:https://david-dm.org/interview-algorithm/explode-vampire-number.svg
[david-dm-dev-url]:https://david-dm.org/interview-algorithm/explode-vampire-number#type=dev
[david-dm-dev-image]:https://david-dm.org/interview-algorithm/explode-vampire-number/dev-status.svg
