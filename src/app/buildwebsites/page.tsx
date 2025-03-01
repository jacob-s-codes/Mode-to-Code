'use client';
import React, {useState} from 'react';
import Navbar from '../components/Navbar';


const page = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileOpen((prev) => !prev);
    };


    return (
        <main className="w-full flex justify-center courier bg-[#FDFDFD]">
            <div className={`max-w-[1800px] w-full`}>

                <div className={`transition-filter duration-300 ${isMobileOpen ? "blur-sm" : ""
                    }`}>
                    <Navbar toggleMobileMenu={toggleMobileMenu} />

                    Build Websites
                </div>


                {isMobileOpen && (
                    <div className="fixed w-[50%] h-screen right-0 top-0 bg-blue-500 z-50">
                        <button
                            onClick={toggleMobileMenu}
                            className="ml-auto p-4 text-white"
                        >
                            Close
                        </button>
                    </div>
                )}

            </div>
        </main>

    )
}

export default page