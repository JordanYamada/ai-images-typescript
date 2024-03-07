import './App.css'
import React from 'react';
import Header from './Header';
import { Outlet } from "react-router-dom";



const App: React.FC = () => {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App;
