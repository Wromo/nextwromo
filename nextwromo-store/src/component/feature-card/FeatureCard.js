import React from 'react';

import { featurePromo } from '@utils/data';

const FeatureCard = () => {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 mx-auto">
      {featurePromo.map((promo) => (
        <div
          key={promo.id}
          className={`rounded-lg p-6 flex items-center transition duration-200 ease-linear transform group-hover:scale-105 ${
            promo.className ? promo.className : 'bg-yellow-100'
          }`}
        >
          <div className="mr-3 lg:mr-5">
            <promo.icon
              className="flex-shrink-0 h-6 w-6 text-red-600"
              aria-hidden="true"
            />
          </div>
          <div className="">
            <span className="block font-serif text-base font-semibold leading-5">
              {promo.title}
            </span>
            <span className="text-sm font-sans text-gray-600">
              {promo.info}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;
