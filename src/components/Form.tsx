import React, { useState } from 'react';


interface FormData {
  method: string;
  description: string;
  title: string;
}

interface FormProps {
  callApi: (formData: FormData) => void;
}


const Form: React.FC<FormProps> = (props) => {
  const [method, setMethod] = useState<string>('POST');
  const [description, setDescription] = useState<string>('')
  const [title, setTitle] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: FormData = {
      method,
      description,
      title
    };
    props.callApi(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>Describe your image: </span>
          <input
            name='description'
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)} />
          {/* <button type="submit">GO!</button> */}
        </label>
        <label >
          <span>Give your image a title: </span>
          <input
            name='title'
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)} />
          {/* <button type="submit">GO!</button> */}
        </label>
        <label className="methods">
          <button
            type="submit"
            name="POST"
            id="post"
            value="POST"
            onClick={(e) => { setMethod((e.target as HTMLButtonElement
            ).value) }}>GO!</button>
        </label>
      </form>
    </>
  );
}

export default Form;