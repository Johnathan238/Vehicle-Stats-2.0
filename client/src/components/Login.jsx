import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Shared.scss'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
      {/* <Header /> */}

      <form className="login--form">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" placeholder="username" autoComplete="off" />
        <label htmlFor="password">Password</label>
        <input type="text" name="username" placeholder="username" autoComplete="off" />
        <button type='login' className="login-button">Let's Login in!
       </button>
      </form>




      {/* <Footer /> */}
    </>
  )
}


