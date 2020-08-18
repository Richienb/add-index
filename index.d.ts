/**
Add an item to an array and get its index.
@param array The array to add to.
@param item The item to add.
@example
```
const addIndex = require("add-index");

const array = [1, 2, 3, 4, 5];

addIndex(array, 6);
//=> 5

console.log(array);
//=> [1, 2, 3, 4, 5, 6]
```
*/
declare function addIndex(array: any[], item: any): number

export = addIndex
