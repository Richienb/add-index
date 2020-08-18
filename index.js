"use strict"

module.exports = (array, item) => {
	if (!Array.isArray(array)) {
		throw new TypeError(`Expected an array, got ${typeof array}`)
	}

	return array.push(item) - 1
}
