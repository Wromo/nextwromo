import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const OfferCard = () => {
  return (
    <div className="w-full grid grid-col gap-4">
      <div className="block group">
        <Link href="/search?Category=fruits--vegetable">
          <a>
            {' '}
            <Image
              layout="responsive"
              width={750}
              height={220}
              src="/banner-1.jpg"
              alt="offer-banner"
              priority
              className="object-cover rounded-md transition duration-150 ease-linear transform group-hover:scale-105"
            />
          </a>
        </Link>
      </div>
      <div className="block group">
        <Link href="/search?Category=organic-food">
          <a>
            {' '}
            <Image
              layout="responsive"
              width={750}
              height={220}
              src="/banner-2.jpg"
              alt="test"
              className="object-cover rounded-md transition duration-150 ease-linear transform group-hover:scale-105"
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default OfferCard;
