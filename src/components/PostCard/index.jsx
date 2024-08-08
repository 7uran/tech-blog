import React from 'react'
import { TbSquareRotatedFilled } from "react-icons/tb";
import { FaPlay } from "react-icons/fa";
import { getCardType, getTypeForWidth } from '../../functions';

const PostCard = ({ type, cardType, title, date, img }) => {

    return (
        <>
            <div className={`bg-post-card-image ${getTypeForWidth(cardType)}  group relative  cursor-pointer  flex items-end`}>
                <div className='relative rounded-xl overflow-hidden'>
                    <img className={`${getTypeForWidth(cardType)} group-hover:scale-[1.05] object-cover duration-500  transition ease-in-out`} src={img} alt='' /></div>
                <div className='flex-col flex p-6 gap-4 absolute'>
                    <button className='bg-custom-purple text-white text-xs py-1 px-3 rounded-md font-semibold w-fit'>{type.toUpperCase()}  </button>
                    <div className='  w-[88%] '>
                        <h1 className='box-decoration-clone	 leading-[1.85] text-3xl font-semibold bg-black text-white w-fit p-2  inline'>{title}</h1>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img className='w-5 h-5 rounded-full' src='https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg' alt='' />
                        <p className='text-gray-200 font-outfit text-xs flex items-center gap-2'>Shane Doe <TbSquareRotatedFilled className='text-[7px]' />{date}</p>
                    </div>
                </div>
                <div className={` absolute z-10 top-[45%] left-[48%] right-[50%] w-[60px] h-[60px] text-xl  border-2 rounded-full  items-center justify-center ${getCardType(cardType)} `}>

                    <FaPlay className='text-white ' />

                </div>
            </div>
        </>


    )
}

export default PostCard