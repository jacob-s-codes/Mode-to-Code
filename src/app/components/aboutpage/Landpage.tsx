import React from 'react'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css';

const Landpage = () => {
    return (
        <div className='text-black mt-2 w-full'>
            <div className='w-full flex flex-row items-center max-w-[1800px] mx-auto justify-center sm:gap-x-6 gap-x-2 '>
                <div className='lg:max-w-md sm:max-w-72 max-w-44 xl:ml-24 lg:ml-12 ml-8 flex flex-col items-center'>
                    <h1 className='xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-base font-bold '>Helping the next generation learn <span className={`text-[#596A87] ${styles['gradient']}`}>valuable technological tools.</span></h1>

                    <h2 className='lg:text-2xl md:text-base text-xs  text-[#1D1A3C] lg:mt-16 md:mt-8 mt-2'>Mode to Code is focused on educating middle school students from around the world <span className={`font-bold ${styles['gradient']}`}>the technology that they need to succeed.</span></h2>
                </div>
                <div className="w-full h-auto xl:mr-24 lg:mr-12 mr-8">
                    <Image
                        src="/Aboutimg.png"
                        alt="image of a student learning"
                        className="w-full h-auto rounded-xl"
                        width={300}
                        height={200}
                    />
                </div>
            </div>

            <div className='mt-24  w-full '>


                <div className='text-center mt-56 flex flex-col items-center justify-center bg-[#2C446A] py-24 text-white'>
                    <h2 className='xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-base '>Classes for <span className={`${styles['lessgradient']} font-extrabold`}>all students</span></h2>
                    <p className='max-w-3xl mt-12 lg:text-2xl md:text-xl text-sm  px-8'>Living in a world where technology is growing more prominent each day, learning to code and the basics of software is extremely important. Mode to Code is proud to offer both in-person classes <span className='italic'>and</span> online classes to students around the world.</p>
                    <Image src="/Anotherimgofwork.png" width={500} height={500} className='w-[45%] mt-12 h-auto rounded-lg' alt="another picture of people working"></Image>

                </div>
            </div>
            {/* Maybe make something here where as you scroll, images show up and the */}


        </div>
    )
}

export default Landpage