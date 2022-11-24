import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function Products() {
  return (
    <>
    <NavBar />
    <div className="main">
      <div>
        <section><h3>Mobiles</h3></section>
        <section>
          <a href=""><img src="./images/iphone.png" alt="" /></a>
          <a href="">Iphone 14 Pro Max</a>
        </section>
        <section></section>
        <section></section>
      </div>
      <div>
        <section><h3>Electronics</h3></section>
        <section></section>
        <section></section>
        <section></section>
      </div>
      <div>
        <section><h3>Appliances</h3></section>
        <section></section>
        <section></section>
        <section></section>
      </div>
      <div>
        <section><h3>Fashion</h3></section>
        <section></section>
        <section></section>
        <section></section>
      </div>
      <div>
        <section><h3>Grooming</h3></section>
        <section></section>
        <section></section>
        <section></section>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Products