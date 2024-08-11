import React from 'react'
import { TbSquareRotatedFilled } from 'react-icons/tb'


const GadgetCard = ({ img, title, rating, isHidden = true }) => {
    return (
        <div className='w-[404px] h-[444px] border flex flex-col  shadow-xl rounded-xl'>
            <div className='relative'>
                <img className='h-[223px] w-[404px] hover:opacity-75 cursor-pointer transition object-cover  rounded-xl shadow-xl' src={img} alt='' />
                <div className="absolute top-0 z-10  text-xs px-2 py-1 rounded-md font-outfit text-white font-semibold bg-custom-purple" ><p>GADGETS</p></div>
                <div className={` ${isHidden === false ? "flex" : "hidden"}  bg-black/40 absolute text-white top-2 right-2 border-[3px] text-xs font-semibold  items-center justify-center border-custom-blue rounded-full w-[40px] h-[40px]`}>{rating}</div>
            </div>
            <div className='p-6 flex flex-col gap-3'>
                <h2 className='text-[19px] font-bold hover:text-custom-blue transition cursor-pointer '>{title}</h2>
                <p className='text-black text-xs font-outfit font-semibold flex items-center gap-2'>Shane Doe <span className='flex items-center font-normal text-gray-400 gap-2'><TbSquareRotatedFilled className='text-[7px]' />Jan 13, 2021</span></p>
                <p className='text-[14px] text-gray-600'>To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and…</p>
            </div>
        </div>
    )
}

export default GadgetCard