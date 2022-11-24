import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function Cart() {
  return (
    <>
    <NavBar />
    <div className="data">
      <h1>Cart is Empty 😥</h1>
    </div>
    <Footer />
    </>
  )
}

export default Cart