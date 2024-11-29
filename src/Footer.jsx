import React from 'react';
import { FaRegCopyright } from "react-icons/fa6";
import Logo from './assets/google.png'
import { FaFacebookF } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='bg-blue-100 py-10'>
        <div className="container">
            <div className="flex justify-between ">
                <div className='w-[40%]'>
                    <img src={Logo} alt="loog" className='max-w-10' />
                    <p className='font-semibold text-[#918f8f] mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus minus eligendi voluptate. Consectetur consequatur rerum laudantium dignissimos sed animi ducimus, corrupti enim sit quibusdam sint officiis voluptatum ad odit nulla?</p>
                    <ul className='flex flex-col mt-5'>
                        <li><a className='flex items-center gap-1 capitalize ' href="#"><FaFacebookF />facebook</a></li>
                        <li><a className='flex items-center gap-1 capitalize ' href="#"><BsGithub />github</a></li>
                        <li><a className='flex items-center gap-1 capitalize ' href="#"><FaTwitter />twitter</a></li>
                        <li><a className='flex items-center gap-1 capitalize ' href="#"><FaLinkedinIn />linked in</a></li>
                    </ul>
                </div>
                <div className='w-[30%]'>
                    <h3 className='font-bold capitalize text-center '>important links</h3>
                    <ul className='mt-5 flex flex-col gap-3 capitalize font-semibold text-center '>
                        <li><a href="#" className='text-base text-[#000]  '>our community</a></li>
                        <li><a href="#" className='text-base text-[#000]  '>our portfolio</a></li>
                        <li><a href="#" className='text-base text-[#000]  '>members</a></li>
                        <li><a href="#" className='text-base text-[#000]  '>clients</a></li>
                        <li><a href="#" className='text-base text-[#000]  '>company</a></li>
                    </ul>
                </div>
                <div className='w-[30%]'>
                    <h3 className='font-bold capitalize text-center '>online shop</h3>
                    <ul className='mt-5 flex flex-col gap-3 capitalize font-semibold text-center '>
                        <li><a href="#">watch</a></li>
                        <li><a href="#">blog</a></li>
                        <li><a href="#">shoes</a></li>
                        <li><a href="#">dress</a></li>
                    </ul>
                </div>
                <div className='w-[30%]'>
                    <h3 className='font-bold capitalize text-center '>get help</h3>
                    <ul className='mt-5 flex flex-col gap-3 capitalize font-semibold text-center '>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">returns</a></li>
                        <li><a href="#">paument option</a></li>
                        <li><a href="#">order status</a></li>
                        <li><a href="#">shoping</a></li>
                    </ul>
                </div>
            </div>
            <h6 className='flex items-center gap-x-1 capitalize font-semibold justify-center mt-5 pt-2 border-t-[1px] border-cyan-50 border-solid '>copyright <FaRegCopyright /> walid all right deserved</h6>
        </div>
    </footer>
  )
}

export default Footer