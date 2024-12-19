const filterProducts = require("./filterProducts");
const products = require("../data/products");

describe("filterProducts fn test", () => {
  it("should be price range from = 50, to = 150", () => {
    const from = 50;
    const to = 150;
    const result = filterProducts(products, from, to);

    expect(result).toHaveLength(4);
    expect(result).toContainEqual({
      name: "Куртка зимняя",
      price: 129.99,
      isSale: true,
    });
    expect(result).toEqual([
      { name: "Кроссовки Air Max", price: 89.99, isSale: true },
      { name: "Платье летнее", price: 59.99, isSale: false },
      { name: "Куртка зимняя", price: 129.99, isSale: true },
      { name: "Теплый свитер", price: 79.99, isSale: false },
    ]);
    expect(result[1].isSale).toBeFalsy();
  });
});

describe('Sales test', () => {
  it("should be only isSale = true", () => {
    const result = products.filter((item) => item.isSale);
    console.log(result);

    expect(result).toHaveLength(5);
    expect(result).toContainEqual({
      name: "Кроссовки Air Max",
      price: 89.99,
      isSale: true,
    });
    expect(result).not.toContainEqual({
      name: "Теплый свитер",
      price: 79.99,
      isSale: false,
    });
  });
})

module.exports = filterProducts;
