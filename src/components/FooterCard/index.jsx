import React from 'react'
import { GiSmallFire } from 'react-icons/gi'

const FooterCard = ({ img, title, view, isOpen }) => {
    return (
        <div className='flex items-center gap-4 cursor-pointer py-6 '>
            <div>
                <img className='hover:opacity-75 transition w-[95px] h-[75px] object-cover rounded-xl' src={img} alt='' />
            </div>
            <div className='w-[290px] flex flex-col gap-3'>
                <p className='font-semibold hover:text-custom-blue transition '>{title}</p>
                <div className='flex items-center gap-4'>
                    <span className='flex items-center text-xs text-gray-400 gap-2 font-outfit'>Mar 15, 2020</span>
                    <p className={` text-xs text-red-500 gap-1 font-semibold ${isOpen === true ? "flex" : "hidden"} `}> <GiSmallFire />{view} Views</p>
                </div>

            </div>
        </div>
    )
}

export default FooterCard