import React from 'react';

const Tags = ({ product }) => {
  return (
    <>
      {product.tag.length !== 0 && (
        <div className="flex flex-row">
          <span className="bg-gray-100 border-0 text-gray-500 rounded-full inline-flex items-center justify-center px-2 py-1 text-xs font-semibold font-serif mt-2">
            {product.tag[0]}
          </span>
          <span className="bg-gray-100 border-0 text-gray-500 rounded-full inline-flex items-center justify-center px-2 py-1 text-xs font-semibold font-serif mt-2 mx-3">
            {product.tag[1]}
          </span>
        </div>
      )}
    </>
  );
};

export default Tags;
