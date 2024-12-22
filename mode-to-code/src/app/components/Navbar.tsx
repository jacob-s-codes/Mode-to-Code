import React from 'react';
import styles from './styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div className=''>
        <div className=''>
            <ul className='w-full flex flex-row items-center justify-between mt-12'>
                <li className={`ml-12 text-4xl ${styles['text-shadow-style']} ${styles['giveUnderline']} hover:cursor-pointer `}>Mode to Code</li>
                <div className={`flex flex-row justify-evenly gap-x-24 w-[50%] text-3xl ${styles['text-shadow-style']} `}>
                    <li className={`hover:cursor-pointer ${styles['giveUnderline']}`}>About</li>
                    <li className={`hover:cursor-pointer ${styles['giveUnderline']}`}>Learn</li>
                    <li className={`mr-12 hover:cursor-pointer ${styles['giveUnderline']}`}>Contact</li>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;
