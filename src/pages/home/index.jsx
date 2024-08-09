
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
import PhoneTechCard from '../../components/PhoneTechCard';
import NewsCard from '../../components/NewsCard';
import { FaRegEnvelope } from "react-icons/fa6";
import PopularNowCard from '../../components/PopularNowCard';
import FeaturedCard from '../../components/FeaturedCard';

const HomePage = () => {
  return (
    <>
      <section className='py-10 max-w-[1260px] mx-auto'>
        <div className='flex justify-between w-full gap-10 '>
          <div className='flex flex-col gap-8 '>
            <div>
              <PostCard cardType={"standart"} img={'https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_29247013_xl-2015-2-768x512.jpg'} type={"gadgets"} title={"Save $25 on Philips Wired Headphone For A Great Sounding Over-Ear Headphone"} date={"Jan  12, 2020"} />
            </div>
            <div className='flex gap-10'>
              <PostCardSmall img={'https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/daniel-korpai-seLBnDRB6_M-unsplash-1-1-450x563.jpg'} type={"technology"} date={"Jan 11, 2020"} title={"Tablet PC Market to Witness Exponential Growth by 2028, Sources Say"} />
              <PostCardSmall img={'https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_245244020_xl-2015-2-450x332.jpg'} type={"technology"} date={"Jan 11, 2020"} title={"Microsoft Co-Founder Bill Gates Visits EU, Steers Clean Energy Talks"} />

            </div>
          </div>
          <div className=' w-full'>

            <h2 className='font-extrabold  text-lg py-2 border-b'>People's Favorite</h2>
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
          <div className='flex items-center gap-6 py-7 mt-10'>
            <h1 className='text-white font-outfit text-2xl font-semibold text-nowrap '>Trending Videos</h1>
            <DoubleLine color={"border-gray-700"} />
          </div>
          <div className='flex flex-col gap-10'>
            <div className=' flex justify-between  '>
              <div>
                <PostCard cardType={"video"} type={"gadgets"} title={"Soundcore VR Gaming Earbuds Designed for Meta Quest 2 Launched "} date={"Sep  20, 2020"} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/sajad-nori-CeyE899Q73Y-unsplash-768x512.jpg"} />
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
      <div className='max-w-[1260px] mx-auto  flex  '>
        <div>
          <section>
            <div className='w-fit mx-auto mt-10   '>
              <div className='w-[97%]'>
                <div className='flex items-center gap-6 '>
                  <h1 className='text-nowrap font-bold font-outfit text-[22px]'>New Gadgets</h1>
                  <DoubleLine color={"border-gray-300"} />
                  <button className='flex items-center text-xs text-gray-400 font-semibold text-nowrap rounded-xl border py-1 px-3 hover:text-black transition'>See all <LiaAngleRightSolid /> </button>
                </div>
                <div className='py-6 flex gap-6 items-center'>
                  <div className='relative '>
                    <img className='hover:opacity-75 transition duration-500 cursor-pointer w-[424px] h-[282px] object-cover rounded-xl' src='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_286775054_xl-2015-1-768x334.jpg' alt='' />
                    <div className={`absolute bottom-0 z-10  text-xs px-2 py-1 rounded-md font-outfit bg-custom-purple text-white font-semibold `} ><p>GADGETS</p></div>
                  </div>
                  <div className='w-[399px] flex flex-col gap-4'>
                    <h1 className='font-bold text-[22px] cursor-pointer transition hover:text-custom-blue'>Oculus Founder Makes a VR Headset That Can Literally Kill You</h1>
                    <div className='flex items-center gap-2'>
                      <img className='w-5 h-5 rounded-full' src='https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg' alt='' />
                      <p className='text-gray-600 font-outfit text-xs flex items-center gap-2'>Shane Doe <TbSquareRotatedFilled className='text-[7px]' />Jan 13, 2021</p>
                    </div>
                    <p className='text-[14px] text-gray-500'>To understand the new smart watched and other pro devices of recent focus, we should…</p>
                    <span className='text-custom-blue py-0.5 border-b-gray-100 text-sm border-b-2 w-fit cursor-pointer'>Read More</span>
                  </div>
                </div>

                <div className='mt-3 flex flex-row  flex-wrap gap-10'>
                  <NewsCard img="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_422797426_xl-2015-1-300x199.jpg" title="Braun Series 7 Electric Shaver Review: Quality at a Good Price" />
                  <NewsCard img="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_443469058_xl-2015-1-300x203.jpg" title="Google Pixel 7, iPhone 14 Compared: Check Out 5 Major Differences" />
                  <NewsCard img="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/laurens-derks-h0tMHMyfr9A-unsplash-300x199.jpg" title="Why Apple Should Skip The MacBook Pro Launch" />
                  <NewsCard img="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_430988634_xl-2015-4-300x208.jpg" title="Apollo G2J Showcases Electric Sports Car" />
                  <NewsCard img="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/youssef-sarhan-tze1kKj7Lgg-unsplash-1-450x287.jpg" title="The Famous Dyson Bladeless Fan is On Sale at Walmart" />
                  <NewsCard img="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/light-fun-technology-neon-woman-enjoy-headset-happy-virtual-vr_t20_zWNmJX-1-300x201.jpg" title="Best Luxury Hotels In Bogotá 2022" />
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className='max-w-[1260px] mx-auto  mt-10 flex justify-between  '>
              <div className='w-[97%] flex flex-col gap-6'>
                <div className='flex items-center gap-6 '>
                  <h1 className='text-nowrap font-bold font-outfit text-[22px]'>Phones & Tech</h1>
                  <DoubleLine color={"border-gray-300"} />
                  <button className='flex items-center text-xs text-gray-400 font-semibold text-nowrap rounded-xl border py-1 px-3 hover:text-black transition'>See all <LiaAngleRightSolid /> </button>
                </div>
                <div className='flex justify-between'>
                  <PhoneTechCard img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_352742574_xl-2015-1-450x300.jpg"} title={"Google Says Surveillance Vendor Targeted Samsung Phones"} />
                  <PhoneTechCard img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/sahej-brar-6Pg2e3W1KDY-unsplash-450x450.jpg"} title={"Why Are iPhones More Expensive Than Android Phones?"} />
                </div>
                <div className='flex flex-wrap gap-10'>
                  <NewsCard title={"The Pros of Buying a Used/Refurbished iPhone 11"} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/omid-armin-fxJIHyWTRu4-unsplash-300x201.jpg"} />
                  <NewsCard title={"OnePlus Will Focus on a Premium Build Over Camera Performance"} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/vinit-vispute-enqYaZPSDjQ-unsplash-300x200.jpg"} />
                  <NewsCard title={"These OnePlus Phones Are Getting Stable Android 13 Update"} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/omid-armin-2ZgdviaHOkc-unsplash-2-267x300.jpg"} />
                  <NewsCard title={"The Best Wireless Earbuds for the Samsung Galaxy S22 in 2022"} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/ivan-shilov-D24B2DiV0sY-unsplash-300x200.jpg"} />
                  <NewsCard title={"Huawei Phones are Moving Forward Without Google Mobile Services"} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/omid-armin-mP4sfCCoTrI-unsplash-1-181x300.jpg"} />
                  <NewsCard title={"Redmi Series Launched With 200MP Camera and a Fast Charging"} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/mark-chan-489jbTi51sg-unsplash-300x169.jpg"} />
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className='flex flex-col gap-8 sticky top-10 h-fit mt-20'>
          <div className='border rounded-lg flex flex-col items-center h-[388px] w-[322px] shadow-md'>
            <div className='flex justify-center  w-full translate-y-[-30px]'>
              <div className='bg-custom-blue w-fit rounded-full flex items-center  p-4'>
                <FaRegEnvelope className='text-3xl text-white' />
              </div>
            </div>
            <div className=' flex items-center flex-col  gap-4'>
              <h2 className='font-bold font-outfit text-[24px]'>Subscribe to Updates</h2>
              <p className='text-[14px] text-center px-10'>Get the latest creative news from FooBar about art, design and business.</p>
              <div className='flex flex-col items-center gap-4'>
                <input type="text" className='text-center w-[255px] focus:border-gray-200 h-[42px] border rounded-sm text-sm' placeholder='Your email adress..'></input>
                <button className='bg-custom-blue w-full py-3 font-outfit text-white text-xs font-bold'>
                  SUBSCRIBE
                </button>
              </div>
              <div className='px-8'>
                <input type="checkbox"></input>
                <span className='text-[13px] text-gray-400'> By signing up, you agree to the our terms and our Privacy Policy agreement.</span>
              </div>

            </div>
          </div>

          <div className='flex flex-col gap-6'>
            <h2 className='font-extrabold  text-lg py-2 border-b'>Popular Now</h2>
            <PopularNowCard num={"1"} title={"Popular New Xbox Game Pass Game Being Review Bombed With “0s”"} view={"7,792"} />
            <PopularNowCard num={"2"} title={"Samsung is Developing Bright MicroLED on Displays for AR Headsets"} view={"6,914"} />
            <PopularNowCard num={"3"} title={"Warner Bros. Games Announces Mortal Kombat: Onslaught"} view={"4,418"} />
            <PopularNowCard num={"4"} title={"Super League Gaming now Publisher of Roblox Anime Battlegrounds"} view={"1,013"} />
            <PopularNowCard num={"5"} title={"Hologate Announces New Plans for First Large Format World VR Arcade"} view={"798"} />

          </div>


        </div>

      </div>

      <section className='py-12'>
        <Ads />
      </section>

      <section className='max-w-[1260px] mx-auto  '>

        <div className=' flex items-center gap-8 py-8 '>
          <DoubleLine />
          <div className='font-extrabold text-[30px] font-outfit w-fit text-nowrap'>Featured Reviews</div>
          <DoubleLine />
        </div>

        <div className='h-[423px] flex justify-between bg-custom-gradient rounded-lg'>
          <div className='px-10 my-auto flex flex-col gap-4  w-[47%]'>
            <div className='bg-custom-pink w-fit text-white text-xs font-semibold py-1 px-3 font-outfit rounded-md'>GAMING</div>
            <h2 className='text-white text-[27px] font-bold cursor-pointer hover:text-custom-blue transition'>Pico 4 Review: Should You Actually Buy One Instead Of Quest 2?</h2>
            <div className='flex items-center gap-2'>
              <img className='w-5 h-5 rounded-full' src='https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg' alt='' />
              <p className='text-gray-200 font-outfit text-xs flex items-center gap-2'>Shane Doe <TbSquareRotatedFilled className='text-[7px]' />Jan 15,2021</p>
            </div>
            <p className='text-[14px] text-gray-300  '>To understand the new smart watched and other pro devices of recent focus, we should look to…</p>
          </div>
          <div className='relative cursor-pointer '>
            <img className='rounded-lg h-full  object-cover' src='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/woman-in-3d-virtual-reality-glasses_t20_WQVvL4-768x513.jpg' alt='' />
            <div className='absolute text-white top-2 right-2 border-[3px] text-xs font-semibold flex items-center justify-center border-custom-blue rounded-full w-[45px] h-[45px]'>85%</div>
          </div>
        </div>

        <div className='mt-10 flex justify-between'>
          <FeaturedCard type={"technology"} rating={"8.1"} title={"A Review of the Venus Optics Argus 18mm f/0.95 MFT APO Lens"} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-leon-3636001-2-450x300.jpg"} />
          <FeaturedCard type={"gadgets"} rating={"8.9"} title={"DJI Avata Review: Immersive FPV Flying For Drone Enthusiasts"} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/surya-devarakonda-lnEM5jOu-mc-unsplash-450x300.jpg"} />
          <FeaturedCard type={"gadgets"} rating={"8.9"} title={"Bose QuietComfort Earbuds II: Noise-Cancellation Kings Reviewed"} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/omid-armin-gSZCLsE7ysc-unsplash-450x300.jpg"} />
          <FeaturedCard type={"technology"} rating={"81%"} title={"AMD Ryzen 9 7900X Review: Zen 4 Has a Pricing Problem"} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/42996726655_0df7830ab6_b-1-450x253.jpg"} />
        </div>

      </section>
    </>
  );
};

export default HomePage;
