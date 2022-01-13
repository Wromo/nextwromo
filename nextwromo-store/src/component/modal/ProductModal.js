import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { useCart } from 'react-use-cart';

import MainModal from '@component/modal/MainModal';
import Tags from '@component/common/Tags';
import Stock from '@component/common/Stock';
import Price from '@component/common/Price';
import { notifySuccess } from '@utils/toast';

const ProductModal = ({ modalOpen, setModalOpen, product }) => {
  const [item, setItem] = useState(1);
  const { addItem } = useCart();

  const handleAddItem = () => {
    const newItem = {
      ...product,
      id: product._id,
    };
    addItem(newItem, item);
    notifySuccess(`${item} Item Added To Cart!`);
  };

  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="inline-block overflow-y-auto h-full align-middle transition-all transform bg-white shadow-xl rounded-2xl">
        <div className="flex flex-col lg:flex-row md:flex-row w-full max-w-4xl overflow-hidden">
          <Link href={`/product/${product.slug}`} passHref>
            <div
              onClick={() => setModalOpen(false)}
              className="flex-shrink-0 flex items-center justify-center h-auto cursor-pointer"
            >
              <Image
                src={product.image}
                width={420}
                height={420}
                alt={product.title}
              />
            </div>
          </Link>

          <div className="w-full flex flex-col p-5 md:p-8 text-left">
            <div className="mb-2 md:mb-2.5 block -mt-1.5">
              <Link href={`/product/${product.slug}`} passHref>
                <h1
                  onClick={() => setModalOpen(false)}
                  className="text-heading text-lg md:text-xl lg:text-2xl font-semibold font-serif hover:text-black cursor-pointer"
                >
                  {product.title}
                </h1>
              </Link>

              <Stock product={product} />
            </div>
            <p className="text-sm leading-6 text-gray-500 md:leading-7 line-clamp-3">
              {product.description}
            </p>
            <div className="flex items-center mt-4">
              <Price product={product} />
            </div>

            <div className="flex items-center mt-4">
              <div className="flex items-center justify-between space-s-3 sm:space-s-4 w-full">
                <div className="group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0 border h-11 md:h-12 border-gray-300">
                  <button
                    onClick={() => setItem(item - 1)}
                    disabled={item === 1}
                    className="flex items-center justify-center flex-shrink-0 h-full transition ease-in-out duration-300 focus:outline-none w-8 md:w-12 text-heading border-e border-gray-300 hover:text-gray-500"
                  >
                    <span className="text-dark text-base">
                      <FiMinus />
                    </span>
                  </button>
                  <p className="font-semibold flex items-center justify-center h-full  transition-colors duration-250 ease-in-out cursor-default flex-shrink-0 text-base text-heading w-8  md:w-20 xl:w-24">
                    {item}
                  </p>
                  <button
                    onClick={() => setItem(item + 1)}
                    className="flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none w-8 md:w-12 text-heading border-s border-gray-300 hover:text-gray-500"
                  >
                    <span className="text-dark text-base">
                      <FiPlus />
                    </span>
                  </button>
                </div>
                <button
                  onClick={handleAddItem}
                  disabled={product.quantity < 1 || item === product.quantity}
                  className="text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-serif text-center justify-center border-0 border-transparent rounded-md focus-visible:outline-none focus:outline-none text-white px-4 ml-4 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white bg-green-500 hover:bg-green-600 w-full h-12"
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <span className="font-serif font-semibold py-1 text-sm d-block">
                <span className="text-gray-700">Category:</span>{' '}
                <span className="text-gray-500">{product.children}</span>
              </span>
              <Tags product={product} />
            </div>
          </div>
        </div>
      </div>
    </MainModal>
  );
};

export default React.memo(ProductModal);
