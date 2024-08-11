import React from 'react'
import GadgetCard from '../../components/GadgetCard'
import FooterCard from '../../components/FooterCard'
import { FaFacebookF, FaInstagram, FaRegEnvelope, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FaYoutube } from "react-icons/fa";
import EditorsPickCard from '../../components/EditorsPickCard'

const GadgetsPage = () => {
  return (
    <div className='py-10 max-w-[1260px] mx-auto'>
      <div className='flex flex-col gap-10'>
        <div className='font-outfit text-[13px] flex items-center gap-3 text-gray-400'>
          <span>Home</span>
          <span>»</span>
          <span>Category: "Gadgets"</span>
        </div>
        <div>
          <h1 className='font-outfit text-[19px] font-semibold inline-block px-3 py-1 border-l-custom-blue border-l-2'>BROWSING:GADGETS</h1>
        </div>
        <section>
          <div className='flex  justify-between'>
            <div className='flex flex-wrap w-[67%] gap-8  justify-between'>
              <GadgetCard rating={"8.9"} isHidden={false} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/surya-devarakonda-lnEM5jOu-mc-unsplash-450x300.jpg"} title={"DJI Avata Review: Immersive FPV Flying For Drone Enthusiasts"} />
              <GadgetCard rating={"8.9"} isHidden={false} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/omid-armin-gSZCLsE7ysc-unsplash-450x300.jpg"} title={"Bose QuietComfort Earbuds II: Noise-Cancellation Kings Reviewed"} />
              <GadgetCard isHidden={true} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2021/01/muhammad-faiz-zulkeflee-p-yGtLN-GKA-unsplash-1-450x450.jpg"} title={"Thousands Of PC Games Discounted In New Black Friday Sale"} />
              <GadgetCard isHidden={true} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2021/01/blaz-erzetic-ChSgE4K1iGY-unsplash-450x300.jpg"} title={"Could Solar-Powered Headphones Be The Next Must-Have?"} />
              <GadgetCard isHidden={true} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2021/01/pexels-dids-3657268-450x300.jpg"} title={"Take Your Photography to The Next Level with This Drone"} />
              <GadgetCard isHidden={true} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_286775054_xl-2015-1-450x196.jpg"} title={"Oculus Founder Makes a VR Headset That Can Literally Kill You"} />
              <GadgetCard rating={"85%"} isHidden={false} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_422797426_xl-2015-1-450x299.jpg"} title={"Braun Series 7 Electric Shaver Review: Quality at a Good Price"} />
              <GadgetCard rating={"85%"} isHidden={false} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_443469058_xl-2015-1-450x305.jpg"} title={"Google Pixel 7, iPhone 14 Compared: Check Out 5 Major Differences"} />
              <GadgetCard isHidden={true} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/laurens-derks-h0tMHMyfr9A-unsplash-450x298.jpg"} title={"Why Apple Should Skip The MacBook Pro Launch"} />
              <GadgetCard isHidden={true} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_430988634_xl-2015-4-450x313.jpg"} title={"Apollo G2J Showcases Electric Sports Car"} />

            </div>
            <div className='sticky top-10 h-fit w-[30%] flex flex-col gap-8'>
              <div>
                <img alt='' src='https://smartmag.theme-sphere.com/news-bulletin/wp-content/uploads/sites/26/2021/11/Smart-Woman.jpg' />
              </div>
              <div>
                <div>
                  <div>
                    <h2 class="font-extrabold  text-lg py-2 border-b">Top Posts</h2>
                    <FooterCard view={"7,792"} isOpen={true} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2021/01/kamil-s-SuPAbuuK7f4-unsplash-150x100.jpg"} title={"Popular New Xbox Game Pass Game Being Review Bombed With “0s”"} />

                    <FooterCard view={"6,914"} isOpen={true} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2021/01/jonathan-kemper-poSms2EzfNY-unsplash-150x100.jpg"} title={"Popular New Xbox Game Pass Game Being Review Bombed With “0s”"} />

                    <FooterCard view={"4,418"} isOpen={true} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2021/01/0247d91565b69ed9ddba4ec59ac97963-1-150x86.jpg"} title={"Warner Bros. Games Announces Mortal Kombat: Onslaught"} />
                  </div>
                  <div>
                    <h2 class="font-extrabold  text-lg py-2 border-b">Stay In Touch</h2>
                    <div className='p-6 flex-wrap flex justify-around gap-2'>
                      <div className='border cursor-pointer flex items-center px-3 py-2 hover:text-[#1A6DD4] transition gap-3  w-[131px] text-start  '  >
                        <FaFacebookF className='text-[#1A6DD4]' />
                        <div>
                          <p className='text-[13px] font-semibold'>1.1K</p>
                          <p className='text-[12px]'>Facebook</p>
                        </div>
                      </div>
                      <div className='border flex items-center px-3 py-2 gap-3 cursor-pointer hover:text-[#E4223E] transition  w-[131px] text-start  '  >
                        <FaYoutube
                          className='text-[#E4223E]' />
                        <div>
                          <p className='text-[13px] font-semibold'>105K</p>
                          <p className='text-[12px]'>Youtube</p>
                        </div>
                      </div>

                      <div className='border flex items-center px-3 py-2 gap-3 cursor-pointer hover:text-[#0088CC] transition  w-[131px] text-start  '  >
                        <FaTelegramPlane className='text-[#0088CC]' />
                        <div>
                          <p className='text-[13px] font-semibold'>Telegram</p>

                        </div>
                      </div>
                      <div className='border flex items-center px-3 py-2 gap-3 cursor-pointer hover:text-[#26C863] transition  w-[131px] text-start  '  >
                        <FaWhatsapp className='text-[#26C863]' />
                        <div>
                          <p className='text-[13px] font-semibold'>Whatsapp</p>

                        </div>
                      </div>
                      <div className='border flex  items-center px-3 py-2 gap-3 cursor-pointer hover:text-[#58ADEF] transition  w-[131px] text-start  '  >
                        <FaXTwitter className='text-[#58ADEF]' />
                        <div>
                          <p className='text-[13px] font-semibold'>68.9K</p>
                          <p className='text-[12px]'>Twitter</p>
                        </div>
                      </div>
                      <div className='border flex items-center px-3 py-2 gap-3 cursor-pointer hover:text-[#C13584] transition  w-[131px] text-start  '  >
                        <FaInstagram className='text-[#C13584]' />
                        <div>
                          <p className='text-[13px] font-semibold'>46.4K</p>
                          <p className='text-[12px]'>Instagram</p>
                        </div>
                      </div>

                    </div>
                    <div className='flex flex-col gap-2 items-center'>
                      <EditorsPickCard number={"1"} title={"Study: Earbuds Use, Youngsters at High Risk of Hearing Loss"} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/akhil-yerabati-Q2uV5TkjNz8-unsplash-450x255.jpg"} type={"gadgets"} />
                      <EditorsPickCard number={"2"} title={"Telescope is Revealing the Galaxies of the Universe Like Never Before"} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/greg-rakozy-oMpAz-DN-9I-unsplash-450x300.jpg"} type={"technology"} />
                      <EditorsPickCard number={"3"} title={"CarPlay Concept Shows Off a Modular UI Inspired by Next-Gen Design"} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_429887216_XL-1-450x289.jpg"} type={"phones"} />

                    </div>
                    <div className='flex justify-center '>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>

    </div>
  )
}

export default GadgetsPage