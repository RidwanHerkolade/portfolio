import React from 'react'
import Home from './Component/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "./App.css"
const App = () => {
  return (
    <>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>}/>
         </Routes>
         <ToastContainer bodyClassName="toast__divs"/>
      </BrowserRouter>
    </>
  )
}

export default App
