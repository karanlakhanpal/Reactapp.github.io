import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function Login() {
  return (
    <>
    <NavBar />
    <section className="contain">
        <div className="signup">
            <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" /> 
            </div>
            <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            </div>
            <button type="submit">Log In</button>
        </div>
    </section>
    <Footer />
    </>
  )
}

export default Login