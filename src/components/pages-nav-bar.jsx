
import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { menuOutline } from 'ionicons/icons';
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='z-[6666] absolute top-4 w-full '>
      <nav className="flex justify-between items-center px-4 w-full lg:w-[92%] mx-auto md:rounded-full">
        <div>
        <Image
          src={`/images/icons/logo.svg`} 
          alt="arrow"
          width={500} 
          height={500}
          className={`transition-transform ease-in-out w-20 `}
        />
        </div>
        <div
          className={`nav-links duration-1000 top-0 ${
            menuOpen ? 'top-0' : 'left-[100%]'
          } md:static absolute  md:min-h-fit min-h-[60vh]  backdrop-blur-[6.3px] border border-[#fff5] px-7 py-2.5 right-0 md:w-auto w-[20em] max-w-full bg-[#fff5] md:bg-[#fff1] flex items-center rounded-md md:rounded-full`}
        >
          <ul className="flex text-small md:flex-row flex-col md:items-center md:gap-7 gap-4">
            <li className='text-[#555] ease-in-out '>
              <a className=" hover:text-Landingpages-textPrimary ease-in-out hover:font-[500]" href="#about">
                about
              </a>
            </li>
            <li className='text-[#555] ease-in-out '>
              <a className=" hover:text-Landingpages-textPrimary ease-in-out hover:font-[500]" href="#about">
              services
              </a>
            </li>
            <li className='text-[#555] ease-in-out '>
              <a className=" hover:text-Landingpages-textPrimary ease-in-out hover:font-[500]" href="#about">
              properties 
              </a>
            </li>
            <li className='text-[#555] ease-in-out '>
              <a className=" hover:text-Landingpages-textPrimary ease-in-out hover:font-[500]" href="#about">
              agents
              </a>
            </li>
            <li className='text-[#555] ease-in-out '>
              <a className=" hover:text-Landingpages-textPrimary ease-in-out hover:font-[500]" href="#about">
              contact
              </a>
            </li>
            <button className="bg-Landingpages-brand-primary transition duration-1000 ease-in-out text-white px-5 py-2.5 rounded-full hover:bg-Landingpages-brand-secondary md:hidden">
            <a href="#">Login</a>
          </button>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-Landingpages-brand-primary text-small transition duration-1000 ease-in-out text-white px-5 py-2.5 rounded-full hover:bg-Landingpages-brand-secondary hidden md:block">
          <a href="#">Login</a>
          </button>
        
          <Image
          src={`/images/icons/menu${menuOpen ? '2' : '1'}.svg`} 
          alt="arrow"
          width={500} 
          height={500}
          onClick={toggleMenu}
          className={`transition-transform ease-in-out z-[888] cursor-pointer w-10 md:hidden`}
        />
        </div>
      </nav>
    </header>
  );
};

export default Header;
