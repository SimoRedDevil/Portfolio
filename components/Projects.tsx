'use client'

import { link } from 'fs';
import React from 'react'
import { useState } from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: 'Alien Pong',
      description: 'This is a full-stack web application designed as an interactive multiplayer Pong game platform, featuring user authentication, real-time gameplay, leaderboards, and social features, built with Next.js and Tailwind CSS for the frontend, Django REST Framework for the backend API, and PostgreSQL for data management.',
      skills: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Django', 'Django Rest Framework', 'PostgreSQL', 'Websockets', 'Docker'],
      link: 'https://github.com/SimoRedDevil/ft_transcendence',
    },
    {
      title: 'Portfolio',
      description: 'A portfolio website was designed and developed to showcase projects, skills, and experience in a professional and engaging manner. The design was crafted in Figma, focusing on a clean, user-friendly layout to ensure an exceptional visitor experience. Built using Next.js for performance and modern functionality, combined with Tailwind CSS for responsive and scalable styling.',
      skills: ['Figma', 'Next.js', 'Tailwind CSS'],
      link: 'https://github.com/SimoRedDevil/Portfolio',
    },
    {
      title: 'Web Server',
      description: 'The project involved building a web server from scratch in C++, focusing on core features such as parsing requests, managing connections, and serving static files efficiently. This hands-on experience provided a deep understanding of how web servers function and process client interactions.',
      skills: ['C/C++', 'Networking', 'Web Servers'],
      link: 'https://github.com/hex01e/webserv',
    },
    {
      title: 'Inception',
      description: 'This project focused on building a secure and scalable system architecture using Docker containerization technology. The project required creating a multi-service environment, orchestrating containers to host essential services such as Nginx, WordPress, and MariaDB, while ensuring isolation and interconnectivity.',
      skills: ['Docker', 'Containers', 'DevOps', 'System Administration'],
      link: '',
    },
  ]
  
  const [id, setId] = useState(-1)
  const [hover, setHover] = useState(false)

  return (
    <div id='projects' className='h-full w-full text-white mt-32'>
        <div className='w-full h-[40px] flex items-center justify-center'>
          <h1 className='text-glow text-[20px]'>Highlighted Projects</h1>
        </div>
        <div onMouseMove={() => setHover(true)} onMouseLeave={() => setHover(false)} className='w-full flex flex-row flex-wrap justify-center gap-4 md:gap-16 mt-24'>
          {projects.map((project, index) => (
            <a href={project.link} target='_blank' onMouseMove={() => setId(index)} onMouseLeave={() => setId(-1)} key={index} className={`lg:transition lg:ease-in-out lg:delay-150 flex flex-col w-[350px] lg:hover:scale-110 border border-white/15 hover:border-[#00B7C3]/40 hover:cursor-pointer rounded-[30px] p-8 bg-black ${id !== -1 && id !== index && hover && 'opacity-40'}`}>
              <div className='flex flex-col gap-8'>
                <h2 className='text-center text-[19px] text-[#00B7C3]'>{project.title}</h2>
                <p className='text-[12px] lg:text-[14px] text-white/90'>{project.description}</p>
              </div>
              <div className='flex flex-row flex-wrap gap-3 mt-4'>
                {project.skills.map((skill, index) => (
                  <p className='text-[11px] lg:text-[13px] bg-[#00B7C3]/40 text-white/100 p-[7px] rounded-[20px]' key={index}>{skill}</p>
                ))}
              </div>
                <div className={`transition ease-in-out delay-150 opacity-0 h-full flex flex-row-reverse items-end justify-start ${id === index && hover && 'opacity-100'}`}>
                    <FaExternalLinkAlt className='text-white w-[20px] h-[20px]'></FaExternalLinkAlt>
                </div>
            </a>
          ))}
        </div>
    </div>
  )
}

export default Projects