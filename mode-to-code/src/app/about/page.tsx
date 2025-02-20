'use client';
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Landpage from '../components/aboutpage/Landpage'
import Meettheteam from '../components/aboutpage/Meettheteam'
import Footer from '../components/Footer'
import Link from 'next/link';

const page = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen((prev) => !prev);
  };
  return (
    <main className='w-full flex justify-center courier bg-[#FDFDFD]'>
      <div className={`w-full transition-filter duration-300 ${isMobileOpen ? "blur-sm" : ""
          }`}>
        <Navbar toggleMobileMenu={toggleMobileMenu}/>
        <Landpage/>
        <Meettheteam/>
        <Footer/>
      </div>
      {isMobileOpen && (
          <div className="fixed w-[50%] h-screen right-0 top-0 bg-blue-500 z-50">
            <button
              onClick={toggleMobileMenu}
              className="ml-auto p-4 text-white"
            >
              Close
            </button>
            <div className='flex flex-col mt-12  mx-4 gap-y-4 justify-start'>
              <hr />
              <Link href="">Here is one link</Link>
              <hr />
              <Link href="">Here is two link</Link>
              <hr />
              <Link href="">Here is three link</Link>
              <hr />

            </div>
          </div>
        )}
    </main>
    
  )
}

export default page