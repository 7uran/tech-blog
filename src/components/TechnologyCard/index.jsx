import React from 'react'

const TechnologyCard = ({ title, img }) => {
    return (
        <div className='w-[206px] h-[224px]  flex flex-col gap-2'>
            <div>
                <img className='w-[206px] h-[116px] object-cover rounded-xl shadow-xl ' src={img} alt='' />
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-[15px] hover:text-custom-blue transition cursor-pointer'>{title}</h1>
                <p className='font-outfit text-[12px] text-gray-400'>Mar 10,2022</p>
            </div>
        </div>
    )
}

export default TechnologyCard