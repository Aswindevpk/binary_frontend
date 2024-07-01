import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <Link to="/">Home</Link>      
        <Link to="/login">Login</Link>      
        <Link to="/register">Register</Link>      
        <Link to="/verify-otp">verify</Link>
        {/* http://localhost:3000/verify-otp?email=jeeva1%40gmail.com       */}
        <Link to="/forgot-password">forgot password</Link>      
        <Link to="/forgot-password-confirm/adfsd">forgot pass confim</Link>      
        <Link to="/reset-password">reset pass</Link>      
    </div>
  )
}

export default Header
