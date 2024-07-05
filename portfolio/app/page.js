'use client'
import React from 'react';
import Header from './components/header'
import Footer from './components/footer'
import Hero from './components/hero'
import Gallery from './components/gallery'
import Content from './components/content'
import Feature from './components/feature'

const landing = () => {
    return (
        <main>
            <div>
                <Hero />
                <Gallery />
                <Header />
            </div>
        </main>
    )
}

export default landing