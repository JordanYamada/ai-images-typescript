import React from 'react';
import { useOutletContext } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import { Button } from 'react-bootstrap';

interface SaveButtonProps {
  saveImage: (url: string) => void;
  image: string;
  title: string;
  description: string;
}

// Define the type of the context value returned by useOutletContext
interface OutletContext {
  deleteImage: (url: string, id: string) => void;
  getImages: () => void;
}





const SaveButton: React.FC<SaveButtonProps> = (props) => {

  const { getImages }: OutletContext = useOutletContext() as OutletContext;

  const handleConvert = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    console.log('TITLE: ', props.title, 'DESC: ', props.description)
    try {
      const url: string = `${import.meta.env.VITE_REACT_APP_SERVER}api/v1/saveImage`;
      // console.log({ image: props.image },'| URL:', url )
      const response: AxiosResponse = await axios.post(url, { image: props.image });

      // console.log('DATAAAA:', response.data)
      const imageUrl = response.data.url;

      // Call the saveImage function with the converted image URL
      props.saveImage(imageUrl);
      addToCarousel(imageUrl)
      getImages();

    } catch (error) {
      console.error('Error converting image:', error);
    }
  };

  const addToCarousel = async (image: string) => {
    try {
      const url: string = `${import.meta.env.VITE_REACT_APP_SERVER}api/v1/images`;
      console.log('URL!!!!!: ', url)
      console.log('TITLE: ', props.title, 'DESC: ', props.description)
      const response: AxiosResponse = await axios.post(url, { title: props.title, description: props.description, image: image });


      const data = response.data;
      alert(`Your new image, ${data.title}, has been saved`);


    } catch (error) {
      console.error('Error Storing to the Database:', error);
    }
  };

  return (
    <Button type="submit" onClick={handleConvert}>Save Image</Button>
  )
}


export default SaveButton;
