'use client'

import Image from 'next/image';
import React from 'react'
import { TiDocumentText } from "react-icons/ti";
import { TypeAnimation } from 'react-type-animation';

function About() {
  return (
    <div id='about' className='text-white w-full h-full mt-48'>
        <div className='w-full h-[40px] flex items-center justify-center'>
          <h1 className='text-glow text-[20px]'>About Me</h1>
        </div>
        <div className='w-full h-full flex flex-col md:flex-row-reverse md:items-start items-center mt-6 gap-5 md:p-5 lg:p-10 xl:pl-32 xl:pr-44'>
          <div className='bg-black/50 rounded-[20px]'>
            <Image className='rounded-[20px] lg:transition lg:ease-in-out lg:delay-150 lg:duration-300 w-[250px] h-[450px] md:w-[350px] md:h-[450px] lg:w-[400px] lg:h-[550px] xl:w-[350px] xl:h-[550px] grayscale lg:hover:grayscale-0 lg:hover:rotate-6 lg:hover:scale-110' alt='Me' src='/Me.jpg' width={350} height={550}></Image>
          </div>
          <div className='text-center md:text-left p-3 md:p-6 w-[90%]'>
            <h1 className='text-[30px] md:text-[40px] text-white'>Software Developer</h1>
            <TypeAnimation sequence={['Hey, I’m Mohamed I graduated with a Bachelor’s degree in Economics in 2021. Even though I studied economics, Tech and IT have been my hobby since childhood, and I’ve always loved exploring the world of coding. In 2022, I decided to turn my passion into my career and joined 1337 Coding School, where I learned and worked with technologies like C, C++, React.js, Next.js, Tailwind CSS, Django, Docker, and JavaScript. I enjoy turning people’s ideas into real, working code. I love solving problems, building projects, and learning new things. Whether it’s designing clean interfaces or creating efficient backends, I’m always excited to take on new challenges.']} speed={80} omitDeletionAnimation={true} wrapper='p' className='text-[15px] lg:text-[20px] mt-8 text-white/90 lg:w-[80%] xl:w-[85%]'></TypeAnimation>
            <a href='/SoftwareDeveloper-CV.pdf' target='_blank' className='inline-block transition ease-in-out delay-100 mt-14 border hover:border-white/15 hover:bg-[#00B7C3]/60 border-white/30 rounded-[30px] w-[170px] h-[40px] bg-[#1C1C1C] text-center p-2'>My Resume</a>
          </div>
        </div>
    </div>
  )
}

export default About
