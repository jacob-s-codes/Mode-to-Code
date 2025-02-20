import React from 'react'


const Stats = () => {
  return (
    <div className='w-full bg-[#2C446A] py-36 mt-36 text-white'>
        <div className='text-center xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold'>
            <h3>Our Stats:</h3>
        </div>
        <div className='flex flex-row justify-center items-center gap-x-6 mt-12 mx-12'>
            <div className='border text-center sm:text-xl border-white rounded-lg max-w-lg px-4 py-4 hover:bg-white hover:text-blue-950 hover:scale-105 hover:cursor-default duration-500'>
                30+ hours of teaching
            </div>
            <div className='border text-center sm:text-xl border-white rounded-lg max-w-lg px-4 py-4 hover:bg-white hover:text-blue-950 hover:scale-105 hover:cursor-default duration-500'>
                70+ students taught
                
            </div>
        </div>
        <div className='flex mx-12 flex-row justify-center items-center gap-x-6 mt-6'>
            <div className='border text-center sm:text-xl hover:scale-105 border-white rounded-lg max-w-lg px-4 py-4 hover:bg-white hover:text-blue-950 hover:cursor-default duration-500'>
                6 Schools
            </div>
            <div className='border text-center sm:text-xl border-white rounded-lg max-w-lg px-4 py-4 hover:bg-white hover:text-blue-950 hover:scale-105 hover:cursor-default duration-500'>
                10+ classes
                
            </div>
            <div className='border text-center sm:text-xl border-white rounded-lg max-w-lg px-4 py-4 hover:bg-white hover:text-blue-950 hover:scale-105 hover:cursor-default duration-500'>
                4 teachers
                
            </div>
        </div>

    </div>
  )
}

export default Stats