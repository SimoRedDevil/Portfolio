'use client'

import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

function Intro({ setLoading}) {
    const parentRef = useRef(null)
    const progressRef = useRef(null)
    const counterRef = useRef(null)

    useEffect(() => {
        gsap.to(progressRef.current, {duration: 4, width: '100%', ease: 'power2.inOut'})
        gsap.to(progressRef.current, {duration: 2, rotate:90, scale:1000, ease: 'power2.inOut', delay: 4})
        gsap.to({ value: 0 }, { 
            value: 100, 
            duration: 4, 
            ease: 'power2.inOut',
            onUpdate: function () {
                counterRef.current.innerText = Math.round(this.targets()[0].value) + "%" // Ensure only whole numbers are displayed
            },
            onComplete: function () {
                setTimeout(() => {
                    setLoading(false)
                    parentRef.current.style.display = 'none'
                    progressRef.current.style.display = 'none'
                    counterRef.current.style.display = 'none'
                }, 1900)
            }
        })
    }, [])

    return (
    <div ref={parentRef} className='text-white h-full w-full fixed flex flex-col items-center justify-center gap-5'>
        <div ref={progressRef} className='w-[50px] h-[2px] bg-white'></div>
        <div className='text-white'>
            <h1 ref={counterRef}>0%</h1>
        </div>
    </div>
  )
}

export default Intro