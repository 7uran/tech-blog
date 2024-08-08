import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { TbSquareRotatedFilled } from 'react-icons/tb'

const TrendingPostCard = ({ date, title, img }) => {
    return (
        <div className='w-[280px] h-[287px] flex flex-col items-center cursor-pointer'>

            <div className='relative rounded-xl overflow-hidden'>
                <img className='object-cover h-[180px] w-[280px]' src={img} alt='' />
                <div className={` absolute z-10 top-[40%] left-[43%]  w-[45px] h-[45px] text-md border-2 flex bg-black/30  rounded-full  items-center justify-center `}>
                    <FaPlay className='text-white ' />
                </div>
            </div>

            <div className='bg-black w-[251px] h-[103px] translate-y-[-25px] text-white z-[1] p-[15px] flex flex-col gap-2 '>
                <p className='line-clamp-2 hover:text-custom-blue transition font-semibold'>{title}</p>
                <p className='text-gray-200 text-xs flex items-center gap-2 font-outfit'>Shane Doe <TbSquareRotatedFilled className='text-[7px] ' /> {date} </p>
            </div>
        </div>
    )
}

export default TrendingPostCard