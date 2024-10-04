import React from 'react';
import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const Carousel2 = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
  };

  const images = [
    {
      src: '/images/carousel/1.png',
      alt: 'House 1',
      label: 'Popular',
      labelClass: 'text-red-500 bg-[#FFE1E1]',
    },
    {
      src: '/images/carousel/2.png',
      alt: 'House 2',
      label: 'New Listing',
      labelClass: 'text-blue-500 bg-[#D7EEFF]',
    },
    {
      src: '/images/carousel/3.png',
      alt: 'House 3',
      label: 'Top Location',
      labelClass: 'text-purple-500 bg-[#ECE1FF]',
    },
    {
      src: '/images/carousel/4.png',
      alt: 'House 4',
      label: 'Best Rated',
      labelClass: 'text-orange-500 bg-[#FFF4E1]',
    },
    {
      src: '/images/carousel/5.png',
      alt: 'House 5',
      label: 'Discount Price',
      labelClass: 'text-green-500 bg-[#F1FFF1] ',
    },
  ];

  const imageTemplate = (image, index) => {
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div className="relative">
          <Image src={image.src} alt={image.alt} width={2000} height={2000} className="w-32 h-32 lg:w-56 lg:h-56 object-cover shadow-2 rounded-2xl" />
          <label className={`absolute bottom-2 left-2 text-lg font-medium rounded-lg px-1 ${image.labelClass}`}>
            <span className="inline-block align-middle">
              <Image src={`/images/icons/${index + 1}.svg`} alt="icon" width={10} height={10} className="mx-1 inline-block align-middle" />
            </span>
            <span className="inline-block align-middle text-xs">{image.label}</span>
          </label>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4">
      {isMobile ? (
        <Slider {...settings}>
        <Carousel 
       value={images} 
       numVisible={3} 
       numScroll={1} 
       itemTemplate={imageTemplate} 
       circular 
       autoplayInterval={3000} 
       className="custom-carousel"
     />
     <Carousel 
    value={images} 
    numVisible={3} 
    numScroll={1} 
    itemTemplate={imageTemplate} 
    circular 
    autoplayInterval={3000} 
    className="custom-carousel"
  />
  <Carousel 
 value={images} 
 numVisible={3} 
 numScroll={1} 
 itemTemplate={imageTemplate} 
 circular 
 autoplayInterval={3000} 
 className="custom-carousel"
/>
           <Carousel 
          value={images} 
          numVisible={3} 
          numScroll={1} 
          itemTemplate={imageTemplate} 
          circular 
          autoplayInterval={3000} 
          className="custom-carousel"
        />
        <Carousel 
       value={images} 
       numVisible={3} 
       numScroll={1} 
       itemTemplate={imageTemplate} 
       circular 
       autoplayInterval={3000} 
       className="custom-carousel"
     />
          
        </Slider>
      ) : (
        <div className="flex space-x-4">
         
         <Carousel 
          value={images} 
          numVisible={3} 
          numScroll={1} 
          itemTemplate={imageTemplate} 
          circular 
          autoplayInterval={3000} 
          className="custom-carousel"
        />
        <Carousel 
       value={images} 
       numVisible={3} 
       numScroll={1} 
       itemTemplate={imageTemplate} 
       circular 
       autoplayInterval={3000} 
       className="custom-carousel"
     />
     <Carousel 
    value={images} 
    numVisible={3} 
    numScroll={1} 
    itemTemplate={imageTemplate} 
    circular 
    autoplayInterval={3000} 
    className="custom-carousel"
  />
  <Carousel 
 value={images} 
 numVisible={3} 
 numScroll={1} 
 itemTemplate={imageTemplate} 
 circular 
 autoplayInterval={3000} 
 className="custom-carousel"
/>
           <Carousel 
          value={images} 
          numVisible={3} 
          numScroll={1} 
          itemTemplate={imageTemplate} 
          circular 
          autoplayInterval={3000} 
          className="custom-carousel"
        />
        </div>
      )}
    </div>
  );
};

export default Carousel2;
