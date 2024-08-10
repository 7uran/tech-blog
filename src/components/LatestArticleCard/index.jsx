import React from 'react'
import { TbSquareRotatedFilled } from 'react-icons/tb'
import { getTypeBg } from '../../functions'

const LatestArticleCard = ({ img, title, type }) => {
    return (
        <div className='w-[854px] h-[234px] flex gap-10 my-8  border rounded-xl shadow-lg'>
            <div className='relative '>
                <img className='cursor-pointer hover:opacity-75 transition w-[304px] h-[234px] object-cover rounded-xl shadow-lg' src={img} alt='' />
                <div className={`absolute bottom-0 ${getTypeBg(type)}  w-fit text-white text-xs font-semibold py-1 px-3 font-outfit rounded-md`} >{type.toUpperCase()}</div>
            </div>
            <div className='w-[55%] flex  flex-col gap-2 justify-center'>
                <h1 className='text-[21px] font-semibold hover:text-custom-blue transition cursor-pointer'>{title}</h1>
                <div className='flex items-center gap-2'>
                    <img className='w-5 h-5 rounded-full' src='https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg' alt='' />
                    <p className='text-gray-600 font-outfit text-xs flex items-center gap-2'>Shane Doe <TbSquareRotatedFilled className='text-[7px]' />Nov 19,2021</p>
                </div>
                <p className='text-[14px] text-gray-700'>To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the quantified…</p>
            </div>
        </div>
    )
}

export default LatestArticleCard