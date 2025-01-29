import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaDocker } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { BiLogoFigma } from "react-icons/bi";

function Skills() {
  return (
    <div id='skills' className='h-full w-full text-white mt-40'>
        <div className='w-full h-[40px] flex items-center justify-center'>
          <h1 className='text-glow text-[20px]'>Skills & Tools</h1>
        </div>
        <div className='flex flex-col text-white items-center justify-center gap-5 sm:gap-8 md:gap-12 lg:gap-14 mt-14'>
            <div className='flex flex-row gap-5 sm:gap-8 md:gap-12 lg:gap-14'>
                <FaHtml5 className='w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] md:w-[55px] md:h-[55px] lg:w-[70px] lg:h-[70px]'/>
                <FaCss3Alt className='w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] md:w-[55px] md:h-[55px] lg:w-[70px] lg:h-[70px]'/>
                <FaJs className='w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] md:w-[55px] md:h-[55px] lg:w-[70px] lg:h-[70px]'/>
                <FaReact className='w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] md:w-[55px] md:h-[55px] lg:w-[70px] lg:h-[70px]'/>
                <SiNextdotjs className='w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] md:w-[55px] md:h-[55px] lg:w-[70px] lg:h-[70px]'/>
                <RiTailwindCssFill className='w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] md:w-[55px] md:h-[55px] lg:w-[70px] lg:h-[70px]'/>
            </div>
            <div className='flex flex-row gap-5 sm:gap-8 md:gap-12 lg:gap-14'>
                <BiLogoCPlusPlus className='w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] md:w-[55px] md:h-[55px] lg:w-[70px] lg:h-[70px]'/>
                <FaPython className='w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] md:w-[55px] md:h-[55px] lg:w-[70px] lg:h-[70px]'/>
                <SiDjango className='w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] md:w-[55px] md:h-[55px] lg:w-[70px] lg:h-[70px]'/>
                <BiLogoPostgresql className='w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] md:w-[55px] md:h-[55px] lg:w-[70px] lg:h-[70px]'/>

            </div>
            <div className='flex flex-row gap-5 sm:gap-8 md:gap-12 lg:gap-14'>
                <FaDocker className='w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] md:w-[55px] md:h-[55px] lg:w-[70px] lg:h-[70px]'/>
                <FaGitAlt className='w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] md:w-[55px] md:h-[55px] lg:w-[70px] lg:h-[70px]'/>
                <BiLogoFigma className='w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] md:w-[55px] md:h-[55px] lg:w-[70px] lg:h-[70px]'/>
            </div>
        </div>
    </div>
  )
}

export default Skills