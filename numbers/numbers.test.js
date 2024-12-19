let numbers;

beforeEach(() => {
  numbers = [1, 2, 3, 4, 5];
})

describe('numbers test', () => {
  it('should be 0', () => {
    numbers.unshift(0)
    
    expect(numbers).toHaveLength(6)
    expect(numbers[0]).toBe(0)
  })

  it('should be 6', () => {
    numbers.push(6)

    expect(numbers).toHaveLength(6)
    expect(numbers[5]).toBe(6)
    expect(numbers.includes(4)).toBeTruthy()
    expect(numbers[5]).not.toBeFalsy()
  })
})