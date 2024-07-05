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
                    <div className='text-sm text-center w-[60%] lg:max-w-[900px] sm:text-sm md:text-lg lg:text-xl xl:text-2xl'>
                        I have over 24 years of experience in STA, Synthesis, and Physical Design for full chips and IPs across diverse SoC verticals. Skilled in achieving timing closure from RTL to GDSII, creating timing constraints, optimizing clock trees, and consistently meeting aggressive product goals (performance, area, power) within tight schedules. Formerly at Texas Instruments and Cadence Design Systems.
                    </div>
                </section>
            </div>
        </main>
    )
}

export default hero