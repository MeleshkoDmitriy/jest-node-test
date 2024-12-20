const multiply = require('./multiply')
const assert = require("assert")

const arrOfObjects = [
  {val1: 4, val2: 7, result: 28},
  {val1: 10, val2: 2, result: 20},
  {val1: 6, val2: 9, result: 54},
  {val1: 3, val2: 0, result: 0},
  {val1: -5, val2: 3, result: -15},
  {val1: 1, val2: 1, result: 1},
  {val1: 8, val2: 2, result: 16},
]

describe('test multiply fn', () => {
  it('should be 5 * 3 = 15', () => {
    const result = multiply(5, 3)
    assert.strictEqual(result, 15)
  });
})

describe('test multiply fn with array of objects', () => {
  arrOfObjects.forEach(({val1, val2, result}) => {
    it(`should be ${val1} * ${val2} = ${result}`, () => {
      assert.strictEqual(multiply(val1, val2), result)
    })
  })
});