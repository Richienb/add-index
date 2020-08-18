const test = require("ava")
const addIndex = require(".")

test("main", t => {
	const array = [1, 2, 3, 4, 5]

	t.is(addIndex(array, 6), 5)
	t.deepEqual(array, [1, 2, 3, 4, 5, 6])
})
