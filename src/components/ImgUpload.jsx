import React from 'react'

function ImgUpload(props) {
    const showImageHandler = (e) =>{
        const file = e.target.files[0];
        if(file){ 
          props.uploadImgHandler(file);
        }
    }
  return (
    <div className='bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl'>
    <label 
    htmlFor='fileInput' 
    className='block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-600 transition-all'>
        <input type='file' accept="image/*" id='fileInput' className='hidden' onChange={showImageHandler} />
    <span className='text-black text-lg font-medium '>Click and drag to upload your image</span>
    </label>
    </div>
  )
}

export default ImgUpload 