import React from 'react'

function Loader() {
  return (
    <div className='flex justify-center items-center h-full text-black font-semibold bg-gray-200'>
      <div className='animate-spin border-4 border-t-transparent w-10 h-10 rounded-full border-yellow-500'></div>
    </div>
  )
}

export default Loader