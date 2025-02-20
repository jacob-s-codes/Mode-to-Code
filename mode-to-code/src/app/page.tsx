'use client';
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Landpage from "./components/Landpage";
import Information from "./components/Information";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import Link from 'next/link'


export default function Home() {

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen((prev) => !prev);
  };

  return (
    <main className="w-full flex justify-center courier bg-[#FDFDFD]">
      <div className={`w-full`}>

        <div className={`transition-filter duration-500 ${isMobileOpen ? "blur-sm" : ""
          }`}>
          <Navbar toggleMobileMenu={toggleMobileMenu} />
          <Landpage />
          <Information />
          <Stats />
          <Footer />
        </div>


        {isMobileOpen && (
          <div className="fixed w-[50%] h-screen right-0 top-0 bg-[#050225] z-50">
            <div className="w-full flex flex-row justify-end">
              <button
                onClick={toggleMobileMenu}
                className="text-2xl text-white  mr-8 mt-8"
              >
                X
              </button>
            </div>
            <div className='flex flex-col mt-12 text-white mx-4 gap-y-4 justify-start'>
              <hr />
              <Link href="" className="hover:text-[#596A87]">Here is one link</Link>
              <hr />
              <Link href="" className="hover:text-blue-950">Here is two link</Link>
              <hr />
              <Link href="" className="hover:text-blue-950">Here is three link</Link>
              <hr />

            </div>
          </div>
        )}

      </div>
    </main>


  );
}
