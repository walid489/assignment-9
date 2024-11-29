import React from 'react'
import Logo from './assets/google.png'
import { IoHomeOutline } from "react-icons/io5";
import { TbBrandSnowflake } from "react-icons/tb";
import { IoCodeSlashOutline } from "react-icons/io5";
const Header = () => {
  return (
    <header className='py-2 fixed top-0 left-0 w-full z-[999] bg-white'>
      <div className="container">
        <div className="flex justify-between items-center">
          <img src={Logo} alt="Logo" className='max-w-[30px]'/>
          <ul className='flex gap-10'>
            <li className='flex items-center gap-x-2 capitalize text-base font-medium '><IoHomeOutline /><span>home</span></li>
            <li className='flex items-center gap-x-2 capitalize text-base font-medium '><TbBrandSnowflake /><span>brands</span></li>
            <li className='flex items-center gap-x-2 capitalize text-base font-medium '><IoCodeSlashOutline /><span>about dev</span></li>
          </ul>
          <div className='flex gap-3'>
            <button type='button' className='py-2 px-4 bg-[rgba(117,204,181,0.32)] rounded-md text-black font-semibold capitalize '>log in</button>
            <button type='button' className='py-2 px-4 bg-[rgba(117,204,181,0.32)] rounded-md text-black font-semibold capitalize '>sign up</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header