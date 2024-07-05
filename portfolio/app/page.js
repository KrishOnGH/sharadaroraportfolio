'use client'
import React from 'react';
import Header from './components/header'
import Hero from './components/hero'
import Gallery from './components/gallery'
import Contact from './components/contact'

const landing = () => {
    return (
        <main>
            <div>
                <Hero />
                <Gallery />
                <Contact />
                <Header />
            </div>
        </main>
    )
}

export default landing