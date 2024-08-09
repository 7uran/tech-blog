import React from 'react'
import { TbSquareRotatedFilled } from 'react-icons/tb'
import { GiSmallFire } from "react-icons/gi";

const PopularNowCard = ({ num, title, view }) => {
    return (
        <div className='flex items-start gap-2 w-full cursor-pointer '>
            <div className='w-[30px] h-[30px] flex items-center justify-center bg-custom-blue rounded-full'>
                <p className='text-white font-semibold p-4'>{num}</p>
            </div>
            <div className='flex flex-col gap-2'>
                <div><h1 className='text-[16px] font-semibold transition hover:text-custom-blue'>{title}</h1></div>
                <div className='flex gap-4'>
                    <p className='text-gray-500 font-outfit text-xs flex items-center gap-2'>Shane Doe <TbSquareRotatedFilled className='text-[7px]' />Jan 14,2021</p>
                    <p className='flex text-xs text-red-500 font-semibold '> <GiSmallFire />{view} Views</p>
                </div>
            </div>
        </div>
    )
}

export default PopularNowCard