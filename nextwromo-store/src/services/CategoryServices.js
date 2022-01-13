import requests from './httpServices';

const CategoryServices = {
  getAllCategory() {
    return requests.get('/category');
  },
};

export default CategoryServices;
