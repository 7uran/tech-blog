
import React from 'react';
import ArticleCard from '../../components/ArticleCard';
import PostCard from '../../components/PostCard';
import PostCardSmall from '../../components/PostCardSmall';

const HomePage = () => {
  return (
    <>
      <section className='py-10'>
        <div className='flex justify-between w-full gap-10 '>
          <div className='flex flex-col gap-8 '>
            <div>
              <PostCard img={'https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_29247013_xl-2015-2-768x512.jpg'} type={"gadgets"} titleUp={"Save $25 on Philips Wired Headphone For A"} titleDown={"Great Sounding Over-Ear Headphone"} date={"Jan  12, 2020"} />
            </div>
            <div className='flex gap-10'>
              <PostCardSmall img={'https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/daniel-korpai-seLBnDRB6_M-unsplash-1-1-450x563.jpg'} type={"technology"} date={"Jan 11, 2020"} title={"Tablet PC Market to Witness Exponential Growth by 2028, Sources Say"} />
              <PostCardSmall img={'https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_245244020_xl-2015-2-450x332.jpg'} type={"technology"} date={"Jan 11, 2020"} title={"Microsoft Co-Founder Bill Gates Visits EU, Steers Clean Energy Talks"} />

            </div>
          </div>
          <div className=' w-full'>

            <h2 className='font-extrabold text-lg py-2 border-b'>People's Favorite</h2>
            <ArticleCard />

          </div>
        </div>

      </section>
    </>
  );
};

export default HomePage;
