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
      // Fetch image data from the URL
      const response: AxiosResponse<ArrayBuffer> = await axios.get(props.image, { responseType: 'arraybuffer' });
      const blob = new Blob([response.data], { type: response.headers['content-type'] });

      // Create a File object from the blob
      const file = new File([blob], 'image.png', { type: 'image/png' });


      // Create a URL representing the image file
      const url = URL.createObjectURL(file);
      console.log(url)
      props.saveImage(url);
    } catch (error) {
      console.error('Error converting image:', error);
    }
  };
  return(
    <Button type="submit" onClick={handleConvert}>Save Image</Button>
)}


export default SaveButton;
