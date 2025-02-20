'use client';
import React from 'react';
import styles from './styles/Navbar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = ({ toggleMobileMenu }: { toggleMobileMenu: () => void }) => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <div className="sticky top-0 z-50 text-white bg-[#050225] w-full">
      <ul className="flex flex-row items-center justify-between sm:py-8 py-6 max-w-[1800px]  w-full mx-auto">
        <li className={`xl:text-4xl md:text-3xl text-2xl xl:ml-24 lg:ml-12 ml-8 ${styles['text-shadow-style']} ${styles['giveUnderline']} hover:cursor-pointer`}>
          <Link href="/">Mode to Code</Link>
        </li>
        <div className="sm:flex hidden flex-row justify-evenly lg:gap-x-20 gap-x-12 xl:text-3xl md:text-2xl text-lg">
          <Link href="/about">
            <li className={`hover:cursor-pointer ${styles['giveUnderline']}`}>About</li>
          </Link>
          <div className="flex flex-row items-center md:gap-x-2 gap-x-1 w-full group relative transition-all">
            <li className="duration-500 hover:cursor-pointer">Learn</li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-caret-down transition-transform duration-300 md:w-[25px] w-[15px] h-auto rotate-180 group-hover:rotate-[0deg]"
              viewBox="0 0 16 16"
            >
              <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
            </svg>

            <div className="absolute lg:top-8 md:top-7 top-6 hidden w-[200px] flex-col gap-1 rounded-md bg-[#2C446A] py-3 shadow-md transition-all group-hover:flex ">
              <Link href="/learnAI" className='ml-8 text-center hover:cursor-pointer mr-auto hover:text-[#050225]'>AI</Link>
              <hr />
              <Link href="/makegames" className='ml-8 hover:cursor-pointer mr-auto hover:text-[#050225] mt-4'>Make Games</Link>
              <hr />
              <Link href="/buildwebsites" className='ml-8 hover:cursor-pointer mr-auto hover:text-[#050225] mt-4'>Build Websites</Link>
            </div>
          </div>


          <li className={`hover:cursor-pointer ${styles['giveUnderline']} ${styles['text-shadow-style']} xl:mr-24 lg:mr-12 mr-8`}>Contact</li>
        </div>


        {/* Hamburger Menu */}
        <p
          className="sm:hidden flex text-4xl mr-8 hover:cursor-pointer"
          onClick={toggleMobileMenu}
        >
          ☰
        </p>
      </ul>
    </div>
  );
};

export default Navbar;
