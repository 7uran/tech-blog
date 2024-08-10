import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button
                onClick={toggleSidebar}
                className="text-center"
                type="button"
                aria-controls="drawer-navigation"
            >
                <IoMenu className='text-3xl' />
            </button>


            {isOpen && (
                <div
                    onClick={toggleSidebar}
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                />
            )}


            <div
                className={`fixed top-0 left-0 z-50 w-[370px] h-screen p-4 overflow-y-auto transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} bg-black`}
                tabIndex="-1"
                aria-labelledby="drawer-navigation-label"
            >

                <button
                    type="button"
                    onClick={toggleSidebar}
                    aria-controls="drawer-navigation"
                    className="text-white bg-[#444444] text-xs p-1 absolute top-0 right-0 inline-flex items-center"
                >
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>

                </button>
                <div className="py-4 overflow-y-auto flex items-center gap-12  flex-col">
                    <img className='w-[207px]' src='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/techblog-logo-dark@2x.png' />
                    <div className=' flex items-center justify-center flex-col  gap-4 bg-black  w-[297px] h-[425px] border rounded-xl'>
                        <h2 className='font-bold font-outfit text-[24px] text-white'>Subscribe to Updates</h2>
                        <p className='text-[14px] text-center px-10 text-white'>Get the latest creative news from FooBar about art, design and business.</p>
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
        </>
    );
}

export default Sidebar;
