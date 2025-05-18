import React from 'react';
import Loader from './Loader';

function Preview(props) {
  return (
    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl'>
      
      {/* Original Image */}
      <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
        <h2 className='text-white text-xl text-center font-semibold bg-gray-800 py-2'>Original Image</h2>
        {props.upload ? (
          <img src={props.upload} alt='Uploaded' className='w-full h-full object-cover' />
        ) : (
          <div className='flex items-center justify-center h-80 bg-gray-200 text-black font-semibold'>
            No Image Selected
          </div>
        )}
      </div>

      {/* Enhanced Image */}
      <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
        <h2 className='text-white text-xl text-center font-semibold bg-yellow-600 py-2'>Enhanced Image</h2>
        {props.loading ? (
          <Loader />
        ) : props.enhanced ? (
          <img src={props.enhanced} alt='Enhanced' className='w-full h-full object-cover' />
        ) : (
          <div className='flex items-center justify-center h-80 text-black font-semibold bg-gray-200'>
            No Enhanced Image
          </div>
        )}
      </div>

    </div>
  );
}

export default Preview;
