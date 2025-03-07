import React from "react";
import { heroImg } from "../assets";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="w-full bg-white py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0">
        <div className="flex flex-col justify-start gap-4">
          {/* <p className='py-2 text-2xl text-[#20B486] font-medium'>START TO SUCCESS</p> */}
          <h1 className="md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold">
            We Craft <span className="text-[#20B486]">Software Solutions</span>{" "}
            That Drive Business Growth
          </h1>
          <p className="py-2 text-lg text-gray-600">
            A rocket launching into the sky, symbolizing the growth and success
            that software solutions can bring to businesses.
          </p>
        </div>

        <img src={heroImg} className="md:order-last  order-first" />
      </div>
    </div>
  );
};

export default Hero;
