# add-index [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/add-index/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/add-index)

Add an item to an array and get its index.

[![NPM Badge](https://nodei.co/npm/add-index.png)](https://npmjs.com/package/add-index)

## Install

```sh
npm install add-index
```

## Usage

```js
const addIndex = require("add-index");

const array = [1, 2, 3, 4, 5];

addIndex(array, 6);
//=> 5

console.log(array);
//=> [1, 2, 3, 4, 5, 6]
```

## API

### addIndex(array, item)

#### array

Type: `array`

The array to add to.

#### item

Type: `any`

The item to add.
