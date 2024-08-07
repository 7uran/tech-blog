import React, { useState } from 'react';
import { TfiAngleDown } from "react-icons/tfi";
import { BiMoon } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState('Home');
  const navigate = useNavigate();

  const handleMenuClick = (menuName, path) => {
    setActiveMenu(menuName);
    navigate(path);
  };

  return (
    <header className='bg-gray-50 h-[68px] flex items-center font-outfit shadow-lg'>
      <div className='flex items-center justify-between container mx-auto max-w-[1260px]'>
        <div className='flex items-center gap-12'>
          <div className='flex items-center gap-2'>
            <Sidebar/>
            <img src='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/1techblog-logo.png' alt='logo' />
          </div>
          <div className='flex'>
            <ul className='flex items-center gap-6 font-semibold'>
              <li
                className={`cursor-pointer transition hover:border-b-custom-blue border-b-2 border-b-transparent py-5 flex items-center ${activeMenu === 'Home' ? 'border-b-custom-blue' : ''}`}
                onClick={() => handleMenuClick('Home', '/')}
              >
                Home
              </li>
              <li
                className={`cursor-pointer transition hover:border-b-custom-blue border-b-2 border-b-transparent flex items-center py-5 gap-2 ${activeMenu === 'Features' ? 'border-b-custom-blue' : ''}`}
                onClick={() => handleMenuClick('Features', '')}
              >
                Features <TfiAngleDown className='text-[10px] text-custom-blue ' />
              </li>
              <li
                className={`cursor-pointer transition hover:border-b-custom-blue border-b-2 border-b-transparent flex items-center py-5 gap-2 ${activeMenu === 'Technology' ? 'border-b-custom-blue' : ''}`}
                onClick={() => handleMenuClick('Technology', '')}
              >
                Technology <TfiAngleDown className='text-[10px] text-custom-blue ' />
              </li>
              <li
                className={`cursor-pointer transition hover:border-b-custom-blue border-b-2 border-b-transparent flex items-center py-5 ${activeMenu === 'Gadgets' ? 'border-b-custom-blue' : ''}`}
                onClick={() => handleMenuClick('Gadgets', '/gadgets')}
              >
                Gadgets
              </li>
              <li
                className={`cursor-pointer transition hover:border-b-custom-blue border-b-2 border-b-transparent flex items-center py-5 gap-2 ${activeMenu === 'Phones' ? 'border-b-custom-blue' : ''}`}
                onClick={() => handleMenuClick('Phones', '')}
              >
                Phones <TfiAngleDown className='text-[10px] text-custom-blue ' />
              </li>
            </ul>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <button className='bg-custom-blue text-white rounded-md px-4 py-2 text-xs font-bold'>
            SUBSCRIBE
          </button>
          <BiMoon className='text-xl' />
          <IoSearch className='text-xl' />
        </div>
      </div>
    </header>
  );
}

export default Header;
