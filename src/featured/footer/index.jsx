import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=' bg-black text-white'>
            <div className='container mx-auto max-w-[1260px] flex  py-14 justify-center '>
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