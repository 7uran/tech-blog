import React from 'react'
import { TbSquareRotatedFilled } from 'react-icons/tb'

const GamingZoneCard = ({ title, img }) => {
    return (
        <div className='flex items-center gap-8 cursor-pointer border-t-2 py-3'>
            <div className='w-[70%] flex flex-col gap-3'>
                <p className='font-semibold hover:text-custom-blue transition text-[15px] '>{title}</p>
                <p className='text-black text-xs font-outfit font-semibold flex items-center gap-2'>Shane Doe <span className='flex items-center font-normal text-gray-400 gap-2'><TbSquareRotatedFilled className='text-[7px]' />Mar 15, 2020</span></p>
            </div>
            <div className='shadow-lg rounded-xl'>
                <img className='hover:opacity-75 transition w-[90px] h-[75px] object-cover rounded-xl' src={img} alt='' />
            </div>
        </div>
    )
}

export default GamingZoneCard