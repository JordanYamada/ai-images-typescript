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
    getImages();
  }, [])


  const getImages = async () => {
    try {
      const url: string = "http://localhost:3001/api/v1/images";
      const response: AxiosResponse = await axios.get(url);
      const data = response.data;
      console.log(data)
      setImages(data)

    } catch (error) {
      console.error('Error Storing to the Database:', error);
    }
  };



  const contextObject = {
    images,
    deleteImage,
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
