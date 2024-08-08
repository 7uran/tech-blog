
import React from 'react';
import ArticleCard from '../../components/ArticleCard';
import PostCard from '../../components/PostCard';
import PostCardSmall from '../../components/PostCardSmall';
import Ads from '../../components/Ads';
import EditorsPickCard from '../../components/EditorsPickCard';
import DoubleLine from '../../components/DoubleLine';
import TrendingArticleCard from '../../components/TrendingArticleCard';
import TrendingPostCard from '../../components/TrendingPostCard';
import { LiaAngleRightSolid } from "react-icons/lia";
import { TbSquareRotatedFilled } from 'react-icons/tb';

const HomePage = () => {
  return (
    <>
      <section className='py-10 max-w-[1260px] mx-auto'>
        <div className='flex justify-between w-full gap-10 '>
          <div className='flex flex-col gap-8 '>
            <div>
              <PostCard cardType={"standart"} img={'https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_29247013_xl-2015-2-768x512.jpg'} type={"gadgets"} titleUp={"Save $25 on Philips Wired Headphone For A"} titleDown={"Great Sounding Over-Ear Headphone"} date={"Jan  12, 2020"} />
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

      <section className='max-w-[1260px] mx-auto'>
        <Ads />

      </section>
      <section className='max-w-[1260px] mx-auto'>
        <div className='flex flex-col mt-5'>
          <div className=' flex items-center gap-8 py-8 '>
            <DoubleLine />
            <div className='font-extrabold text-[30px] font-outfit w-fit text-nowrap'>Editor's Picks</div>
            <DoubleLine />
          </div>

          <div className='flex justify-between'>
            <EditorsPickCard number={"1"} title={"Study: Earbuds Use, Youngsters at High Risk of Hearing Loss"} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/akhil-yerabati-Q2uV5TkjNz8-unsplash-450x255.jpg"} type={"gadgets"} />
            <EditorsPickCard number={"2"} title={"Telescope is Revealing the Galaxies of the Universe Like Never Before"} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/greg-rakozy-oMpAz-DN-9I-unsplash-450x300.jpg"} type={"technology"} />
            <EditorsPickCard number={"3"} title={"CarPlay Concept Shows Off a Modular UI Inspired by Next-Gen Design"} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_429887216_XL-1-450x289.jpg"} type={"phones"} />
            <EditorsPickCard number={"4"} title={"Latest Windows 11 Preview Build Finally Lets You Search for Copied Text"} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/sunrise-king-NK-cB-l1cv0-unsplash-1-450x271.jpg"} type={"technology"} />

          </div>
        </div>
      </section>
      <section className='bg-custom-gradient mt-14  '>
        <div className='max-w-[1260px] mx-auto flex flex-col'>
          <div className='flex items-center gap-6 py-14'>
            <h1 className='text-white font-outfit text-2xl font-semibold text-nowrap '>Trending Videos</h1>
            <DoubleLine color={"border-gray-700"} />
          </div>
          <div className='flex flex-col gap-10'>
            <div className=' flex justify-between  '>
              <div>
                <PostCard cardType={"video"} type={"gadgets"} titleUp={"Soundcore VR Gaming Earbuds Designed for "} titleDown={"Meta Quest 2 Launched"} date={"Sep  20, 2020"} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/sajad-nori-CeyE899Q73Y-unsplash-768x512.jpg"} />
              </div>
              <div className='flex flex-col justify-around'>
                <TrendingArticleCard img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-leon-3636001-2-300x200.jpg"} title={"Photography: Save $800 on a Fujifilm Camera Before Black Friday"} date={"Sep 12, 2020"} />
                <TrendingArticleCard title={"Wireless Earbuds May Help Amplify Sound for People with Hearing Loss"} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/jerin-john-Smbz6GQt_CI-unsplash-2-300x176.jpg"} date={"Sep 11, 2020"} />
                <TrendingArticleCard title={"Google Play Store Will Ask You to Update Apps if they Crash"} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/freestocks-hRVrvH9-dG0-unsplash-1-300x200.jpg"} date={"Sep 10, 2020"} />
                <TrendingArticleCard title={"Does The Budget-Friendly PICO 4 VR Headset Live Up To The Hype?"} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/light-fun-technology-neon-woman-enjoy-headset-happy-virtual-vr_t20_zWNmJX-1-300x201.jpg"} date={"Sep 9, 2020"} />
              </div>
            </div>
            <div className='flex items-center justify-between '>
              <TrendingPostCard title={"Leaf Headphones: Here are Some of The Best Devices from This Brand"} date={"Sep  17, 2020"} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/billy-freeman-yk-jzxSIk90-unsplash-450x253.jpg"} />
              <TrendingPostCard title={"A Piece of The Wrecked 1986 Challenger Space Shuttle was Found"} date={"Sep  15, 2020"} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/nasa-Zzc0vZE2JZI-unsplash-450x350.jpg"} />
              <TrendingPostCard title={"Security Cameras Make Us Feel Safe, but Are They Worth the Invasion?"} date={"Sep  14, 2020"} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_314150492_xl-2015-1-768x361.jpg"} />
              <TrendingPostCard title={"This Bedside Table Lamp Will Light Up Your World (Like Nobody Else)"} date={"Sep  13, 2020"} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pragyan-goswami-GziKHv-3lVc-unsplash-450x315.jpg"} />
            </div>
          </div>
          <div>
          </div>
        </div>
      </section>

      <section>
        <div className='max-w-[1260px] mx-auto  mt-10 flex flex-col  '>
          <div className='w-[70%]'>
            <div className='flex items-center gap-6 '>
              <h1 className='text-nowrap font-bold font-outfit text-[22px]'>New Gadgets</h1>
              <DoubleLine color={"border-gray-300"} />
              <button className='flex items-center text-xs text-gray-400 font-semibold text-nowrap rounded-xl border py-1 px-2'>See all <LiaAngleRightSolid /> </button>
            </div>
            <div className='py-6 flex gap-8 items-center'>
              <div className='relative '>
                <img className='w-[424px] h-[282px] object-cover rounded-xl' src='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_286775054_xl-2015-1-768x334.jpg' alt='' />
                <div className={`absolute bottom-0 z-10  text-xs px-2 py-1 rounded-md font-outfit bg-custom-purple text-white font-semibold `} ><p>GADGETS</p></div>
              </div>
              <div className='w-[399px] flex flex-col gap-4'>
                <h1 className='font-bold text-[22px]'>Oculus Founder Makes a VR Headset That Can Literally Kill You</h1>
                <div className='flex items-center gap-2'>
                  <img className='w-5 h-5 rounded-full' src='https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg' alt='' />
                  <p className='text-gray-600 font-outfit text-xs flex items-center gap-2'>Shane Doe <TbSquareRotatedFilled className='text-[7px]' />Jan 13, 2021</p>
                </div>
                <p className='text-[14px] text-gray-500'>To understand the new smart watched and other pro devices of recent focus, we should…</p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </>
  );
};

export default HomePage;
