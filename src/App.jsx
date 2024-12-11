import React from 'react'
import Home from './Component/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
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
