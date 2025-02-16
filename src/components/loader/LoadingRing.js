import React from 'react'

function LoadingRing() {
  return (
    <div className='flex justify-center items-center gap-3 w-full h-full z-50 fixed top-0 left-0 bg-black bg-opacity-60'>
        <div className="loader ease-linear rounded-full border-l-4 border-t-4 border-gray-200 h-10 w-10 animate-spin"></div>
        <p className='text-white text-xl'>Loading...</p>
    </div>
  )
}

export default LoadingRing