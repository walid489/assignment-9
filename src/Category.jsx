import React from 'react'
import { BsPcDisplayHorizontal } from "react-icons/bs";
import { CiMobile1 } from "react-icons/ci";
import { MdOutlineLinkedCamera } from "react-icons/md";
import { LiaMicrophoneSolid } from "react-icons/lia";
import { CiBoxList } from "react-icons/ci";
import { LuPrinter } from "react-icons/lu";
import { MdFastfood } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { BiSolidWatch } from "react-icons/bi";



const Category = () => {
  return (
    <section className='pb-10'>
        <div className="container">
        <h2 className="font-extrabold capitalize text-center text-3xl ">category</h2>
            <div className="flex justify-between py-7">
                <button type='button' className='flex gap-2 items-center capitalize font-semibold text-white py-2 px-5 rounded-md bg-slate-400 '><BsPcDisplayHorizontal />pc/laptop</button>
                <button type='button' className='flex gap-2 items-center capitalize font-semibold text-white py-2 px-5 rounded-md bg-slate-400 '><CiMobile1 />mobile/tablet</button>
                <button type='button' className='flex gap-2 items-center capitalize font-semibold text-white py-2 px-5 rounded-md bg-slate-400 '><MdOutlineLinkedCamera />camera/TV</button>
                <button type='button' className='flex gap-2 items-center capitalize font-semibold text-white py-2 px-5 rounded-md bg-slate-400 '><MdFastfood />food</button>
                <button type='button' className='flex gap-2 items-center capitalize font-semibold text-white py-2 px-5 rounded-md bg-slate-400 '><GiClothes />cloth</button>
                <button type='button' className='flex gap-2 items-center capitalize font-semibold text-white py-2 px-5 rounded-md bg-slate-400 '><BiSolidWatch />watch</button>
                <button type='button' className='flex gap-2 items-center capitalize font-semibold text-white py-2 px-5 rounded-md bg-slate-400 '><LuPrinter />printer</button>
                <button type='button' className='flex gap-2 items-center capitalize font-semibold text-white py-2 px-5 rounded-md bg-slate-400 '><LiaMicrophoneSolid />micro-phone</button>
                <button type='button' className='flex gap-2 items-center capitalize font-semibold text-white py-2 px-5 rounded-md bg-slate-400 '><CiBoxList />others</button>
            </div>
        </div>
    </section>
  )
}

export default Category