import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import FAQs from './Components/FAQs'
import Footer from './Components/Footer'
import Contactus from './Components/Contactus'
import Products from './Components/Products'
import Login from './Components/Login'
import Signup from './Components/Signup'
import './assest/style.css'
export default function App() {
  return (
    <>
      <Navbar />
      <div className='main'>
        <Routes >
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/FAQs" element={<FAQs/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/contact" element={<Contactus/>} />
          <Route path="/products" element={<Products/>} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}
