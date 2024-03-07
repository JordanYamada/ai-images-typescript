// import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
// import App from './App.tsx'
import Router from "./Router.jsx";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(

    <RouterProvider router={Router} />

)
