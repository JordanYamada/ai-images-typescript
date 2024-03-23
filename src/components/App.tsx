import '../styles/App.css'
import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import Header from './Header';
import Footer from './Footer';
import deleteImage from '../handlers/deleteImage';
import { Outlet } from "react-router-dom";

interface ImagesData {
  title: string;
  description: string;
  image: string;
  _id: string;
}


const App: React.FC = () => {
  const [images, setImages] = useState<Array<ImagesData>>([])


  useEffect(() => {
    console.log(import.meta.env.VITE_REACT_APP_SERVER)
    getImages();
  }, [])


  const getImages = async () => {
    try {
      const url: string = `${import.meta.env.VITE_REACT_APP_SERVER}api/v1/images`;
      const response: AxiosResponse = await axios.get(url);
      const data = response.data;
      console.log(data)
      setImages(data)

    } catch (error) {
      console.error('Error getting images from the Database:', error);
    }
  };



  const contextObject = {
    images,
    deleteImage,
    getImages,
}

return (
  <>
    <Header />
    <Outlet context={contextObject} />
    <Footer />
  </>
)
}

export default App;
