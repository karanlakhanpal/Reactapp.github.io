import React from 'react'
import Nav from '../components/NavBar'
import Footer from '../components/Footer'

function Signup() {
  return (
    <>
    <Nav />
    <section className="contain">
        <div className="signup">
            <div>
            <label htmlFor="fname">First Name</label>
            <input type="text" name="fname" id="fname" />
            </div>
            <div>
            <label htmlFor="lname">Last Name</label>
            <input type="text" name="lname" id="lname" />
            </div>
            <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" /> 
            </div>
            <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            </div>
            <button type="submit">Sign Up</button>
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default Signup