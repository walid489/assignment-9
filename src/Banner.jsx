import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BnrOne from './assets/bannerone.webp'
import BnrTwo from './assets/bannertwo.jpg'
import BnrThree from './assets/bannerthree.webp'
const Banner = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 7000,
        autoplaySpeed: 1000,
        cssEase: "linear"
      };
  return (
    <section className='py-10'>
        <div className="container">
            <Slider {...settings}>
                <div><img src={BnrOne} alt="BnrOne" className='h-[650px] w-full' /></div>
                <div><img src={BnrTwo} alt="BnrTwo" className='h-[650px] w-full' /></div>
                <div><img src={BnrThree} alt="BnrThree" className='h-[650px] w-full' /></div>
            </Slider>
            <div className="relative">
                <div className="bnrtxt w-3/5 absolute top-[-570px] left-5 pl-10">
                <h1 className=' ml-[60px] font-extrabold text-[60px] capitalize'>better product for <br/> better life</h1>
                </div>
                <div className="w-3/5 absolute top-[-400px] left-5 pl-10">
                <p className='mt-5 w-[85%] ml-[60px] font-semibold text-[20px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sit quos consectetur reiciendis eos ipsum non cum deleniti dolorem voluptate nulla voluptatem quasi delectus, accusantium et magni quae nisi ducimus.</p>
                <button type='button' className=' ml-[60px] py-2 px-7 bg-red-100 rounded-md mt-10 text-20px capitalize font-semibold '>shop now</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner