const sum = require('./sum');

describe('sum function', () => {
  it('should 2 + 5 = 7', () => {
    expect(sum(2, 5)).toBe(7);
  })
  it('should not 3 + 9 = 13', () => {
    expect(sum(3, 9)).not.toBe(13);
  })

  it('should 3 + 3 >= 6', () => {
    expect(sum(3, 3)).toBeGreaterThanOrEqual(6)
  })

  it('should be close to 0.3 but not equal', () => {
    expect(sum(0.1, 0.2)).not.toBe(0.3)
    expect(sum(0.1, 0.2)).not.toEqual(0.3)
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3, 1)
  })
})
