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
      // const imageBody:{imageUrl:string} = {imageUrl:props.image}
      // Fetch image data from the URL
      // console.log(props.image);
      const response: AxiosResponse = await axios.post(url, { params: { image: props.image } });
      console.log('!!!!!!!!!!!!!response: ',response);


      // Convert the response data into a Blob
      const blob = new Blob([response.data], { type: 'image/png' });
      console.log('!!!!!!!!!!!!!!!blob:', blob)
      
      // Create a URL representing the Blob
      const imageUrl = URL.createObjectURL(blob);

      console.log('!!!!!!!!!!!!!!!!ImageUrl: ',imageUrl);
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
