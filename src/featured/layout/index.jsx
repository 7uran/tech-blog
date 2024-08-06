import React from 'react';
import Header from '../header';
import { Outlet } from 'react-router-dom';
import Footer from '../footer';
import Sidebar from '../../components/Sidebar';

const Layout = () => {
    return (
        <div className='flex min-h-screen'>
            <div className='fixed z-50'>
                <Sidebar />
            </div>
            <div className='flex-1 flex flex-col transition-all duration-300 '>
                <Header />
                <main className='flex-1 overflow-y-auto'>
                    <div className='container mx-auto max-w-[1260px] font-inter'>
                        <Outlet />
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default Layout;
