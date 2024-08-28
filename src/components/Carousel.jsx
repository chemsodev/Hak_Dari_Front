'use client';
import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 4;

  // Clone the first and last sets of items for seamless looping
  const clonedImages = [
    ...images.slice(-itemsPerSlide), // Clone last 4 items to the beginning
    ...images,
    ...images.slice(0, itemsPerSlide), // Clone first 4 items to the end
  ];

  const moveToIndex = (index) => {
    if (index < 0) {
      setCurrentIndex(clonedImages.length - itemsPerSlide * 2);
    } else if (index >= clonedImages.length - itemsPerSlide) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index);
    }
  };

  const prevSlide = () => {
    moveToIndex(currentIndex - itemsPerSlide);
  };

  const nextSlide = () => {
    moveToIndex(currentIndex + itemsPerSlide);
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-full lg:max-w-none">
        <div className="relative">
          {/* Carousel for medium and small screens */}
          <div
            className="flex transition-transform ease-in-out duration-500"
            style={{ transform: `translateX(-${(currentIndex / clonedImages.length) * 100}%)` }}
          >
            {clonedImages.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-1/4 px-2">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="mt-2 text-center">
                  <span className={`py-1 px-3 rounded-full ${image.labelClass}`}>
                    {image.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons for navigation */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <button
              onClick={prevSlide}
              className="bg-gray-800 bg-opacity-50 text-white p-2 rounded-full focus:outline-none"
            >
              ❮
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <button
              onClick={nextSlide}
              className="bg-gray-800 bg-opacity-50 text-white p-2 rounded-full focus:outline-none"
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
