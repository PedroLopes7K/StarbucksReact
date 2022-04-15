import React from 'react'
// import Logo from '../assets/logo.png'
import './Header.css'
export default function Header({ logo }) {
  return (
    <header>
      <div className="center">
        <div className="Logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="menu">
          <a>Home</a>
          <a> Sobe</a>
          <a>Menu</a>
          <a>Contato</a>
        </div>
      </div>
    </header>
  )
}
