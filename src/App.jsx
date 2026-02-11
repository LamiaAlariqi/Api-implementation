import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './assets/pages/Home'
import './App.css'
import ProductsDetails from './assets/pages/ProductsDetails'
import Products from './assets/pages/Products'
import ProductDetails2 from './assets/pages/ProductDetails2'
import AboutUs from './assets/pages/AboutUs'
import Contact from './assets/pages/Contact'
import Login from './assets/pages/Login'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/'
          element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products/:id' element={<ProductsDetails />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/2/:id' element={<ProductDetails2 />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
