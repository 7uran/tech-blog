import React from 'react'
import { TbSquareRotatedFilled } from 'react-icons/tb'

const PhoneTechCard = ({ type, title, img }) => {

    return (
        <>
            <div className='bg-post-card-image  relative  cursor-pointer  flex items-end'>
                <div className='relative rounded-xl overflow-hidden w-fit'>
                    <img className=' w-[404px] h-[304px] object-cover duration-500  transition ease-in-out' src={img} alt='' />
                </div>
                <div className='flex-col flex p-4 gap-4 absolute'>
                    <button className='bg-custom-teal text-white text-xs py-1 px-3 rounded-md font-semibold w-fit'>PHONES  </button>
                    <div className=' w-[95%] '>
                        <h1 className='box-decoration-clone leading-[1.85] text-xl font-semibold bg-black text-white p-1.5 inline'>
                            {title}
                        </h1>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-gray-200 font-outfit text-xs flex items-center gap-2'>Shane Doe <TbSquareRotatedFilled className='text-[7px]' />Jan 14,2021</p>
                    </div>
                </div>

            </div>
        </>


    )
}


export default PhoneTechCard