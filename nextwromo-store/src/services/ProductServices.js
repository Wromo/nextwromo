import requests from './httpServices';

const ProductServices = {
  getAllProducts() {
    return requests.get('/products');
  },
  getProductBySlug(slug) {
    return requests.get(`/products/${slug}`);
  },
};

export default ProductServices;
