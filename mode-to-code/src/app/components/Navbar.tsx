import React from 'react';
import Image from 'next/image';



const Navbar = () => {
  return (
    <div className="sticky top-0 z-30">
        <div className="text-white w-full bg-darkbg  overflow-visible">
            {/* <!-- Changed overflow-x-hidden to overflow-visible --> */}
            <ul className="max-w-[1800px] mx-auto flex flex-row items-center justify-between lg:text-xl text-lg px-12">
                <a href="./index.html">
                    <li className="text-2xl">
                        <img src="/horizontalmtclogo.jpg" alt="logo"  className="w-36"/>
                    </li>
                </a>
                <div className="hidden flex-row justify-between md:gap-x-36 gap-x-12 sm:flex">

                    <div className="group relative">
                        <a href="./about.html" className="hover-underline">
                            <li className='font-semibold'>ABOUT</li>
                        </a>
                        <div
                            className="invisible absolute top-full left-0  z-50 flex w-48 flex-col bg-gradient-to-br from-white to-blue-200 py-1 px-4 text-white shadow-xl group-hover:visible group-hover:opacity-100 opacity-0 transition-all duration-300">
                            <a
                                className="my-2 block border-b border-black py-1 hover:font-semibold text-black hover:cursor-pointer uppercase" href="./theteam.html">Meet
                                the team</a>
                            <a
                                className="my-2 block border-b border-black py-1 hover:font-semibold text-black hover:cursor-pointer uppercase" href="./casestudies.html">Case
                                Studies</a>

                        </div>
                    </div>

                    {/* <!-- Other Links --> */}
                    <div className="group relative">
                        <a href="./learn.html" className="hover-underline">
                            <li className='font-semibold'>LEARN</li>
                        </a>
                        <div
                            className="invisible absolute top-full left-0  z-50 flex w-48 flex-col bg-gradient-to-br from-white to-blue-200 py-1 px-4 text-white shadow-xl group-hover:visible group-hover:opacity-100 opacity-0 transition-all duration-300">
                            <a
                                className="my-2 block border-b border-black py-1 hover:font-semibold text-black hover:cursor-pointer" href="./learnai.html">LEARN
                                AI</a>
                            <a
                                className="my-2 block border-b border-black py-1 hover:font-semibold text-black hover:cursor-pointer" href="./buildwebsites.html">BUILD
                                WEBSITES</a>
                            <a
                                className="my-2 block border-b border-black py-1 hover:font-semibold text-black hover:cursor-pointer" href="./makegames.html">MAKE GAMES</a>

                        </div>
                    </div>
                    <a href="./contact.html" className="hover-underline">
                        <li className='font-semibold'>CONTACT</li>
                    </a>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default Navbar