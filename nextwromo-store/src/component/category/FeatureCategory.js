import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

//internal import
import useAsync from '@hooks/useAsync';
import CategoryServices from '@services/CategoryServices';

const FeatureCategory = () => {
  const router = useRouter();
  const { data, error } = useAsync(() => CategoryServices.getAllCategory());

  return (
    <>
      {error ? (
        <p className="flex justify-center align-middle items-center m-auto text-xl text-red-500">
          <span> {error}</span>
        </p>
      ) : (
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6">
          {data?.map((item, i) => (
            <li className="group" key={i + 1}>
              <div
                onClick={() =>
                  router.push(
                    `/search?Category=${item.parent
                      .toLowerCase()
                      .replace('&', '')
                      .split(' ')
                      .join('-')}`
                  )
                }
                className="border border-gray-100 bg-white rounded-lg p-4 block cursor-pointer transition duration-200 ease-linear transform group-hover:scale-105"
              >
                <div className="flex items-center">
                  <Image
                    src={item.icon}
                    alt={item.parent}
                    width={35}
                    height={35}
                  />
                  <h3 className="pl-3 lg:pl-4 text-sm text-gray-600 font-serif font-medium leading-tight">
                    {item.parent}
                  </h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default FeatureCategory;
