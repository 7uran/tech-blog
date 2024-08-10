import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import FooterCard from '../../components/FooterCard';

const Footer = () => {
    return (
        <footer className=' bg-black text-white border-t-4 mt-10'>
            <div className=' bg-[#0F0F11] py-10'>
                <div className='container mx-auto max-w-[1260px] flex gap-10 '>
                    <div className='flex flex-col'>
                        <h2 className='text-[15px] font-outfit font-bold'>MOST POPULAR   </h2>

                        <FooterCard view={"7,792"} isOpen={true} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2021/01/kamil-s-SuPAbuuK7f4-unsplash-150x100.jpg"} title={"Popular New Xbox Game Pass Game Being Review Bombed With “0s”"} />

                        <FooterCard view={"6,914"} isOpen={true} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2021/01/jonathan-kemper-poSms2EzfNY-unsplash-150x100.jpg"} title={"Popular New Xbox Game Pass Game Being Review Bombed With “0s”"} />

                        <FooterCard view={"4,418"} isOpen={true} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2021/01/0247d91565b69ed9ddba4ec59ac97963-1-150x86.jpg"} title={"Warner Bros. Games Announces Mortal Kombat: Onslaught"} />
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='text-[15px] font-outfit font-bold'>OUR PICKS   </h2>

                        <FooterCard isOpen={false} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/thisisengineering-raeng-a7A9O5htrKs-unsplash-150x100.jpg"} title={"Game Development This Week: Save On Essential Tools and More"} />

                        <FooterCard isOpen={false} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_242235046_xl-2015-1-150x85.jpg"} title={"Is the Hyperloop Doomed? What Elon Musk’s Latest Setback Really Means"} />

                        <FooterCard isOpen={false} img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/remy_loz-3vVzdb8KKIw-unsplash-150x100.jpg"} title={"The Best Early Black Friday Deals on Gaming Laptops and Accessories"} />
                    </div>
                    <div className=' flex items-center justify-center flex-col  gap-4 bg-black  w-[346px] h-[367px]'>
                        <h2 className='font-bold font-outfit text-[24px]'>Subscribe to Updates</h2>
                        <p className='text-[14px] text-center px-10'>Get the latest creative news from FooBar about art, design and business.</p>
                        <div className='flex flex-col items-center gap-4'>
                            <input type="text" className='bg-[#1A1A1A] text-center w-[255px] border-none h-[42px]  rounded-sm text-sm' placeholder='Your email adress..'></input>
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
            <div className='container mx-auto max-w-[1260px] flex flex-col py-14 justify-center '>

                <div className='flex flex-col items-center gap-6'>
                    <div className='flex items-center gap-2'>
                        <button className='hover:text-custom-blue transition text-xl bg-[#232323] w-10 h-10 rounded-full flex items-center justify-center'><FaFacebookF /></button>
                        <button className='hover:text-custom-blue transition text-xl bg-[#232323] w-10 h-10 rounded-full flex items-center justify-center'><FaXTwitter /></button>
                        <button className='hover:text-custom-blue transition text-xl bg-[#232323] w-10 h-10 rounded-full flex items-center justify-center'><FaInstagram /></button>
                        <button className='hover:text-custom-blue transition text-xl bg-[#232323] w-10 h-10 rounded-full flex items-center justify-center'><FaPinterestP /></button>
                    </div>
                    <div className='flex items-center gap-5 font-semibold text-[14px]' >
                        <p className='hover:text-gray-400 cursor-pointer transition'>HOME</p>
                        <p className='hover:text-gray-400 cursor-pointer transition'>PHONES</p>
                        <p className='hover:text-gray-400 cursor-pointer transition'>ABOUT</p>
                        <p className='hover:text-gray-400 cursor-pointer transition'>CONTACTS</p>
                    </div>
                    <div className='flex text-sm gap-1'><p className='text-gray-500'>© 2024 ThemeSphere. Designed by </p><p className='text-gray-300'> ThemeSphere.</p></div>
                </div>

            </div>
        </footer>
    )
}

export default Footer