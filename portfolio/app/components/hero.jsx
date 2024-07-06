import React from 'react';
import Image from "next/image";

const hero = () => {
    return (
        <main>
            <div>
                <section id="hero" className="text-gray-800 body-font bg-white h-[100svh] w-[100svw] flex justify-center items-center flex-col">
                    <div className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-5'>
                        Hi, I'm Sharad Arora,
                    </div>
                    <div className='text-sm text-center w-[60%] lg:max-w-[900px] sm:text-sm md:text-[1rem] lg:text-lg xl:text-xl'>
                        24+ years of hands-on and leadership experience in STA, Synthesis and Physical Design for full chips and IPs across diverse SoC verticals. Proficient in achieving timing closure from RTL through GDSII, including timing constraints creation, architecting/optimizing low-latency clock trees for high performance designs and reduced/faster timing closure iterations.
                        <br/> <br/>
                        Through early risk identification, methodology, automation, collaboration, focused execution, experimentation and a first principles approach, drove self and team to consistently meet or exceed aggressive product goals (performance, area, power) within aggressive schedules for multiple SoCs (at Texas Instruments) and multiple DDR IPs and test-chips (at Cadence Design Systems).
                    </div>
                </section>
            </div>
        </main>
    )
}

export default hero