import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { TbSquareRotatedFilled } from 'react-icons/tb'

const TrendingArticleCard = ({ date, img, title }) => {
    return (
        <div className='relative text-white flex items-center gap-8 cursor-pointer'>
            <div className='max-w-[257px] flex flex-col gap-4 '>
                <h3 className='line-clamp-2 hover:text-custom-blue transition   font-semibold'>{title}</h3>
                <p className='text-gray-200 text-xs flex items-center gap-2 font-outfit'>Shane Doe <TbSquareRotatedFilled className='text-[7px] ' />{date}</p>
            </div>
            <div className='relative'>
                <img className='rounded-xl w-[123px] h-[82px]' src={img} alt='' />
                <div className={` absolute z-10 top-[35%] left-[35%]  w-[30px] h-[30px] text-xs flex bg-black/30  border rounded-full  items-center justify-center `}>
                    <FaPlay className='text-white ' />
                </div>
            </div>

        </div>
    )
}

export default TrendingArticleCard