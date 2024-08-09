import React from 'react'
import { TbSquareRotatedFilled } from 'react-icons/tb'
import { getTypeBg } from '../../functions'

const FeaturedCard = ({ rating, title, type, img }) => {
    return (
        <div className='w-[290px] h-[329px] border rounded-xl shadow-xl'>
            <div className='relative'>
                <img className='rounded-xl shadow-xl h-[176px] w-full object-cover cursor-pointer hover:opacity-75 transition' src={img} alt='' />
                <div className={`absolute bottom-0 left-5 z-10  text-xs px-2 py-1 rounded-md font-outfit text-white font-semibold ${getTypeBg(type)}`} ><p>{type.toUpperCase()}</p></div>
                <div className='absolute text-white top-2 right-2 border-[3px] text-xs font-semibold flex items-center justify-center border-custom-blue rounded-full w-[40px] h-[40px]'>{rating}</div>
            </div>
            <div className='p-6 flex flex-col gap-4'>
                <h1 className='text-[17px] font-bold cursor-pointer hover:text-custom-blue transition'>{title}</h1>
                <div className='flex items-center gap-2'>
                    <p className='text-gray-600 font-outfit text-xs flex items-center gap-2'>Shane Doe <TbSquareRotatedFilled className='text-[7px]' />Jan 14,2021</p>
                </div>
            </div>
        </div >
    )
}

export default FeaturedCard