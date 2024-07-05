import React from 'react';
import Image from "next/image";

const hero = () => {
    return (
        <main>
            <div>
                <section id="hero" className="text-gray-800 body-font bg-[#ececec] h-[100svh] w-[100svw] flex justify-center items-center flex-col">
                    <div className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-5'>
                        Hi, I'm Sharad Arora,
                    </div>
                    <div className='text-sm sm:text-sm md:text-lg lg:text-xl xl:text-2xl'>
                        Filler text for description.
                    </div>
                </section>
            </div>
        </main>
    )
}

export default hero