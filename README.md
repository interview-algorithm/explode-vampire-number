# explode-vampire-number

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

Explode a [vampire number](https://en.wikipedia.org/wiki/Vampire_number).

# Usage

```js
var vampire = require('explode-vampire-number');

vampire.isVampirePair(204, 615);// true
vampire.parseVampireNumber(); // [204, 615],[246, 510]
vampire.isVampireNumber(125460);// true

```

# Author

 - <yanni4night@gmail.com>

[npm-url]: https://npmjs.org/package/explode-vampire-number
[downloads-image]: http://img.shields.io/npm/dm/explode-vampire-number.svg
[npm-image]: http://img.shields.io/npm/v/explode-vampire-number.svg
[travis-url]: https://travis-ci.org/yanni4night/explode-vampire-number
[travis-image]: http://img.shields.io/travis/yanni4night/explode-vampire-number.svg
[david-dm-url]:https://david-dm.org/yanni4night/explode-vampire-number
[david-dm-image]:https://david-dm.org/yanni4night/explode-vampire-number.svg
[david-dm-dev-url]:https://david-dm.org/yanni4night/explode-vampire-number#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/yanni4night/explode-vampire-number/dev-status.svg