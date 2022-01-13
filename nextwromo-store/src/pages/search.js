import React, { useState } from 'react';
import Image from 'next/image';

//internal import
import Layout from '@layout/Layout';
import useFilter from '@hooks/useFilter';
import Category from '@component/category/Category';
import ProductServices from '@services/ProductServices';
import ProductCard from '@component/product/ProductCard';

const Search = ({ products }) => {
  const [visibleProduct, setVisibleProduct] = useState(15);
  const { productData, setSortedField } = useFilter(products);

  return (
    <Layout title="Search" description="This is search page">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
        <div className="flex py-10 lg:py-12">
          <div className="flex w-full">
            <div className="flex-shrink-0  pr-4 xl:pr-6 hidden lg:block w-3/12">
              <div className="sticky top-32">
                <h2 className="font-serif text-lg pb-2 font-medium">
                  Categories
                </h2>
                <Category />
              </div>
            </div>
            <div className="w-full">
              {productData.length === 0 ? (
                <div className="text-center align-middle mx-auto p-5 my-5">
                  <Image
                    className="my-4"
                    src="/no-result.svg"
                    alt="no-result"
                    width={400}
                    height={380}
                  />
                  <h2 className="text-lg md:text-xl lg:text-2xl xl:text-2xl text-center mt-2 font-medium font-serif text-gray-600">
                    Sorry, we can not find this product 😞
                  </h2>
                </div>
              ) : (
                <div className="flex justify-between pb-3">
                  <h6 className="text-sm font-serif">
                    Total{' '}
                    <span className="font-bold">{productData.length}</span>{' '}
                    items Found
                  </h6>
                  <span className="text-sm font-serif">
                    <select
                      onChange={(e) => setSortedField(e.target.value)}
                      className="py-0 text-sm font-serif font-medium block w-full rounded border-0 bg-white pr-10 cursor-pointer focus:ring-0"
                    >
                      <option className="px-3" value="All" defaultValue hidden>
                        Sort By Price
                      </option>
                      <option className="px-3" value="Low">
                        Low to High
                      </option>
                      <option className="px-3" value="High">
                        High to Low
                      </option>
                    </select>
                  </span>
                </div>
              )}

              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-2 md:gap-3 lg:gap-3">
                {productData?.slice(0, visibleProduct).map((product, i) => (
                  <ProductCard key={i + 1} product={product} />
                ))}
              </div>
              {productData.length > visibleProduct && (
                <button
                  onClick={() => setVisibleProduct((pre) => pre + 10)}
                  className="w-auto mx-auto md:text-sm leading-5 flex items-center transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md focus-visible:outline-none focus:outline-none bg-indigo-100 text-gray-700 px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white hover:bg-green-600 h-12 mt-6 text-sm lg:text-sm"
                >
                  Load More
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;

export const getServerSideProps = async (context) => {
  const { query } = context.query;
  const { Category } = context.query;
  const { category } = context.query;
  const data = await ProductServices.getAllProducts();

  let products = [];
  //service filter with parent category
  if (Category) {
    products = data.filter(
      (product) =>
        product.parent.toLowerCase().replace('&', '').split(' ').join('-') ===
        Category
    );
  }
  //service filter with child category
  if (category) {
    products = data.filter(
      (product) =>
        product.children.toLowerCase().replace('&', '').split(' ').join('-') ===
        category
    );
  }

  //search result
  if (query) {
    products = data.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  return {
    props: {
      products,
    },
  };
};
