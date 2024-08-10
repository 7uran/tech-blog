import React from 'react'
import { TbSquareRotatedFilled } from 'react-icons/tb'
import { getTypeBg, getTypeClassName } from '../../functions'

const EditorsPickCard = ({ type, img, title, number }) => {

    return (
        <>
            <div className='w-[286px] h-[311px] flex flex-col gap-4 cursor-pointer '>
                <div className='relative'>
                    <img className='hover:opacity-75 duration-500 transition rounded-xl shadow-lg object-cover w-[286px] h-[190px]' src={img} alt='' />
                    <div className={`absolute top-0 z-10  text-xs px-2 py-1 rounded-md font-outfit text-white font-semibold ${getTypeBg(type)}`} ><p>{type.toUpperCase()}</p></div>
                </div>
                <div className='flex items-start '>
                    <div>
                        <p className='font-inter  text-gray-300 font-semibold text-4xl'>{number}</p></div>
                    <div className='px-4 flex flex-col gap-2 w-full '>
                        <p className='hover:text-custom-blue transition font-bold text-md font-inter'>{title}</p>
                        <p className='text-black text-xs font-outfit font-semibold flex items-center gap-2'>Shane Doe <span className='flex items-center font-normal text-gray-400 gap-2'><TbSquareRotatedFilled className='text-[7px]' />Jan 13, 2021</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditorsPickCard