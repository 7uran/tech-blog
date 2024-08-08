import React from 'react';
import Header from '../header';
import { Outlet } from 'react-router-dom';
import Footer from '../footer';


const Layout = () => {
    return (
        <div className='flex min-h-screen'>
            <div className='flex-1 flex flex-col transition-all duration-300 '>
                <Header />
                <main className='flex-1 '>
                    <div className=' mx-auto font-inter'>
                        <Outlet />
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default Layout;
