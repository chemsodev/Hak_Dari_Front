"use client";
import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='z-[6666] absolute top-4 w-full'>
      <nav className="flex justify-between items-center px-4 w-full lg:w-[92%] mx-auto md:rounded-full">
        <div>
          <Link href="/">
            <Image
              src={`/images/icons/logo.svg`}
              alt="Logo"
              width={500}
              height={500}
              className={`transition-transform ease-in-out w-20`}
            />
          </Link>
        </div>
        <div
          className={`nav-links duration-1000 ${
            menuOpen ? 'top-0' : 'left-[100%]'
          } md:static absolute  md:min-h-fit min-h-[60vh]  backdrop-blur-[6.3px] border border-[#fff5] px-7 py-2.5 right-0 md:w-auto w-[20em] max-w-full bg-[#fff5] md:bg-[#fff1] flex items-center rounded-md md:rounded-full`}
        >
          <ul className="flex text-small md:flex-row flex-col md:items-center md:gap-7 gap-4">
            <li className='text-[#555] ease-in-out'>
              <Link href="/about" className=" hover:text-Landingpages-textPrimary ease-in-out hover:font-[500]">
                About
              </Link>
            </li>
            <li className='text-[#555] ease-in-out'>
              <Link href="/#services" className=" hover:text-Landingpages-textPrimary ease-in-out hover:font-[500]">
                Services
              </Link>
            </li>
            <li className='text-[#555] ease-in-out'>
              <Link href="/properties" className=" hover:text-Landingpages-textPrimary ease-in-out hover:font-[500]">
                Properties
              </Link>
            </li>
            <li className='text-[#555] ease-in-out'>
              <Link href="/agents" className=" hover:text-Landingpages-textPrimary ease-in-out hover:font-[500]">
                Agents
              </Link>
            </li>
            <li className='text-[#555] ease-in-out'>
              <Link href="/#contact" className=" hover:text-Landingpages-textPrimary ease-in-out hover:font-[500]">
                Contact
              </Link>
            </li>
            <button className="bg-Landingpages-brand-primary transition duration-1000 ease-in-out text-white px-5 py-2.5 rounded-full hover:bg-Landingpages-brand-secondary md:hidden">
              <Link href="/login">Login</Link>
            </button>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-Landingpages-brand-primary text-small transition duration-1000 ease-in-out text-white px-5 py-2.5 rounded-full hover:bg-Landingpages-brand-secondary hidden md:block">
            <Link href="/login">Login</Link>
          </button>

          <Image
            src={`/images/icons/menu${menuOpen ? '2' : '1'}.svg`}
            alt="Menu"
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
