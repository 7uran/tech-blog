import React from 'react'
import { TbSquareRotatedFilled } from 'react-icons/tb'

const EditorsPickCard = ({ type, img, title, number }) => {
    const getTypeClassName = (type) => {
        switch (type.toLowerCase()) {
            case 'technology':
                return 'bg-custom-blue';
            case 'phones':
                return 'bg-custom-teal';
            case 'gadgets':
                return 'bg-custom-purple';
            default:
                return 'bg-gray-500';
        }
    };
    return (
        <>
            <div className='w-[286px] h-[311px] flex flex-col gap-4'>
                <div className='relative'>
                    <img className=' rounded-xl shadow-lg object-cover w-[286px] h-[190px]' src={img} alt='' />
                    <div className={`absolute top-0 z-10  text-xs px-2 py-1 rounded-md font-outfit text-white font-semibold ${getTypeClassName(type)}`} ><p>{type.toUpperCase()}</p></div>
                </div>
                <div className='flex items-start '>
                    <div>
                        <p className='font-inter  text-gray-300 font-semibold text-4xl'>{number}</p></div>
                    <div className='px-4 flex flex-col gap-2 w-full '>
                        <p className='font-bold text-md font-inter'>{title}</p>
                        <p className='text-black text-xs font-semibold flex items-center gap-2'>Shane Doe <span className='flex items-center font-normal text-gray-400 gap-2'><TbSquareRotatedFilled className='text-[7px]' />Mar 15, 2020</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditorsPickCard