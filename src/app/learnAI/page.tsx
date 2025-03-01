import React from 'react';
import Navbar from '../components/Navbar';


const page = () => {
  return (
    <main className='w-full flex justify-center courier bg-[#FDFDFD]'>
      <div className='max-w-[1800px] w-full'>
        <Navbar/>
        <h1>Learn AI</h1>
      </div>
    </main>
    
  )
}

export default page