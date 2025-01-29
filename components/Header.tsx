import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='fixed top-0 w-full flex p-3 h-[70px] z-50 bg-[rgb(19,19,19)] bg-opacity-100'>
      <div className='w-[42px] h-[42px]'>
        <Image alt='Logo' src='/logo.png' width={42} height={42}></Image>
      </div>
      <div className='text-white flex w-[calc(100%-42px)] items-center justify-center gap-5 sm:gap-10 text-[13px] sm:text-[16px]'>
        <Link className='transition ease-in-out delay-100 hover:animate-none p-2 hover:bg-transparent hover:text-[#00B7C3] rounded-[20px]' href='#about'>About</Link>
        <Link className='transition ease-in-out delay-100 hover:animate-none p-2 hover:bg-transparent hover:text-[#00B7C3] rounded-[20px]' href='#projects'>Projects</Link>
        <Link className='transition ease-in-out delay-100 hover:animate-none p-2 hover:bg-transparent hover:text-[#00B7C3] rounded-[20px]' href='#skills'>Skills</Link>
        <Link className='transition ease-in-out delay-100 hover:animate-none p-2 hover:bg-transparent hover:text-[#00B7C3] rounded-[20px]' href='#contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Header