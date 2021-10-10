import axios from 'axios';

const products = axios.create({
  baseURL: 'http://localhost:3000/products',
});

const carts = axios.create({
  baseURL: 'http://localhost:3000/carts',
});

function fetchProductById(id) {
  return products.get(`/${id}`);
}

function fetchProductsByKeyword(keyword) {
  return products.get('/', {
    params: {
      name_like: keyword,
    },
  });
}

function createCartItem(cartItem) {
  return carts.post('/', cartItem);
}

function fetchCartItems() {
  return carts.get('/');
}

export {
  fetchProductById,
  fetchProductsByKeyword,
  createCartItem,
  fetchCartItems,
};
