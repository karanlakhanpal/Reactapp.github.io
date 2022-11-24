import React from 'react'
import '../App.css'
import NavBar from '../components/NavBar'
import Items from '../components/Items'
import Slider from '../components/Slider'
import Product from '../components/Product'
import Footer from '../components/Footer'


function Homepage() {
  return (
    <>
    <NavBar />
    <Items />
    <Slider />
    <Product />
    <Footer />
    </>
  )
}

export default Homepage