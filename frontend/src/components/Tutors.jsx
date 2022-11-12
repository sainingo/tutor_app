import React from 'react'
import {TfiUser} from 'react-icons/tfi'
import {AiOutlineStar} from 'react-icons/ai'

const Tutors = () => {
  const createStars = () => {
    let stars = []
  for(let i = 0; i < 5; i ++) {
    stars.push(<AiOutlineStar />)
  }
  return stars
  }
  return (
    <div className='w-[70%] absolute ml-[30%] lg:mt-[10%] lg:ml-[20%] mt-[20%]'>
      <h3 className='font-semibold ml-10'>Online Tutors</h3>
      <div className='grid grid-cols-2 gap-0'>
        <div className='border border-gray-300 p-4 m-2 w-[80%] rounded-lg'>
          <div className='flex justify-between'>
            <div className='flex gap-2 items-center'>
            <TfiUser size="22px"/>
            <div>
              <h5>Paul D'lingo</h5>
              <p>Corsica, France</p>
            </div>
            </div>
            <span className='bg-green-500 h-[16px] p-2 rounded-full'></span>
          </div>
          <div className='flex justify-between mt-4 text-sm'>
            <button className='border border-gray-200 rounded-lg px-4 '>Call Now</button>
            <div>
              <p className='border border-gray-200 px-2 rounded-lg font-semibold'>1000+ Teachings</p>
              <div className='flex gap-2 p-2'>
              {createStars()}
              </div>
            </div>
          </div>
        </div>

        <div className='border border-gray-300 p-4 m-2 w-[80%] rounded-lg'>
          <div className='flex justify-between'>
            <div className='flex gap-2 items-center'>
            <TfiUser size="22px"/>
            <div>
              <h5>Paul D'lingo</h5>
              <p>Corsica, France</p>
            </div>
            </div>
            <span className='bg-green-500 h-[16px] p-2 rounded-full'></span>
          </div>
          <div className='flex justify-between mt-4 text-sm'>
            <button className='border border-gray-200 rounded-lg px-4 '>Call Now</button>
            <div>
              <p className='border border-gray-200 px-2 rounded-lg font-semibold'>1000+ Teachings</p>
              <div className='flex gap-2 p-2'>
              {createStars()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tutors