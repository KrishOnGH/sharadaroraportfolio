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
                <header className="top-0 fixed text-gray-800 font-poppins font-bold w-screen bg-white border-b-4 border-black">
                    <div className="container mx-auto flex-wrap py-5 flex-row items-center hidden md:flex">
                        <a className="flex items-center text-gray-700 mb-4 md:mb-0"> 
                            <a className="ml-5 text-xl font-poppins font-bold cursor-pointer text-gray-800" href="/">Sharad Arora</a>
                        </a>
                        <nav className="ml-auto flex flex-wrap items-center text-base justify-center">
                            <a href='/#home' className="mr-8 text-gray-800 hover:text-gray-700 cursor-pointer">Home</a>
                            <a href='/#awards' className="mr-8 text-gray-800 hover:text-gray-700 cursor-pointer">Awards</a>
                            <a href='/#contact' className="mr-8 text-gray-800 hover:text-gray-700 cursor-pointer">Contact</a>
                        </nav>
                    </div>

                    <div id="container" className="flex-wrap py-5 flex-row items-center md:hidden w-screen bg-white">
                        <div className="flex items-center w-full text-gray-700">
                            <a className="ml-[30px] text-xl font-poppins font-bold cursor-pointer text-gray-800" href="/">Sharad Arora</a>
                            <Image alt='menu icon' className={`${menu ? '' : 'invertcolor'} h-[1.5rem] w-[1.5rem] cursor-pointer absolute right-[calc(.75rem+30px)] z-20`} onClick={toggle} src={hamburgerIcon}></Image>
                        </div>

                        <div className={`${menu ? 'fixed menu' : 'hidden'} w-[60svw] items-center h-[100svh] sm:justify-center absolute right-0 top-0 bg-black z-10 flex row`}>
                            <nav className="h-[fit-content] absolute sm:relative right-8 sm:right-0 flex flex-col items-center text-base">
                                <a href='/#home' className="mb-8 text-gray-200 hover:text-gray-300 text-xl cursor-pointer">Home</a>
                                <a href='/#awards' className="mb-8 text-gray-200 hover:text-gray-300 text-xl cursor-pointer">Awards</a>
                                <a href='/#contact' className="mb-8 text-gray-200 hover:text-gray-300 text-xl cursor-pointer">Contact</a>
                            </nav>
                        </div>
                    </div>
                </header>
            </div>
        </main>
    )
}

export default footer