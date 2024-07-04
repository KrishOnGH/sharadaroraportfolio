import React from 'react';
import Image from "next/image";

const hero = () => {
    return (
        <main>
            <div>
                <section className="text-gray-200 body-font">
                    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                        {/* <Image className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"></Image> */}
                        <div className="text-center lg:w-2/3 w-full">
                        <h1 className="mb-8 text-3xl font-medium text-gray-300">Y-Panel: Unleash Your Video Vision</h1>
                        <p className="mb-8 leading-relaxed">Envision this: <br /><br /> You're an idea enthusiast, envisioning a captivating video that sparks imagination and leaves an impact. Yet, the technicalities of video creation often stifle your creativity. Hours are wasted on mastering complex software and sourcing content, leaving your vision trapped in the realm of possibility.<br /><br /><br /></p>
                        <h3 className="text-xl font-medium">Enter Y-Panel - Where Ideas Ignite Into Reality</h3> <p><br /> With Y-Panel, the journey from inspiration to creation is seamless and exhilarating. No longer confined by technical barriers, your ideas come to life effortlessly. Our innovative platform empowers anyone with a vision to craft stunning videos with ease, revolutionizing the way stories are told and experiences are shared.</p>
                        <br></br>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default hero