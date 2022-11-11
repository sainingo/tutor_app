import React from 'react'
import {TfiUser} from 'react-icons/tfi'

const Tutors = () => {
  return (
    <div className='w-[80%] absolute ml-[30%] mt-[20%]'>
      <h3 className='font-semibold ml-10'>Online Tutors</h3>
      <div>
        <div className='border border-gray-300 p-4 m-2 w-[40%] rounded-lg'>
          <div className='flex justify-between'>
            <div className='flex gap-2'>
            <TfiUser />
            <div>
              <h5>Paul D'lingo</h5>
              <p>Corsica, France</p>
            </div>
            </div>
            <span className='bg-green-500 h-[16px] p-2 rounded-full'></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tutors