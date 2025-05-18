import React, { useState } from 'react';
import ImgUpload from './ImgUpload';
import Preview from './Preview';
import { EnhancedImageApi } from '../Utils/EnhancedImageApi';

function Home() {
  const [uploadImg, setUploadImg] = useState();
  const [enhancedImg, setEnhancedImg] = useState();
  const [loading, setLoading] = useState(false);

  const uploadImgHandler = async (file) => {
    setUploadImg(URL.createObjectURL(file));
    setLoading(true);

    try {
      const enhancedUrl = await EnhancedImageApi(file);
      setEnhancedImg(enhancedUrl); // enhancedUrl contains the { image: "..." }
    } catch (error) {
      console.log(error);
      alert("Error while enhancing the image. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ImgUpload uploadImgHandler={uploadImgHandler} />
      <Preview
        loading={loading}
        upload={uploadImg}
        enhanced={enhancedImg?.image}
      />
    </>
  );
}

export default Home;
