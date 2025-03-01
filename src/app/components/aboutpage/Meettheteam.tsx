import React from 'react'
import Image from 'next/image'

const Meettheteam = () => {
    return (
        <div className='relative mt-56'>
            <h2 className='text-center text-6xl font-bold '>Meet the team</h2>
            <div className=''>
                <div className="w-full h-auto flex justify-center mt-12">
                    <div className='flex flex-col items-center w-full'>
                        <Image
                            src="/Jacobpic.jpg"
                            alt="image of a student learning"
                            className="w-[15%] h-auto rounded-xl"
                            width={300}
                            height={200}
                        />
                        <h3 className='mt-4 text-2xl'>Jacob Shaul</h3>
                        <p className='text-[#596A87] text-xl'>Founder of Mode to Code</p>
                    </div>
                </div>

                <div>
                    
                </div>
                <div>One</div>


            </div>
        </div>
    )
}

export default Meettheteam