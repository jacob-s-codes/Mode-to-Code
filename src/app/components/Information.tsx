import React from 'react'
import Image from 'next/image'

const Information = () => {
  return (
    <div className='w-full text-blue-950'>
      <div className='text-center md:mt-36 mt-24 flex flex-col items-center justify-center'>
        <h3 className='xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold'>Who we are</h3>
        <p className='max-w-3xl px-12 md:mt-12 mt-6 md:text-xl text-sm'>Mode to Code is an online and in person program that teaches students around the world the basics of technology and the art of coding.</p>
        <Image
          src='/Imgofpplworking.png'
          width={500}
          height={500}
          className='!rounded-lg overflow-hidden w-full h-auto px-8 mt-12 md:px-0 md:w-[60%] xl:w-[45%] '
          alt="picture of people learning"
        />
      </div>

      <div className='text-center md:mt-56 mt-36 flex flex-col items-center justify-center'>
        <h3 className='xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold'>Online programs</h3>
        <p className='max-w-3xl px-12 md:mt-12 mt-6 md:text-xl text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi deserunt suscipit assumenda aspernatur facere inventore eaque tenetur nemo fugiat optio!</p>
        <Image src="/Anotherimgofwork.png" width={500} height={500} className='md:px-0 px-12 mt-12 md:w-[60%] xl:w-[45%] w-full h-auto rounded-xl' alt="another picture of people working"></Image>

      </div>

    </div>
  )
}

export default Information