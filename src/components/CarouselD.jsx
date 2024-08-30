'use client';
import React, { useState } from 'react';
import { Carousel } from 'primereact/carousel';

const images = [
  {
    src: 'images/carousel/1.png',
    alt: 'House 1',
    label: 'Popular',
    labelClass: 'bg-red-500 text-white',
  },
  {
    src: 'images/carousel/2.png',
    alt: 'House 2',
    label: 'New Listing',
    labelClass: 'bg-blue-500 text-white',
  },
  {
    src: 'images/carousel/3.png',
    alt: 'House 3',
    label: 'Top Location',
    labelClass: 'bg-purple-500 text-white',
  },
  {
    src: 'images/carousel/4.png',
    alt: 'House 4',
    label: 'Best Rated',
    labelClass: 'bg-orange-500 text-white',
  },
  {
    src: 'images/carousel/5.png',
    alt: 'House 5',
    label: 'Discount Price',
    labelClass: 'bg-green-500 text-white',
  },
];

const responsiveOptions = [
  {
    breakpoint: '1400px',
    numVisible: 5, // Show all items on large screens
    numScroll: 0   // No scrolling on large screens
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
];

const imageTemplate = (image) => {
  return (
    <div className="border-1 surface-border border-round m-2 text-center py-5 px-3 ">
      <div className="flex justify-center">
        <img src={image.src} alt={image.alt} className="w-32 h-32 lg:w-48 lg:h-48 object-cover shadow-2 rounded-lg" />
      </div>
      <div className="mt-2">
        <label className={`text-lg font-medium rounded-md ${image.labelClass}`}>{image.label}</label>
      </div>
    </div>
  );
};
function CarouselD() {
    return (
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mt-10">Find Your Dream House</h1>
          <p className="text-center text-gray-600 mt-2">Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim</p>
          <div className="mt-10">
            <Carousel 
              value={images} 
              numVisible={3} 
              numScroll={1} 
              responsiveOptions={responsiveOptions} 
              itemTemplate={imageTemplate} 
              circular 
              autoplayInterval={3000} 
              className="custom-carousel"
            />
          </div>
        </div>
     
    );
  }

export default CarouselD;
