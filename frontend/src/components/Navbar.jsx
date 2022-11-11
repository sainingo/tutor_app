import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className=' w-[280px] h-screen p-2 border-r-2'>
      <div>
        <h3><img src={logo} alt="logo" width="200px"/></h3>
      </div>
      <div className='p-8'>
        <ul className='flex flex-col'>
          <li className='py-4'>Tutors</li>
          <li className='py-4'>Explore Languages</li>
          <li className='py-4'>My Lessons</li>
          <li className='py-4'>Statistics</li>
          <li className='py-4'>Shopping Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar