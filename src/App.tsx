import './App.css'
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from "react-router-dom";



const App: React.FC = () => {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App;
