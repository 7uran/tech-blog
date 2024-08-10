import React, { useState } from 'react';
import { TfiAngleDown } from "react-icons/tfi";
import { BiMoon } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import TechnologyCard from '../../components/TechnologyCard';

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
            <Sidebar />
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
              <div className="relative group">
                <Link className="text-black   cursor-pointer">
                  <p className='flex items-center  py-[25%] group-hover:border-b-2 border-b-custom-blue '>Technology <TfiAngleDown className='text-[10px] text-custom-blue ' />
                  </p>
                </Link>
                <div className="z-50 absolute transform-translate-y-[50%] transform -translate-x-[47%] top-full p-4 w-[1260px] flex justify-between bg-white shadow-lg  ml-[135%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                  <TechnologyCard img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_242235046_xl-2015-1-450x256.jpg"} title={"Is the Hyperloop Doomed? What Elon Musk’s Latest Setback Really Means"} />
                  <TechnologyCard img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/remy_loz-3vVzdb8KKIw-unsplash-450x300.jpg"} title={"The Best Early Black Friday Deals on Gaming Laptops and Accessories"} />
                  <TechnologyCard img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-bogdan-glisik-1661469-1-450x390.jpg"} title={"Apple Watch’s ECG Can Help Diagnose Heart Problem: Research"} />
                  <TechnologyCard img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-luis-quintero-1787236-450x300.jpg"} title={"Simple Tips and Tricks to Take Care of Your Expensive DSLR Camera"} />
                  <TechnologyCard img={"https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/shubham-s-web3-aCqAjF3TRf4-unsplash-450x253.jpg"} title={"Tech Study Reveals Effects of Mobile Technology on Professionals"} />
                </div>
              </div>
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
              <li
                className={`cursor-pointer transition hover:border-b-custom-blue border-b-2 border-b-transparent flex items-center py-5 gap-2 ${activeMenu === 'Phones' ? 'border-b-custom-blue' : ''}`}
                onClick={() => handleMenuClick('Phones', '')}
              >
                Buy Theme
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
