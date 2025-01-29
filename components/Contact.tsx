import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <div id='contact' className='h-full w-full text-white mt-40'>
      <div className='w-full h-[40px] flex items-center justify-center'>
        <h1 className='text-glow text-[20px]'>Contact Me</h1>
      </div>
      <div className='flex flex-row text-white items-center justify-center gap-8 sm:gap-9 md:gap-11 lg:gap-14 mt-14'>
        <a href='https://github.com/SimoRedDevil/' target='_blank' rel='noreferrer'>
          <FaGithub className='w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] text-white/60 hover:text-white/100'/>
        </a>
        <a href='https://www.linkedin.com/in/mohamed-el-youssfi-ab9547273/ ' target='_blank' rel='noreferrer'>
          <FaLinkedin className='w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] text-white/60 hover:text-white/100'/>
        </a>
        <div className="relative group inline-block">
          <a href='mailto:mohamedyoussfi20@gmail.com'>
            <SiGmail className='w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] text-white/60 hover:text-white/100'/>
          </a>
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 hidden group-hover:block bg-gray-800 text-white text-sm rounded-lg py-2 px-4 shadow-lg text-[11px]">
            mohamedyoussfi20@gmail.com
          </div>
        </div>
        <a href='https://wa.me/212645588771' target='_blank' rel='noreferrer'>
          <FaWhatsapp className='w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] text-white/60 hover:text-white/100'/>
        </a>
      </div>
    </div>
  )
}

export default Contact