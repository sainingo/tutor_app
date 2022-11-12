import React from 'react'
import logo from '../assets/logo.png'
import {  FaLanguage } from 'react-icons/fa'
import {GiTeacher } from 'react-icons/gi'
import { MdOutlinePlayLesson } from 'react-icons/md'
import { FcStatistics } from 'react-icons/fc'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className=' w-[280px] h-screen p-2 border-r-2'>
      <div className='px-4'>
        <h3><img src={logo} alt="logo" width="200px"/></h3>
      </div>
      <div className='p-12'>
        <ul className='flex flex-col'>
          <li className='py-5 flex gap-2 items-center cursor-pointer hover:bg-gray-100 hover:cursor-hand transition-500 rounded-lg'>< GiTeacher  size="28px"/> Tutors</li>
          <li className='py-5 flex gap-2 items-center cursor-pointer hover:bg-gray-100 hover:cursor-hand transition-500 rounded-lg'>< FaLanguage size="28px"/> Explore Languages</li>
          <li className='py-5 flex gap-2 items-center cursor-pointer hover:bg-gray-100 hover:cursor-hand transition-500 rounded-lg'> < MdOutlinePlayLesson size="28px"/>My Lessons</li>
          <li className='py-5 flex gap-2 items-center cursor-pointer hover:bg-gray-100 hover:cursor-hand transition-500 rounded-lg'> <FcStatistics size="28px"/>Statistics</li>
          <li className='py-5 flex gap-2 items-center cursor-pointer hover:bg-gray-100 hover:cursor-hand transition-500 rounded-lg'> <AiOutlineShoppingCart size="28px"/>Shopping Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar