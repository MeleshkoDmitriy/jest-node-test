const axios = require('axios');
const productsData = require('../data/products')

jest.mock('axios')
describe("mock test", () => {
  let response;
  let products;

  beforeEach(() => {
    products = [...productsData];

    response = {
      data: {
        products,
      }
    }
  });

  it('should return products from backend', async () => {
    const mockedGet = axios.get.mockResolvedValue(response);

    const data = await axios.get('/some/api/endpoint');  

    expect(data.data.products).toEqual(products); 
    expect(mockedGet).toHaveBeenCalledWith('/some/api/endpoint');
  });
});
