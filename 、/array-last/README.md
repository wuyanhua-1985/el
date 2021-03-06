# array-last [![NPM version](https://img.shields.io/npm/v/array-last.svg?style=flat)](https://www.npmjs.com/package/array-last) [![NPM monthly downloads](https://img.shields.io/npm/dm/array-last.svg?style=flat)](https://npmjs.org/package/array-last) [![NPM total downloads](https://img.shields.io/npm/dt/array-last.svg?style=flat)](https://npmjs.org/package/array-last) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/array-last.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/array-last)

> Get the last or last n elements in an array.

Please consider following this project's author, [Jon Schlinkert](https://github.com/jonschlinkert), and consider starring the project to show your :heart: and support.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save array-last
```

## Usage

```js
var last = require('array-last');

last(['a', 'b', 'c', 'd', 'e', 'f']);
//=> 'f'

last(['a', 'b', 'c', 'd', 'e', 'f'], 1);
//=> 'f'

last(['a', 'b', 'c', 'd', 'e', 'f'], 3);
//=> ['d', 'e', 'f']
```

## About

<details>
<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

</details>

<details>
<summary><strong>Running Tests</strong></summary>

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

</details>

<details>
<summary><strong>Building docs</strong></summary>

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

</details>

### Related projects

You might also be interested in these projects:

* [arr-union](https://www.npmjs.com/package/arr-union): Combines a list of arrays, returning a single array with unique values, using strict equality??? [more](https://github.com/jonschlinkert/arr-union) | [homepage](https://github.com/jonschlinkert/arr-union)
* [array-unique](https://www.npmjs.com/package/array-unique): Remove duplicate values from an array. Fastest ES5 implementation. | [homepage](https://github.com/jonschlinkert/array-unique)
* [array-xor](https://www.npmjs.com/package/array-xor): Returns the symmetric difference (exclusive-or) of an array of elements (elements that are present in??? [more](https://github.com/jonschlinkert/array-xor) | [homepage](https://github.com/jonschlinkert/array-xor)

### Contributors

| **Commits** | **Contributor** |  
| --- | --- |  
| 19 | [jonschlinkert](https://github.com/jonschlinkert) |  
| 3  | [SpyMaster356](https://github.com/SpyMaster356) |  
| 2  | [bendrucker](https://github.com/bendrucker) |  
| 2  | [phated](https://github.com/phated) |

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright ?? 2017, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on November 30, 2017._