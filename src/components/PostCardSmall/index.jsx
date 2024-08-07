import React from 'react';
import { TbSquareRotatedFilled } from 'react-icons/tb';

const PostCardSmall = ({ img, type, title, date }) => {

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
        <div className='shadow-lg w-[411px] h-[363px] rounded-xl overflow-hidden cursor-pointer'>
            <div className='relative overflow-hidden shadow-md rounded-xl'>
                <img
                    className='object-cover w-full h-[228px] rounded-xl hover:opacity-75 transition duration-500'
                    src={img}
                    alt={title}
                />
                <div className={`absolute bottom-[-1px] left-8 text-white text-xs font-semibold py-1 px-3 font-outfit rounded-md ${getTypeClassName(type)}`}>
                    {type.toUpperCase()}
                </div>
            </div>
            <div className='p-7 font-semibold text-lg flex flex-col gap-3'>
                <h1 className='hover:text-custom-blue transition'>{title}</h1>
                <p className='text-gray-500 text-xs flex items-center gap-2'>
                    Shane Doe <TbSquareRotatedFilled className='text-[7px]' /> {date}
                </p>
            </div>
        </div>
    );
}

export default PostCardSmall;
