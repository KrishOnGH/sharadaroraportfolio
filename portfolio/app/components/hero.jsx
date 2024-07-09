import React from 'react';
import Image from "next/image";

const hero = () => {
    return (
        <main>
            <div>
                <section id="home" className="text-gray-800 body-font bg-white h-[100svh] w-[100svw] flex justify-center items-center flex-col">
                    <div className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-5'>
                        Hi, I'm Sharad Arora,
                    </div>
                    <div className='text-sm text-left w-[60%] lg:max-w-[900px] sm:text-sm md:text-[1rem] lg:text-lg xl:text-xl'>
                        24 years of Hands-on & Leadership experience in STA, Synthesis & Physical Design for SoC (15 years) and IP (9 years). <br/><br/> Proficient in achieving Timing Closure from RTL to GDSII, creating Timing Constraints, architecting low latency, multi-tap, custom built Clock Trees, meeting aggressive Skew Targets across 100+ PHY bits and reducing Timing Closure Iterations. <br/><br/> Built, ramped, grown & led worldwide teams. Managed multi-site designs (15 SoCs at TI & 45 DDR IPs/Test-chips at Cadence).
                    </div>
                </section>
            </div>
        </main>
    )
}

export default hero