const { default: axios } = require("axios");
require('dotenv').config();

const fetchProducts = async () => {

  try {
    const result = await axios.get(`${process.env.BASE_URL}/products`);

    return result.data;
  } catch (error) {
    console.error(error);
  }
};

module.exports = fetchProducts;
