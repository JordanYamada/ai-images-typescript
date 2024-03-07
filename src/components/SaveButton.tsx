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

  const handleConvert = async () => {
    console.log(props.title)
    try {
      const url: string = "http://localhost:3001/api/v1/saveImage";
      const response: AxiosResponse = await axios.post(url, { params: { image: props.image } });


      const imageUrl = response.data.url;

      // Call the saveImage function with the converted image URL
      props.saveImage(imageUrl);
      console.log(props.title)
      addToCarousel(imageUrl)
      getImages();

    } catch (error) {
      console.error('Error converting image:', error);
    }
  };

  const addToCarousel = async (image: string) => {
    try {
      const url: string = "http://localhost:3001/api/v1/images";
      const response: AxiosResponse = await axios.post(url, { title: props.title, description: props.description, image: image });


      const data = response.data;
      console.log(data)


    } catch (error) {
      console.error('Error Storing to the Database:', error);
    }
  };

  return (
    <Button type="submit" onClick={handleConvert}>Save Image</Button>
  )
}


export default SaveButton;
