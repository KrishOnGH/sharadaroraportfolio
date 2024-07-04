import React, { useState } from 'react';
import hamburgerIcon from '../assets/hamburger.svg'
import Image from 'next/image'

const footer = () => {
    const [menu, setMenu] = useState(false);

    const toggle = () => {
        setMenu(!menu);
    };

    return (
        <main>
            <div>
                <header className="top-0 fixed text-gray-200 font-poppins font-bold w-screen bg-primary">
                    <div className="container mx-auto flex-wrap py-5 flex-row items-center hidden md:flex">
                        <a className="flex items-center text-gray-300 mb-4 md:mb-0"> 
                            <a className="ml-5 text-xl font-poppins font-bold cursor-pointer text-text hover:text-textDark" href="/">Y-Panel</a>
                        </a>
                        <nav className="ml-auto flex flex-wrap items-center text-base justify-center">
                            <a className="mr-8 text-gray-200 hover:text-gray-300 cursor-pointer">Features</a>
                            <a className="mr-8 text-gray-200 hover:text-gray-300 cursor-pointer">About</a>
                            <a className="mr-8 text-gray-200 hover:text-gray-300 cursor-pointer">Contact</a>
                            <a className="mr-8 text-gray-200 hover:text-gray-300 cursor-pointer">FAQs</a>
                        </nav>
                        <button className="inline-flex items-center bg-tertiary border-0 py-1 px-3 focus:outline-none hover:bg-tertiaryDark transition duration-300 rounded text-base mt-4 md:mt-0 mr-8">Sign Up</button>
                        <button className="inline-flex items-center bg-tertiary border-0 py-1 px-3 focus:outline-none hover:bg-tertiaryDark transition duration-300 rounded text-base mt-4 md:mt-0 mr-6">Log In</button>
                    </div>

                    <div id="container" className="flex-wrap py-5 flex-row items-center md:hidden w-screen bg-primary">
                        <div className="flex items-center w-full text-gray-300">
                            <a className="ml-[30px] text-xl font-poppins font-bold cursor-pointer text-text hover:text-textDark" href="/">Y-Panel</a>
                            <Image alt='menu icon' className='h-[1.5rem] w-[1.5rem] cursor-pointer absolute right-[calc(.75rem+30px)] z-20' onClick={toggle} src={hamburgerIcon}></Image>
                        </div>

                        <div className={`${menu ? 'fixed menu' : 'hidden'} w-[60svw] items-center h-[100svh] sm:justify-center absolute right-0 top-0 bg-black z-10 flex row`}>
                            <nav className="h-[fit-content] absolute sm:relative right-8 sm:right-0 flex flex-col items-center text-base">
                                <a className="mb-8 text-gray-200 hover:text-gray-300 text-xl cursor-pointer">Features</a>
                                <a className="mb-8 text-gray-200 hover:text-gray-300 text-xl cursor-pointer">About</a>
                                <a className="mb-8 text-gray-200 hover:text-gray-300 text-xl cursor-pointer">Contact</a>
                                <a className="mb-8 text-gray-200 hover:text-gray-300 text-xl cursor-pointer">FAQs</a>
                            </nav>
                        </div>
                    </div>
                </header>
            </div>
        </main>
    )
}

export default footer