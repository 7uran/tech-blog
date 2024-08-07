import React from 'react'
import { TbSquareRotatedFilled } from "react-icons/tb";
const PostCard = ({ type, titleUp, titleDown, date, img }) => {
    return (
        <>
            <div className='bg-post-card-image w-[858px] h-[480px]  cursor-pointer  flex items-end'>
                <div className='relative rounded-xl overflow-hidden'>
                    <img className='w-[858px]  h-[480px] hover:scale-[1.05] object-cover duration-500  transition ease-in-out' src={img} alt='' /></div>
                <div className='flex-col flex p-6 gap-4 absolute'>
                    <button className='bg-custom-purple text-white text-xs py-1 px-3 rounded-md font-semibold w-fit'>{type.toUpperCase()}  </button>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-3xl font-semibold bg-black text-white  w-fit p-2 flex items-center'>{titleUp}</h1>
                        <h1 className='text-3xl font-semibold bg-black text-white  w-fit  p-2 flex items-center'>{titleDown}</h1>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img className='w-5 h-5 rounded-full' src='https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg' alt='' />
                        <p className='text-gray-200 text-xs flex items-center gap-2'>Shane Doe <TbSquareRotatedFilled className='text-[7px]' />{date}</p>
                    </div>
                </div>

            </div>
        </>


    )
}

export default PostCard