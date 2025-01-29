'use client'

import React, {useState} from 'react'
import '../styles/global.css'
import Header from '../components/Header'
import About from '../components/About'
import GlowEffect from '../components/GlowEffect'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Intro from '../components/Intro'

export default function Page() {
    const [loading, setLoading] = useState(true)

    return (
        <div className='w-full h-full scroll-smooth'>
            <GlowEffect />
            <Intro setLoading={setLoading} />
            {
                !loading && <div className='transition ease-in-out delay-200 w-full h-full scroll-smooth'>
                    <Header />
                    <About />
                    <Projects />
                    <Skills />
                    <Contact />
                    <Footer />
                </div>
            }
        </div>
    )
}