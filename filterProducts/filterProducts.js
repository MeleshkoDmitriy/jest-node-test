

const filterProducts = (products, from, to) => {
  return products.filter((item) => item.price >= from && item.price <= to)
}

module.exports = filterProducts;