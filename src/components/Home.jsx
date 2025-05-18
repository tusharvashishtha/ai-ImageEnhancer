import React, { useState } from 'react';
import ImgUpload from './ImgUpload';
import Preview  from './Preview';

function Home() {
    const [uploadImg, setUploadImg] = useState(null);
    const [enhancedImg, setEnhancedImg] = useState(null);
    const [loading , setLoading] = useState(false);
    const uploadImgHandler = async (file) => {
      setUploadImg(URL.createObjectURL(file));
      setLoading(true);

    };
  return (
    <>
        <ImgUpload uploadImgHandler = {uploadImgHandler} />
        <Preview 
        loading = {loading} 
        enhanced = {enhancedImg} 
        upload = {uploadImg}
        />
    </>
  )
}

export default Home