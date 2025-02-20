'use client'
import React, { useEffect } from 'react'
import Link from 'next/link';

const Footer = () => {
  useEffect(() => {
    const dateElements = document.getElementsByClassName("dateCopyright");
    const currYear = new Date().getFullYear();
    for (let i = 0; i < dateElements.length; i++) {
      dateElements[i].innerHTML = `&copy; ${currYear}. All rights reserved`;
    }
  }, []);
  


  return (

    <div className='text-white py-12 mt-96 w-full bg-[#2C446A] border-white border-t-4'>
      <div className='flex md:flex-row flex-col gap-y-4 items-center justify-evenly h-full max-w-3xl mx-auto'>
        <Link href="/"><p className='hover:text-[#818091] hover:cursor-pointer'>Home</p></Link>
        <Link href="/about" className='hover:text-[#818091]'><p>About</p></Link>
        <p>Contact</p>
        <p className='dateCopyright'></p>

      </div>
    </div>
  )
}

export default Footer