import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import {
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

//internal import
import { UserContext } from '@context/UserContext';

const Footer = () => {
  const {
    state: { userInfo },
  } = useContext(UserContext);

  return (
    <div className="pb-16 lg:pb-0 xl:pb-0 bg-white">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
        <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 lg:py-20 justify-between">
          <div className="lg:pb-10 sm:pb-0 col-span-full sm:col-span-1 md:col-span-3 lg:col-span-6 lg:pr-20 mb-4 sm:mb-0">
            <Link href="/">
              <a className="mr-3 lg:mr-12 xl:mr-12" rel="noreferrer">
                <Image
                  width={110}
                  height={40}
                  src="/logo/logo-color.svg"
                  alt="logo"
                />
              </a>
            </Link>
            <p className="leading-7 font-sans text-base text-gray-600 mt-3">
              There are many popular products you will find our shop, Choose
              your daily necessary product from our NextWromo shop and get some
              special offer.
            </p>

            <div className="mt-6">
              <span className="text-base leading-7 font-medium block mb-2 pb-0.5">
                Follow Us
              </span>
              <ul className="text-sm flex">
                <li className="flex items-center mr-3 transition ease-in-out duration-500">
                  <Link href="https://www.facebook.com">
                    <a
                      aria-label="Social Link"
                      rel="noreferrer"
                      target="_blank"
                      className="block text-center mx-auto text-gray-500 hover:text-white"
                    >
                      <FacebookIcon size={34} round />
                    </a>
                  </Link>
                </li>
                <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                  <Link href="https://twitter.com">
                    <a
                      aria-label="Social Link"
                      rel="noreferrer"
                      target="_blank"
                      className="block text-center mx-auto text-gray-500 hover:text-white"
                    >
                      <TwitterIcon size={34} round />
                    </a>
                  </Link>
                </li>
                <li className="flex items-center mr-3 transition ease-in-out duration-500">
                  <Link href="https://www.pinterest.com">
                    <a
                      aria-label="Social Link"
                      rel="noreferrer"
                      target="_blank"
                      className="block text-center mx-auto text-gray-500 hover:text-white"
                    >
                      <PinterestIcon size={34} round />
                    </a>
                  </Link>
                </li>
                <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                  <Link href="https://www.linkedin.com">
                    <a
                      aria-label="Social Link"
                      rel="noreferrer"
                      target="_blank"
                      className="block text-center mx-auto text-gray-500 hover:text-white"
                    >
                      <LinkedinIcon size={34} round />
                    </a>
                  </Link>
                </li>
                <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                  <Link href="https://dribbble.com">
                    <a
                      aria-label="Social Link"
                      rel="noreferrer"
                      target="_blank"
                      className="block text-center mx-auto text-gray-500 hover:text-white"
                    >
                      <WhatsappIcon size={34} round />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2">
            <h3 className="text-lg lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
              Company
            </h3>
            <ul className="text-sm flex flex-col space-y-3">
              <li className="flex items-baseline">
                <Link href="/about-us">
                  <a className="text-gray-600 inline-block w-full hover:text-green-500">
                    About Us
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="/contact-us">
                  <a className="text-gray-600 inline-block w-full hover:text-green-500">
                    Contact us
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="#">
                  <a className="text-gray-600 inline-block w-full hover:text-green-500">
                    Careers
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="#">
                  <a className="text-gray-600 inline-block w-full hover:text-green-500">
                    Latest news
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="/offer">
                  <a className="text-gray-600 inline-block w-full hover:text-green-500">
                    Latest Discount
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2">
            <h3 className="text-lg lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
              Top Category
            </h3>
            <ul className="text-sm lg:text-15px flex flex-col space-y-3">
              <li className="flex items-baseline">
                <Link href="/search?Category=fish--meat">
                  <a className="text-gray-600 inline-block w-full hover:text-green-500">
                    Fish & Meat
                  </a>
                </Link>
              </li>

              <li className="flex items-baseline">
                <Link href="/search?Category=drinks">
                  <a className="text-gray-600 inline-block w-full hover:text-green-500">
                    Soft Drinks
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="search?Category=baby-care">
                  <a className="text-gray-600 inline-block w-full hover:text-green-500">
                    Baby Care
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="search?Category=beauty--health">
                  <a className="text-gray-600 inline-block w-full hover:text-green-500">
                    Beauty & Health
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="/search?Category=fruits--vegetable">
                  <a className="text-gray-600 inline-block w-full hover:text-green-500">
                    Fruits & Vegetable
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2">
            <h3 className="text-lg lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
              My Account
            </h3>
            <ul className="text-sm lg:text-15px flex flex-col space-y-3">
              <li className="flex items-baseline">
                <Link href={`${userInfo?.email ? '/user/dashboard' : '#'}`}>
                  <a className="text-gray-600 inline-block w-full hover:text-green-500">
                    Dashboard
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href={`${userInfo?.email ? '/user/my-orders' : '#'}`}>
                  <a className="text-gray-600 inline-block w-full hover:text-green-500">
                    My Orders
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href={`${userInfo?.email ? '/user/dashboard' : '#'}`}>
                  <a className="text-gray-600 inline-block w-full hover:text-green-500">
                    Recent Orders
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link
                  href={`${userInfo?.email ? '/user/update-profile' : '#'}`}
                >
                  <a className="text-gray-600 inline-block w-full hover:text-green-500">
                    Updated Profile
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link
                  href={`${userInfo?.email ? '/user/change-password' : '#'}`}
                >
                  <a className="text-gray-600 inline-block w-full hover:text-green-500">
                    Change Password
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100">
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 flex flex-col-reverse md:flex-row text-center items-center md:justify-between py-4">
          <p className="text-sm text-gray-500 eading-6">
            Copyright 2021 @{' '}
            <Link href="https://themeforest.net/user/wromo">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500"
              >
                WroMo
              </a>
            </Link>
            , All rights reserved.
          </p>
          <ul className="hidden md:flex flex-wrap justify-center items-center space-s-4 xs:space-s-5 lg:space-s-7 -mb-1.5 md:mb-0 mx-auto md:mx-0 pt-3.5 md:pt-0">
            <li className="px-1 mb-2 md:mb-0 transition hover:opacity-80 inline-flex">
              <Image
                width={240}
                height={28}
                className="object-cover rounded"
                src="/payment-method/payment-logo.png"
                alt="payment method"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
