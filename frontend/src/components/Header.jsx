import React from 'react'
import {BiSearchAlt2} from 'react-icons/bi'

const Header = () => {
  return (
    <div className='absolute w-[80%] ml-[20%]'>
      <div className='flex items-center justify-end gap-10 p-2'>
        <div>flag</div>
        <div className='flex items-center gap-2 mr-4'>
        <h5>Welcome</h5>
        <p className='border border-gray-400 rounded-full p-3'>M</p>
        </div>
      </div>
      <div className='ml-32 flex items-center mt-12 border w-[220px] p-2 border-gray-300 rounded-xl shadow-lg focus:outline-none'>
        <input placeholder='Search Tutor' type='text'/>
        <BiSearchAlt2 size='24px'/>
      </div>
    </div>
  )
}

export default Header