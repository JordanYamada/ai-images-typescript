import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import Form from '../components/Form.tsx';
import SaveButton from '../components/SaveButton.tsx';
// import Header from './Header.tsx';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


interface FormData {
  method: string;
  description: string;
  title: string;
}


const Home: React.FC = () => {

  const [image, setImage] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [savedImages, setSavedImages] = useState<Array<string>>([]);
  const [prompt, setPrompt] = useState<string>("");
  const [requestParams, setRequestParams] = useState<FormData>({ method: '', description: '', title: '' });


  const aiImage = async (formData: FormData) => {
    try {
      const url: string = `${import.meta.env.VITE_REACT_APP_SERVER}api/v1/dallE`;
      const { title, description } = formData;
      const response: AxiosResponse = await axios.post(url, {
        title,
        description
      })

      const image: string = response.data.url;
      const prompt: string = response.data.description;
      // console.log('Response: ', response.data)
      // console.log('MY image:',image);
      // console.log('MY prompt:',prompt);
      setImage(image);
      setPrompt(prompt);
      setTitle(title);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  const saveImage = (url: string) => {
    setSavedImages([...savedImages, url]);
    url !== image ? setImage(url) : alert("You've already saved this image.");
  }

  const callApi = (formData: FormData) => {

    setRequestParams(formData);
    aiImage(formData);
  }

  return (
    <React.Fragment>

      {image
        ?
        <div>Title: {requestParams.title}</div>
        :
        <h2>Welcome</h2>}
      {image
        ?
        <div>Description: {prompt}</div>
        :
        null}
      <div>
        {image ? <img src={image} /> : <h2>Try It Out!</h2>}
        {image
          ?
          <SaveButton
            image={image}
            title={title}
            description={prompt}
            saveImage={saveImage}
          />
          :
          null}
      </div>

      <Form callApi={callApi}
      />
      {/* <Footer /> */}
    </React.Fragment>
  );
}


export default Home;