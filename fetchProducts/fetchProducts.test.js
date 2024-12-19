const fetchProducts = require('../fetchProducts/fetchProducts');

describe('fetchProducts test', () => {
  it('should return 10 products', async() => {
    const result = await fetchProducts();

    expect(result).toHaveLength(10);
    expect(result).toContainEqual({ name: 'Джинсы Slim Fit', price: 49.99, isSale: true });
  })


  it('should return 10 products', () => {
    fetchProducts().then((result) => {
      expect(result).toHaveLength(10);
    });
  })
})