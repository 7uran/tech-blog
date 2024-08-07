
import React from 'react';
import ArticleCard from '../../components/ArticleCard';
import PostCard from '../../components/PostCard';
import PostCardSmall from '../../components/PostCardSmall';
import Ads from '../../components/Ads';
import EditorsPickCard from '../../components/EditorsPickCard';

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
            <ArticleCard type={"technology"} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/youssef-sarhan-tze1kKj7Lgg-unsplash-1-450x287.jpg"} title={"Schools, Parents Disagree over Bans on Student Mobile Phones "} />
            <ArticleCard type={"gadgets"} title={"PC Game Deals: Stealth Classic to Grab, Fresh VR Bundle & More"} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-sound-on-3761262-1-450x267.jpg"} />
            <ArticleCard type={"technology"} title={"Electric Car Owners to Pay Road Tax from 2025, Hunt Announces"} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_273724454_xl-2015-300x200.jpg"} />
            <ArticleCard type={"phones"} title={"Tackling Smartphone Addiction: Village Bans Mobiles for Minors"} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_378099058_xl-2015-1-450x270.jpg"} />
            <ArticleCard type={"technology"} title={"Epic Games Store Gives Away One of The Best VR Games"} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_286775054_xl-2015-1-450x196.jpg"} />
          </div>
        </div>

      </section>

      <section>
        <Ads />

      </section>
      <section>
        <div className='flex flex-col mt-5'>
          <div className=' flex items-center gap-8 py-8 '>
            <div className='border-y h-1 w-full'></div>
            <div className='font-extrabold text-[30px] font-outfit w-fit text-nowrap'>Editor's Picks</div>
            <div className='border-y h-1 w-full'></div>
          </div>

          <div className='flex justify-between'>
            <EditorsPickCard number={"1"} title={"Study: Earbuds Use, Youngsters at High Risk of Hearing Loss"} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/akhil-yerabati-Q2uV5TkjNz8-unsplash-450x255.jpg"} type={"gadgets"} />
            <EditorsPickCard number={"2"} title={"Telescope is Revealing the Galaxies of the Universe Like Never Before"} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/greg-rakozy-oMpAz-DN-9I-unsplash-450x300.jpg"} type={"technology"} />
            <EditorsPickCard number={"3"} title={"CarPlay Concept Shows Off a Modular UI Inspired by Next-Gen Design"} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_429887216_XL-1-450x289.jpg"} type={"phones"} />
            <EditorsPickCard number={"4"} title={"Latest Windows 11 Preview Build Finally Lets You Search for Copied Text"} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/sunrise-king-NK-cB-l1cv0-unsplash-1-450x271.jpg"} type={"technology"} />

          </div>
        </div>




      </section>

    </>
  );
};

export default HomePage;
