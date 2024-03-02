import './App.css'
import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import Form from './Form.tsx';


interface FormData {
  method: string;
  description: string;
  title: string;
}


const App: React.FC = () => {

  const [image, setImage] = useState<string>("");
  const [prompt, setPrompt] = useState<string>("");
  const [requestParams, setRequestParams] = useState<FormData>({ method: '', description: '', title: '' });


  const aiImage = async (formData: FormData) => {
    try {
      const url: string = "http://localhost:3001/api/v1/dallE";
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
      setPrompt(prompt)
    } catch (error) {
      console.log("Error:", error);
    }
  }

  const callApi = (formData: FormData) => {

    setRequestParams(formData);
    aiImage(formData);
  }

  return (
    <React.Fragment>
      {/* <Header /> */}
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
      </div>
      <Form callApi={callApi}
      />
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
