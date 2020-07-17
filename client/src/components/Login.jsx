import React from 'react'
import './Shared.scss'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
      <form className="login--form">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" placeholder="username" autoComplete="off" />
        <label htmlFor="password">Password</label>
        <input type="text" name="username" placeholder="username" autoComplete="off" />
        <button type='login' className="login-button">Let's Login in!
       </button>
      </form>
    </>
  )
}


