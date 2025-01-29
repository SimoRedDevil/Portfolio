'use client'

import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


function GlowEffect() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMouseMove = (e) => {
          setPosition({ x: e.clientX, y: e.clientY });
        };
        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
      }, []);
  return (
    <div className='fixed w-[200px] h-[200px] overflow-hidden rounded-full bg-white/100 opacity-5 blur-xl pointer-events-none' style={{
        left: position.x - 100,
        top: position.y - 100,
        boxShadow: '0 0 200px 200px rgba(255, 255, 255, 1)',
    }}>
    </div>
  )
}

export default GlowEffect