import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FooterTop = () => {
  return (
    <div className="bg-indigo-50 bg-repeat bg-center overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-10 flex flex-col md:flex-row lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-2/5 md:w-3/6 py-10 lg:py-0">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-serif mb-3">
            Get Your Daily Needs From Our NextWromo Store
          </h3>
          <p className="text-base opacity-90 leading-7">
            There are many products you will find our shop, Choose your daily
            necessary product from our NextWromo shop and get some special
            offer.
          </p>
          <div className="mt-8">
            <Link href="https://www.apple.com/app-store/">
              <a className="mr-3" target="_blank" rel="noreferrer">
                <Image
                  width={170}
                  height={50}
                  className="mr-2 rounded"
                  src="/app/app-store.svg"
                  alt="app store"
                />
              </a>
            </Link>
            <Link href="https://play.google.com/store/apps">
              <a target="_blank" rel="noreferrer">
                <Image
                  width={170}
                  height={50}
                  className="rounded"
                  src="/app/play-store.svg"
                  alt="app store"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="flex-grow hidden lg:flex md:flex lg:justify-end">
          <Image
            width={500}
            height={394}
            src="/app-download-img.png"
            alt="app download"
            className="block w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
