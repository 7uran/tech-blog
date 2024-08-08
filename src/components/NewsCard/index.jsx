import React from 'react'
import { TbSquareRotatedFilled } from 'react-icons/tb'

const NewsCard = ({ img, title }) => {
    return (
        <div className='flex items-center gap-4 cursor-pointer'>
            <div>
                <img className='hover:opacity-75 transition w-[95px] h-[75px] object-cover rounded-xl' src={img} alt='' />
            </div>
            <div className='w-[290px] flex flex-col gap-3'>
                <p className='font-semibold hover:text-custom-blue transition '>{title}</p>
                <p className='text-black text-xs font-outfit font-semibold flex items-center gap-2'>Shane Doe <span className='flex items-center font-normal text-gray-400 gap-2'><TbSquareRotatedFilled className='text-[7px]' />Mar 15, 2020</span></p>
            </div>
        </div>
    )
}

export default NewsCard