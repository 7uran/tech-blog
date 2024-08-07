import React from 'react'
import { GoClock } from "react-icons/go";

const ArticleCard = ({ type, title, img, }) => {
  const getTypeClassName = (type) => {
    switch (type.toLowerCase()) {
      case 'technology':
        return 'text-custom-blue';
      case 'phones':
        return 'text-custom-teal';
      case 'gadgets':
        return 'text-custom-purple';
      default:
        return 'text-gray-500';
    }
  };
  return (
    <div className='py-5 flex items-center  border-b cursor-pointer  '>
      <div className='flex flex-col gap-3'>
        <div>
          <h4 className={`text-xs font-outfit text-custom-blue font-semibold ${getTypeClassName(type)}`}>{type.toUpperCase()}</h4>
        </div>
        <div className=' max-w-[90%]'><p className='font-bold max-w-[90%] hover:text-custom-blue transition'>{title}</p></div>
        <div>

          <div className='flex text-xs font-outfit gap-4'>
            <p >Shane Doe</p>
            <p className='flex items-center gap-1 text-gray-400'><GoClock /> 6 Mins Read</p>
          </div>

        </div>
      </div>
      <div className=' '>
        <img className='hover:opacity-75  transition  w-[170px] h-[90px] shadow-lg object-cover rounded-full' alt='' src={img} />
      </div>


    </div >
  )
}

export default ArticleCard