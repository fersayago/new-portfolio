/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import { SiCodewars } from 'react-icons/si'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'

const Sidebar = () => {
  return (
    <div>
      <img 
      src="https://avatars.githubusercontent.com/u/51381395?v=4"
      alt="user avatar"
      className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className='text-green-400'>Fernando</span>
        Sayago
      </h3>
      <p className='px-2 py-1 my-3 bg-gray-200 rounded-full'>Web Developer</p>
      <a 
        className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full'
        href=''
        download='name'
      >
        <GiTie className="w-6 h-6"/> Download Resume
      </a>
      {/* social icon */}
      <div className='flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full'>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer"/>
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer"/>
        </a>
        <a href="">
          <SiCodewars className="w-8 h-8 cursor-pointer"/>
        </a>
      </div>

      {/* addres */}
      <div 
        className='py-4 my-5 bg-gray-200' 
        style={{marginLeft:'-1rem', marginRight:'-1rem'}}
      >
        <div className='flex items-center justify-center space-x-2'>
          <GoLocation />
          <span>Buenos Aires, Argentina</span>
        </div>
        <p className='my-2'>sayago.fernando@gmail.com</p>
        <p className='my-2'>11-5383-1812</p>
      </div>
      {/* email button */}
      <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400 focus:outline-none'
        onClick={()=>window.open('mailto:sayago.fernando@gmail.com')}
      >
        Email me
      </button>
      <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400'>
        Toggle Theme
      </button>
    </div>
  )
}

export default Sidebar
