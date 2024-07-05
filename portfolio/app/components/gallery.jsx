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
            <section id="experience.awards" className="text-gray-800 body-font bg-[#ececec] pb-20 w-[100svw] border-t-2 border-black">

                <div className='mt-20 text-xl md:text-2xl lg:text-3xl xl:text-4xl w-full flex justify-center'>Experience and Awards</div>

                <div className='mt-20 ml-10 text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
                    Cadence
                </div>
                <ul className='mt-5 ml-[7.5rem] list-disc text-lg lg:text-xl xl:text-2xl'>
                    <li>
                        Design Engineering Architect ( Technical Ladder parallel to Director of Engineering  )
                        <div className='text-gray-600 text-sm lg:text-[1rem] xl:text-lg'>
                            Jun 2021 - Sep 2023 · 2 yrs 4 mos San Jose
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2021_08_09.png")} className='relative w-[40%] aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2021_08_09.png"></Image>
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2021_09_16.png")} className='relative w-[40%] aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2021_09_16.png"></Image>
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2021_12_21.png")} className='relative w-[40%] aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2021_12_21.png"></Image>
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2021_12_21___second.png")} className='relative w-[40%] aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2021_12_21___second.png"></Image>
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2022_01_14.png")} className='relative w-[40%] aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2022_01_14.png"></Image>
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2022_05_17.png")} className='relative w-[40%] aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2022_05_17.png"></Image>
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2022_07_16.png")} className='relative w-[40%] aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2022_07_16.png"></Image>
                            </div>
                        </div>
                    </li>
                    <li>
                        Sr Design Engineering Manager, DDR Design IP
                        <div className='text-gray-600 text-sm lg:text-[1rem] xl:text-lg'>
                            Oct 2016 - Jun 2021 · 4 yrs 9 mos San Jose
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2017_08_10.png")} className='relative w-[40%] aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2017_08_10.png"></Image>
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2017_09_11.png")} className='relative w-[40%] aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2017_09_11.png"></Image>
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2017_09_11___second.png")} className='relative w-[40%] aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2017_09_11___second.png"></Image>
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2018_01_23.png")} className='relative w-[40%] aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2018_01_23.png"></Image>
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2018_09_26.png")} className='relative w-[40%] aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2018_09_26.png"></Image>
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2018_12_19.png")} className='relative w-[40%] aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2018_12_19.png"></Image>
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2019_03_06.png")} className='relative w-[40%] aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2019_03_06.png"></Image>
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2020_03_16.png")} className='relative w-[40%] aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2020_03_16.png"></Image>
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2020_08_04.png")} className='relative w-[40%] aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2020_08_04.png"></Image>
                            </div>
                        </div>
                    </li>
                    <li>
                        Sr Design Engineering Manager, DDR Design IP
                        <div className='text-gray-600 text-sm lg:text-[1rem] xl:text-lg'>
                            Apr 2014 - Oct 2016 · 2 yrs 7 mos Banglore
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2014_09_14.png")} className='relative w-[40%] aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2014_09_14.png"></Image>
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2014_10_02.png")} className='relative w-[40%] aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2014_10_02.png"></Image>
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2014_10_08.png")} className='relative w-[40%] aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2014_10_08.png"></Image>
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2014_10_19.png")} className='relative w-[40%] aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2014_10_19.png"></Image>
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2014_11_24.png")} className='relative w-[40%] aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2014_11_24.png"></Image>
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2015_02_06.png")} className='relative w-[40%] aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2015_02_06.png"></Image>
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2015_03_26.png")} className='relative w-[40%] aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2015_03_26.png"></Image>
                            </div>
                        </div>
                        <div className='ml-5 mb-5'>
                            <div onClick={() => expandImage("/2016_02_15.png")} className='relative w-[40%] aspect-[2.5/1]'>
                                <Image fill className='cursor-pointer' src="/2016_02_15.png"></Image>
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
                            Jan 2006 - Apr 2014 · 8 yrs 4 mos Bangalore
                        </div>
                    </li>
                    <li>
                        Lead Engineer, Timing + Physical Design (EDA Methodologies Org.)
                        <div className='text-gray-600 text-sm lg:text-[1rem] xl:text-lg'>
                            Aug 1999 - Jan 2006 · 6 yrs 6 mos Bangalore
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
