import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { Button } from 'react-bootstrap';

interface SaveButtonProps {
  saveImage : (url:string) => void;
  image : string;
}




const SaveButton:React.FC<SaveButtonProps>=(props)=>{


  const handleConvert = async () => {
    try {
      const url: string = "http://localhost:3001/api/v1/saveImage";
      const response: AxiosResponse = await axios.post(url, { params: { image: props.image } });


      const imageUrl = response.data.url;

      // Call the saveImage function with the converted image URL
      props.saveImage(imageUrl);

    } catch (error) {
      console.error('Error converting image:', error);
    }
  };
  return(
    <Button type="submit" onClick={handleConvert}>Save Image</Button>
)}


export default SaveButton;
