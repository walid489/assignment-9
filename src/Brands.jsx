import React from "react";
import Marquee from "react-fast-marquee";
import brand1 from './assets/brand1.png'
import brand2 from './assets/brand2.jpg'
import brand3 from './assets/brand3.png'
import brand4 from './assets/brand4.jpg'
import brand5 from './assets/brand5.png'
import brand6 from './assets/brand6.png'
import brand7 from './assets/brand7.jpg'
const Brands = () => {

  return (
    <section className="pb-[180px]">
      <div className="container">
        <h2 className="font-extrabold capitalize text-center text-3xl ">
          Our brands
        </h2>
        <Marquee className="mt-[30px]" pauseOnHover={true}>
            <div className="w-full flex gap-10">
            <img src={brand1} alt="1" className="w-full h-[100px]" />
            <img src={brand2} alt="2" className="w-full h-[100px]" />
            <img src={brand3} alt="3" className="w-full h-[100px]" />
            <img src={brand4} alt="4" className="w-full h-[100px]" />
            <img src={brand5} alt="5" className="w-full h-[100px]" />
            <img src={brand6} alt="6" className="w-full h-[100px]" />
            <img src={brand7} alt="7" className="w-full h-[100px]" />
            </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Brands;
