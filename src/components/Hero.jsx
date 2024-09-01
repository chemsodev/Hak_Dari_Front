import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ["800", "700", "600", "500", "400", "300", "200", "100"],
    subsets: ["latin"],
  });
  
const Hero = () => {
  return (
    <div className={`w-full relative flex justify-center items-center ${poppins.className}`}>
      <div className="relative h-full w-[80%] bg-red-700  lg:h-100 md:h-96  rounded-3xl overflow-hidden ">
        <video
          src="video/herosection.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        ></video>

        <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-start lg:px-12 px-8 lg:py-12 py-6">
          <div className="bg-hero-tagbg text-hero-tagtext text-3xl px-4 py-2 rounded-full mb-4 w-[40%] text-center flex justify-center items-center">
            <span><Image src={"images/pin-drop.svg"} width={34} height={34} className="inline"/> We Have 42 Offices Around Algeria</span>
          </div>
          <h2 className="text-white text-xl lg:text-2xl font-medium">
            We Can Help You To Find You
          </h2>
          <p className="text-white text-lg lg:text-2xl">Dream Property</p>
        </div>

      </div>
        <div className="absolute -bottom-14 flex justify-center items-center left-52 z-10  bg-white rounded-[50%] w-auto h-auto">
          <button>
            <Image src="/images/Btn.png" alt="Btn" width={116} height={116} />
          </button>
        </div>
    </div>
  );
};

export default Hero;
