import React from 'react'

const ArticleCard = () => {
  return (
    <div className='py-2 flex items-center '>
      <div>
        <div><h4 className='text-xs font-outfit text-custom-blue font-semibold'>TECHNOLOGY</h4></div>
        <div><p className='font-bold max-w-[90%]'>Schools, Parents Disagree over Bans on Student Mobile Phones</p></div>
      </div>
      <div className='  '>
        <img className='w-[90px] h-[90px] rounded-full' src='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/youssef-sarhan-tze1kKj7Lgg-unsplash-1-450x287.jpg' />
      </div>


    </div>
  )
}

export default ArticleCard