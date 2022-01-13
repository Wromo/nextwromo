import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';

//internal import
import { sliderData } from '@utils/data';

const MainCarousel = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      autoPlay="false"
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass=""
      dotListClass=""
      infinite
      itemClass=""
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 1,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 1,
        },
      }}
      arrows={false}
      showDots={true}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {sliderData.map((item, i) => (
        <div className="h-full relative rounded-lg overflow-hidden" key={i + 1}>
          <div className="text-sm text-gray-600 hover:text-green-dark">
            <Image
              layout="responsive"
              width={950}
              height={400}
              src={item.image}
              alt={item.title}
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute top-0 left-0 z-10 p-r-16 flex-col flex w-full h-full place-items-start justify-center">
            <div className="pl-4 pr-12 sm:pl-10 sm:pr-16 w-10/12 lg:w-8/12 xl:w-7/12">
              <h1 className="mb-2 font-serif text-xl sm:text-lg md:text-2xl line-clamp-1 md:line-clamp-none  lg:line-clamp-none  lg:text-3xl font-bold text-gray-800">
                {item.title}
              </h1>
              <p className="text-base leading-6 text-gray-600 font-sans line-clamp-1  md:line-clamp-none lg:line-clamp-none">
                {item.info}
              </p>
              <Link href={item.url}>
                <a className="hidden sm:inline-block lg:inline-block text-sm leading-6 font-serif font-medium mt-6 px-6 py-2 bg-green-500 text-center rounded-md text-white hover:bg-green-600">
                  Shop Now
                </a>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default React.memo(MainCarousel);
