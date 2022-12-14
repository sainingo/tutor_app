import React from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import {IoMdArrowDropdown} from 'react-icons/io'

const Header = () => {
  return (
    <div className='absolute w-[80%] ml-[20%]'>
      <div className='flex items-center justify-end gap-10 p-2'>
        <div className='flex items-center'>
          <img className='rounded-lg' src='https://flagsworld.org/img/cflags/ghana-flag.png' width='50px' alt='flag'/>
          <IoMdArrowDropdown size="30px" />
        </div>
        <div className='flex items-center gap-2 mr-4'>
        <h5>Welcome</h5>
        <p className='border border-gray-400 rounded-full p-3 text-center font-bold w-[50px]'>M</p>
        </div>
      </div>
      <div className='sm:ml-32 flex justify-between items-center mt-12 border w-[300px] sm:w-[220px] lg:w-[400px] lg:ml-6 lg:justify-between p-2 border-gray-300 rounded-xl shadow-lg focus:outline-none'>
        <input placeholder='Search Tutor' type='text'/>
        <BiSearchAlt2 size='24px'/>
      </div>
    </div>
  )
}

export default Header