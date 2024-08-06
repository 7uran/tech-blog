import React from 'react'
import { TbSquareRotatedFilled } from "react-icons/tb";
const PostCard = ({ type,titleUp,titleDown,date}) => {
    return (
        <div>
            <div className='bg-post-card-image w-[858px] h-[480px] rounded-lg bg-no-repeat bg-center bg-cover flex items-end'>
                <div className='flex-col flex p-6 gap-4'>
                    <button className='bg-custom-purple text-white text-xs py-1 px-3 rounded-md font-semibold w-fit'>{type.toUpperCase()}  </button>
                    <div className='flex flex-col gap-1'>    <h1 className='text-3xl font-semibold bg-black text-white inline w-fit '>{titleUp}</h1>
                        <h1 className='text-3xl font-semibold bg-black text-white inline w-fit '>{titleDown}</h1>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img className='w-5 h-5 rounded-full' src='https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg' alt='' />
                        <p className='text-gray-200 text-xs flex items-center gap-2'>Shane Doe <TbSquareRotatedFilled className='text-[7px]' />{date}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PostCard