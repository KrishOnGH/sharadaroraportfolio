import React, { useState } from 'react';
import Image from 'next/image';

const Cta = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [expandedImage, setExpandedImage] = useState("/");

    const expandImage = (image) => {
        setIsExpanded(true);
        setExpandedImage(image);
    }

    const closeImage = () => {
        setIsExpanded(false);
        setExpandedImage("/");
        console.log("hi")
    }

    return (
        <main>
            <section id="experience.awards" className="text-gray-800 body-font bg-white pb-20 w-[100svw] border-t-2 border-black">

                <div className='mt-20 text-xl md:text-2xl lg:text-3xl xl:text-4xl w-full flex justify-center'>Experience and Awards</div>

                <div className='mt-20 ml-10 text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
                    Cadence
                </div>
                <ul className='mt-5 ml-[7.5rem] list-disc text-lg lg:text-xl xl:text-2xl'>
                    <li>
                        Design Engineering Architect (Tech. Ladder) | DDR PHY | Led Constraints, Synthesis & STA
                        <div className='text-gray-600 text-sm lg:text-[1rem] xl:text-lg'>
                            Jun 2021 - Sep 2023 · 2 yrs 4 mos San Jose
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2022_07_16.png")} className='relative w-[50%] border-2 border-black aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2022_07_16.png" />
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2022_05_17.png")} className='relative w-[50%] border-2 border-black aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2022_05_17.png" />
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2022_01_14.png")} className='relative w-[50%] border-2 border-black aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2022_01_14.png" />
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2021_12_21___second.png")} className='relative w-[50%] border-2 border-black aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2021_12_21___second.png" />
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2021_12_21.png")} className='relative w-[50%] border-2 border-black aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2021_12_21.png" />
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2021_09_16.png")} className='relative w-[50%] border-2 border-black aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2021_09_16.png" />
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2021_08_09.png")} className='relative w-[50%] border-2 border-black aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2021_08_09.png" />
                            </div>
                        </div>
                    </li>

                    <li>
                        Sr. Design Engineering Manager | DDR PHY | Led Timing Closure & PD
                        <div className='text-gray-600 text-sm lg:text-[1rem] xl:text-lg'>
                            Oct 2016 - Jun 2021 · 4 yrs 9 mos San Jose
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2020_08_04.png")} className='relative w-[50%] border-2 border-black aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2020_08_04.png" />
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2020_03_16.png")} className='relative w-[50%] border-2 border-black aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2020_03_16.png" />
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2019_03_06.png")} className='relative w-[50%] border-2 border-black aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2019_03_06.png" />
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2018_12_19.png")} className='relative w-[50%] border-2 border-black aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2018_12_19.png" />
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2018_09_26.png")} className='relative w-[50%] border-2 border-black aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2018_09_26.png" />
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2018_01_23.png")} className='relative w-[50%] border-2 border-black aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2018_01_23.png" />
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2017_09_11___second.png")} className='relative w-[50%] border-2 border-black aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2017_09_11___second.png" />
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2017_09_11.png")} className='relative w-[50%] border-2 border-black aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2017_09_11.png" />
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2017_08_10.png")} className='relative w-[50%] border-2 border-black aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2017_08_10.png" />
                            </div>
                        </div>
                    </li>

                    <li>
                        Sr. Design Engineering Manager | DDR PHY | Led Timing Closure & PD
                        <div className='text-gray-600 text-sm lg:text-[1rem] xl:text-lg'>
                            Apr 2015 - Oct 2016 · 1 yrs 7 mos Banglore
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2016_02_15.png")} className='relative w-[50%] border-2 border-black aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2016_02_15.png" />
                            </div>
                        </div>
                    </li>

                    <li>
                        Sr. Principal Design Engineer | DDR PHY | Led Timing Closure & PD
                        <div className='text-gray-600 text-sm lg:text-[1rem] xl:text-lg'>
                            Apr 2014 - Apr 2015 · 1 yr 1 mo Banglore
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2015_03_26.png")} className='relative w-[50%] border-2 border-black aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2015_03_26.png" />
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2015_02_06.png")} className='relative w-[50%] border-2 border-black aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2015_02_06.png" />
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2014_11_24.png")} className='relative w-[50%] border-2 border-black aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2014_11_24.png" />
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2014_10_19.png")} className='relative w-[50%] border-2 border-black aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2014_10_19.png" />
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2014_10_08.png")} className='relative w-[50%] border-2 border-black aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2014_10_08.png" />
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2014_10_02.png")} className='relative w-[50%] border-2 border-black aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2014_10_02.png" />
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2014_09_14.png")} className='relative w-[50%] border-2 border-black aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2014_09_14.png" />
                            </div>
                        </div>
                    </li>
                </ul>

                <div className='mt-20 ml-10 text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
                    Texas Instruments
                </div>
                <ul className='mt-5 ml-[7.5rem] list-disc text-lg lg:text-xl xl:text-2xl'>
                    <li>
                        Lead Engineer, Timing + Physical Design (DSP, Wireless, Microcontrollers: 3 orgs)
                        <div className='text-gray-600 text-sm lg:text-[1rem] xl:text-lg'>
                            Mar 2010 - Apr 2014 · 4 yrs 2 mos Bangalore
                        </div>
                    </li>

                    <li>
                        Lead Engineer | Wireless (OMAP) SoCs | Led Synthesis, Constraints, PD & STA
                        <div className='text-gray-600 text-sm lg:text-[1rem] xl:text-lg'>
                            May 2008 - Mar 2010 · 1 yrs 11 mos Bangalore
                        </div>
                    </li>

                    <li>
                        Lead Engineer | DSP Systems SoCs | Synthesis, Constraints, PD & STA
                        <div className='text-gray-600 text-sm lg:text-[1rem] xl:text-lg'>
                            Jan 2006 - May 2008 · 2 yrs 5 mos Bangalore
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2007_07_12.png")} className='relative w-[50%] border-2 border-black aspect-[1.5/1]'>
                                <Image fill className='cursor-pointer' src="/2007_07_12.png" />
                            </div>
                        </div>
                    </li>

                    <li>
                        Lead Engineer | EDA/CAD/ASIC Methodology Organization
                        <div className='text-gray-600 text-sm lg:text-[1rem] xl:text-lg'>
                            Sep 2004 - Jan 2006 · 1 yrs 5 mos Bangalore
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2004_11_24.png")} className='relative w-[50%] border-2 border-black aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2004_11_24.png" />
                            </div>
                        </div>
                    </li>

                    <li>
                        Sr. Design Engineer | EDA/CAD/ASIC Methodology Organization
                        <div className='text-gray-600 text-sm lg:text-[1rem] xl:text-lg'>
                            Aug 2001 - Sep 2004 · 3 yrs 2 mos Bangalore
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2004_01_19.png")} className='relative w-[50%] border-2 border-black aspect-[1/1.2]'>
                                <Image fill className='cursor-pointer' src="/2004_01_19.png" />
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2003_01_20.png")} className='relative w-[50%] border-2 border-black aspect-[1/1]'>
                                <Image fill className='cursor-pointer' src="/2003_01_20.png" />
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2001_12_20.png")} className='relative w-[50%] border-2 border-black aspect-[1/1.5]'>
                                <Image fill className='cursor-pointer' src="/2001_12_20.png" />
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2001_10_23.png")} className='relative w-[50%] border-2 border-black aspect-[1.5/1]'>
                                <Image fill className='cursor-pointer' src="/2001_10_23.png" />
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2001_09_17.png")} className='relative w-[50%] border-2 border-black aspect-[1/1.2]'>
                                <Image fill className='cursor-pointer' src="/2001_09_17.png" />
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2001_08_27.png")} className='relative w-[50%] border-2 border-black aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2001_08_27.png" />
                            </div>
                        </div>
                    </li>

                    <li>
                        Design Engineer | EDA/CAD/ASIC Methodology Organization
                        <div className='text-gray-600 text-sm lg:text-[1rem] xl:text-lg'>
                            Aug 1999 - Aug 2001 · 2 yrs 1 mos Bangalore
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2001_02_12.png")} className='relative w-[50%] border-2 border-black aspect-[1/1.2]'>
                                <Image fill className='cursor-pointer' src="/2001_02_12.png" />
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2000_12_13.png")} className='relative w-[50%] border-2 border-black aspect-[1/1.2]'>
                                <Image fill className='cursor-pointer' src="/2000_12_13.png" />
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2000_05_26.png")} className='relative w-[50%] border-2 border-black aspect-[1.5/1]'>
                                <Image fill className='cursor-pointer' src="/2000_05_26.png" />
                            </div>
                        </div>
                    </li>
                </ul>

            </section>

            {/* Popup Image */}
            {isExpanded && expandedImage && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-75 z-50">
                    <div className="relative w-[80vw] h-[80vh] max-w-screen-lg max-h-screen-lg">
                        <div className="cursor-pointer absolute top-4 right-4 text-white text-xl rounded-lg bg-orange-600 p-2 z-10" onClick={() => closeImage()}>Close</div>
                        <Image layout="fill" objectFit="contain" src={expandedImage} />
                    </div>
                </div>
            )}
        </main >
    )
}

export default Cta;
