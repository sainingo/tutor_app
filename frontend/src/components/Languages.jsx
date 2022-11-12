import React from 'react'

const Languages = () => {
  return (
    <div className='absolute w-[70%]  mt-[20%] ml-[30%] lg:mt-[10%] lg:ml-[20%]'>
      <div className='border border-gray-300 w-[90%] rounded-lg text-center shadow-lg m-4 p-2'>
        <h5 className='font-semibold'>Global</h5>
        <p>Top 20 spoken languages</p>
      </div>
      <div className='grid grid-cols-2'>
        <div className='border border-gray-300 rounded-lg w-[80%] text-center m-4 shadow-lg p-2'>
          <h3 className='font-semibold'>Africa Continent</h3>
          <p>Top 20 spoken languages</p>
        </div>
        <div className='border border-gray-300 rounded-lg w-[80%] text-center m-4 shadow-lg p-2'>
          <h3 className='font-semibold'>Sub-Continental</h3>
          <p>Top 20 spoken languages</p>
        </div>
        <div className='border border-gray-300 rounded-lg w-[80%] text-center m-4 shadow-lg p-2'>
          <h3 className='font-semibold'>Country</h3>
          <p>Top 15 spoken languages</p>
        </div>
        <div className='border border-gray-300 rounded-lg w-[80%] text-center m-4 shadow-lg p-2'>
          <h3 className='font-semibold'>Province/State</h3>
          <p>Top 2 spoken languages</p>
        </div>
      </div>
      <div className='border border-gray-300 w-[90%] rounded-lg text-center shadow-lg m-4 p-2'>
        <h5 className='font-semibold'>City/Town</h5>
        <p>Top 1 spoken languages</p>
      </div>
    </div>
  )
}

export default Languages