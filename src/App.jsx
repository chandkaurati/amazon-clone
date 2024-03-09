import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Checkout from './Components/Checkout/Checkout'
import {BrowserRouter, Routes, Route }  from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/checkout' element={<Checkout/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
